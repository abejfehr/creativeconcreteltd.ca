// fetch the current weather and display it on the page

const WINKLER_LAT = 49.1817;
const WINKLER_LON = -97.941;

fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${WINKLER_LAT}&longitude=${WINKLER_LON}&current=temperature_2m,weather_code`,
)
  .then((res) => res.json())
  .then((data) => {
    const notClear = data.current.weather_code > 5;

    let emoji = "";

    switch (data.current.weather_code) {
      case 0:
        emoji = "☀️";
        break;
      case 1:
        emoji = "🌤️";
      case 2:
        emoji = "🌥️";
        break;
      case 3:
        emoji = "☁️";
        break;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
      case 61:
      case 63:
      case 65:
      case 80:
      case 81:
      case 82:
        emoji = "🌧️";
        break;
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        emoji = "🌨️";
        break;
      case 95:
      case 96:
      case 99:
        emoji = "🌩️";
        break;
    }

    let what = "";
    if (data.current.temperature_2m < 5 || notClear) {
      what = "casting concrete indoors";
    } else {
      what = "pouring concrete outside";
    }

    if (data.current) {
      document.querySelector(".weather").innerHTML =
        `${emoji} It's ${data.current.temperature_2m}º C in Southern Manitoba, perfect weather for ${what}.`;
    }
  });
