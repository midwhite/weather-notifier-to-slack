import fetchWeather from './fetchWeather';
import postToSlack from './postToSlack';
import setSecretValues from './setSecretValues';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const main = () => {
  setSecretValues();
  const weather = fetchWeather();
  postToSlack(weather.getMessage());
};
