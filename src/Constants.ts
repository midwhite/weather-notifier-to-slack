export default class Constants {
  public static SLACK_INCOMING_WEBHOOK_URL =
    PropertiesService.getScriptProperties().getProperty(
      'SLACK_INCOMING_WEBHOOK_URL',
    );
  public static OPEN_WEATHER_MAP_API_KEY =
    PropertiesService.getScriptProperties().getProperty(
      'OPEN_WEATHER_MAP_API_KEY',
    );
  public static OPEN_WEATHER_MAP_API_URL =
    'https://community-open-weather-map.p.rapidapi.com/forecast';
  public static OPEN_WEATHER_MAP_CITY_CODE_TOKYO = '1850144';
}
