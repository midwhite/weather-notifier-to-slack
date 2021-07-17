import { dayjs } from './@types/dayjs';

interface ForecastMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

type WeatherType = 'Thunderstorm' | 'Rain' | 'Snow' | 'Extreme';

interface Weather {
  id: number;
  main: WeatherType;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface ForeCast {
  dt: number;
  main: ForecastMain;
  weather: Weather[];
  wind: Wind;
  visibility: number;
  pop: number; // 降水確率
  sys: { pod: 'n' | 'd' };
  dt_txt: string;
}

interface City {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  country: 'JP';
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface OpenWeatherMapResponse {
  list: ForeCast[];
  city: City;
}

export default class WeatherForecastEntity {
  private response: OpenWeatherMapResponse;

  constructor(response: OpenWeatherMapResponse) {
    this.response = response;
  }

  public getMessage() {
    const list = this.response.list.slice(2, 8);
    const messages = [
      '今日の天気をお知らせします！',
      this.getHourlyWeatherIconList(list),
      ...list.map(this.getHourlyMessage.bind(this)),
    ];

    return messages.join('\n');
  }

  private getHourlyWeatherIconList(forecasts: ForeCast[]) {
    return forecasts
      .map((forecast) => forecast.weather.map((w) => `:${w.icon}:`).join(' '))
      .join(' ');
  }

  private getHourlyMessage(forecast: ForeCast) {
    const time = this.formatDateFromUnixtime(forecast.dt, 'HH:mm');
    const { temp, feels_like, humidity } = forecast.main;
    return `${time}- 気温: ${temp}℃ 体感温度: ${feels_like}℃ 湿度: ${humidity}% 降水確率: ${forecast.pop}%`;
  }

  private formatDateFromUnixtime(unixtime: number, format: string) {
    const date = new Date(unixtime * 1000);
    return this.formatDate(date, format);
  }

  private formatDate(date: Date | string, format: string) {
    const moment = dayjs.dayjs(date);
    return moment.add(9, 'hour').format(format);
  }
}
