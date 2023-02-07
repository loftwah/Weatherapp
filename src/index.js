const time = document.getElementById("time");

function displayTime() {
  const currentTime = new Date();
  let dayOfWeek;
  switch (currentTime.getDay()) {
    case 0:
      dayOfWeek = "Sunday";
      break;
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
    default:
      dayOfWeek = "Invalid Day of Week";
      console.log("Invalid Day of Week");
  }
  const date = currentTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  time.textContent = `${dayOfWeek}, ${date} ${hour}:${minutes}`;
}

setInterval(displayTime, 1000);

const form = document.getElementById("search-form");
const cityName = document.getElementById("city-name");

function handleSubmit(event) {
  event.preventDefault();
  const cityInput = document.querySelector('input[name="q"]');
  const city = cityInput.value;
  searchCity(city);
}

function searchCity(city) {
  const apiKey = "f853d779bfd20dcdcb8c01930821455a";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then((res) => {
    showTemperature(res.data.main.temp);
    showCityName(res.data.name);
     showWeatherIcon(res.data.weather[0].icon);
  });
 
}

function showTemperature(temperature) {
  const temperatureElement = document.querySelector("h5");
  temperatureElement.innerHTML = temperature + "K";
}

function showCityName(cityName) {
  const cityNameElement = document.getElementById("city-name");
  cityNameElement.innerText = cityName;
}
function showWeatherIcon(icon) {
  const iconElement= document.querySelector("img");
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.setAttribute("src", iconUrl);
}
form.addEventListener("submit", handleSubmit);
