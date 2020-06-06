class Weather {
  constructor(city) {
    this.apiKey = "d05c6d708985ea91c4e8f243752d95c0";
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
export { Weather };
