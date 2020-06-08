import Weather from './weather';
import Dom from './views';

const weather = new Weather('Harare');
const dom = new Dom();

function getWeather() {
  weather.getWeather().then((results) => {
    dom.show(results);
  });
}

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  document.getElementById('city').value = '';

  getWeather();
  e.preventDefault();
});