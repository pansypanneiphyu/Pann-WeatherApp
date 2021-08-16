let now = new Date();
let showTodayDate = document.querySelector("p");

let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay];
let hours = now.getHours();
let minutes = now.getMinutes();
showTodayDate.innerHTML = `Monday, ${hours}:${minutes}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("h3").innerHTML = response.data.name;
  document.querySelector("#todayTemperature").innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let cities = document.querySelector("#search-text-input").value;
  let units = "metric";
  let apiKey = "0a804b7f298f836affe743f4487d2e7b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#todayTemperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#todayTemperature");
  temperatureElement.innerHTML = 19;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
