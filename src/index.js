import { Weather } from "./weather";
import { Dom } from "./views";

const weather = new Weather("Harare");
const dom = new Dom();

document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      dom.show(results);
    })
    .catch((err) => console.log(err));
}
