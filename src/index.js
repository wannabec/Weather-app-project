let todaysDate = new Date();
console.log(todaysDate);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let today = days[todaysDate.getDay()];
console.log(today);

let hour = todaysDate.getHours();
let min = todaysDate.getMinutes();
let time = `${hour}:${min}`;
console.log(time);

let dayAndTime = `${today} ${time}`;
let dayTime = document.querySelector(".searchedLocationDateTime");
dayTime.innerHTML = dayAndTime;
console.log(dayAndTime);

function submitting(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".cityInput");
  let locationholder = document.querySelector(".searchedLocation");
  locationholder.innerHTML = cityInput.value;
  searchForTemp(cityInput.value);
}
let cityForm = document.querySelector(".weatherForm");
cityForm.addEventListener("submit", submitting);

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  console.log(response);
  let tempUpdate = document.querySelector(".searchedForTemperature");
  tempUpdate.innerHTML = `${temp}`;
}

function searchForTemp(city) {
  //console.log(city);
  let apiKey = "3c949ba49d38be2487ee278e0d2d4059";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemp);
}

//function convert(event) {
//event.preventDefault();
//let tempchange = document.querySelector("h5.maintemp");
//let faren = 64;
//tempchange.innerHTML = faren;
//}

//let farenLink = document.querySelector("#f-link");
//farenLink.addEventListener("click", convert);

//function convertback(event) {
//event.preventDefault();
//let changeback = document.querySelector("h5.maintemp");
//let cel = 17;
//changeback.innerHTML = cel;
//}

//let celLink = document.querySelector("#c-link");
//celLink.addEventListener("click", convertback);
