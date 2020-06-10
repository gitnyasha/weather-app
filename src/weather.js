class Weather {
  constructor(city) {
    this.apiKey = 'f374063fac3fb5e66f52e39195a343bd';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`,
    );
    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}

export default Weather;
