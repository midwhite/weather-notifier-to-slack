import Constants from './Constants';
import WeatherForecastEntity from './WeatherForecastEntity';

const fetchWeather = () => {
  const queryParams = {
    units: 'metric',
    lang: 'ja',
    id: Constants.OPEN_WEATHER_MAP_CITY_CODE_TOKYO,
  };
  const queryString = Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .join('&');

  const response = UrlFetchApp.fetch(
    `${Constants.OPEN_WEATHER_MAP_API_URL}?${queryString}`,
    {
      method: 'get',
      headers: {
        'x-rapidapi-key': Constants.OPEN_WEATHER_MAP_API_KEY,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    },
  );

  return new WeatherForecastEntity(JSON.parse(response.getContentText()));
};

export default fetchWeather;
