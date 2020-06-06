class Dom {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.tempc = document.getElementById("w-temp-c");
    this.tempf = document.getElementById("w-temp-f");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
  }

  changeToC(celsius) {
    return Math.floor(celsius);
  }

  changeToF(fahrenheit) {
    return Math.floor((fahrenheit * 9) / 5 + 32);
  }

  show(weather) {
    this.location.textContent = weather.location.name;
    this.tempc.innerHTML = `${this.changeToC(weather.current.temperature)}&deg`;
    this.tempf.innerHTML = `${this.changeToF(weather.current.temperature)}&deg`;
    this.desc.textContent = weather.current.weather_descriptions[0];
    this.icon.setAttribute("src", `${weather.current.weather_icons[0]}`);
    this.humidity.innerHTML = `Humidity: ${weather.current.humidity}<span>%</span>`;
    document.getElementById("w-temp-f").style.display = "none";
    document.getElementById("toggle").addEventListener("click", function () {
      if (document.getElementById("switch").innerHTML === "Celsius") {
        document.getElementById("switch").innerHTML = "Fahrenheit";
        document.getElementById("w-temp-c").style.display = "none";
        document.getElementById("w-temp-f").style.display = "block";
      } else if (document.getElementById("switch").innerHTML === "Fahrenheit") {
        document.getElementById("switch").innerHTML = "Celsius";
        document.getElementById("w-temp-f").style.display = "none";
        document.getElementById("w-temp-c").style.display = "block";
      }
    });
  }
}
export { Dom };
