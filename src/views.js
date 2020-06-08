class Dom {
  constructor() {
    this.locate = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.tempc = document.getElementById('w-temp-c');
    this.tempf = document.getElementById('w-temp-f');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
  }

  show(weather) {
    this.locate.innerHTML = `${weather.name}`;
    this.tempc.innerHTML = `${Math.floor(weather.main.temp - 273.15)}&deg`;
    this.tempf.innerHTML = `${Math.floor((weather.main.temp - 273.15) * 9 / 5 + 32)}&deg`;
    this.desc.innerHTML = `${weather.weather[0].description}`;
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.innerHTML = `Humidity: ${weather.main.humidity}<span>%</span>`;
    document.getElementById('w-temp-f').style.display = 'none';
    document.getElementById('toggle').addEventListener('click', () => {
      if (document.getElementById('switch').innerHTML === 'Celsius') {
        document.getElementById('switch').innerHTML = 'Fahrenheit';
        document.getElementById('w-temp-c').style.display = 'none';
        document.getElementById('w-temp-f').style.display = 'block';
      } else if (document.getElementById('switch').innerHTML === 'Fahrenheit') {
        document.getElementById('switch').innerHTML = 'Celsius';
        document.getElementById('w-temp-f').style.display = 'none';
        document.getElementById('w-temp-c').style.display = 'block';
      }
    });
  }
}
export default Dom;
