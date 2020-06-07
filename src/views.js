class Dom {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.tempc = document.getElementById('w-temp-c');
    this.tempf = document.getElementById('w-temp-f');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
  }

  show(weather) {
    this.location.innerHTML = `${weather.location.name}`;
    this.tempc.innerHTML = `${Math.floor(weather.current.temperature)}&deg`;
    this.tempf.innerHTML = `${Math.floor((weather.current.temperature * 9) / 5 + 32)}&deg`;
    this.desc.innerHTML = `${weather.current.weather_descriptions[0]}`;
    this.icon.setAttribute('src', `${weather.current.weather_icons[0]}`);
    this.humidity.innerHTML = `Humidity: ${weather.current.humidity}<span>%</span>`;
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
