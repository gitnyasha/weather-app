class Dom {
  constructor() {
    this.locate = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp-c');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
  }

  show(weather) {
    this.locate.innerHTML = `${weather.name}`;
    this.temp.innerHTML = `${Math.floor(weather.main.temp - 273.15)}&deg C`;
    this.desc.innerHTML = `${weather.weather[0].description}`;
    this.icon.setAttribute("src", `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.innerHTML = `Humidity: ${weather.main.humidity}<span>%</span>`;
    document.getElementById("toggle").addEventListener("click", () => {
      this.temp.innerHTML = `${Math.floor((weather.main.temp - 273.15) * 9 / 5 + 32)}&deg F`;
    });
    document.getElementById("togglef").addEventListener("click", () => {
      this.temp.innerHTML = `${Math.floor(weather.main.temp - 273.15)}&deg C`;
    });
  }
}
export default Dom;
