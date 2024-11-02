let now = new Date();
let min = now.getMinutes();
let hr = now.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let time = document.querySelector("#time");
time.innerHTML = `${day} ${hr}:${min}`;

function showCity(event) {
  event.preventDefault();
  let input = document.querySelector(".search");
  let city = document.querySelector(".current-city");
  city.innerHTML = input.value;
}

let form = document.querySelector("form");
form.addEventListener("submit", showCity);
//
function showUser(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  let temp = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  //cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temp;
  console.log(temp);
}

function search(event) {
  event.preventDefault();
  let cityValue = document.querySelector(".search");
  let city = cityValue.value;

  let apiKey = "44f7a844ccaae8fbao1218t90975e873";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(showUser);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", search);
