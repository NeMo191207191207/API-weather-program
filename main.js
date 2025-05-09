const apiKey = "79a6caa87dbe8b4a644dc6b82dcbaa55"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const weatherIcon = document.querySelector(".weather-image i")
const searchInput = document.querySelector(".search-box input")
const searchButton = document.querySelector(".search-box button")
async function chackWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display = "block"
  document.querySelector(".weather").style.display = "none"
  }
  const data = await response.json()
  console.log(data, "data");
  
  document.querySelector('.city').innerHTML = data.name
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "&#8451"
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
  document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"

  if(data.weather[0].main =="Clear"){
    weatherIcon.className = "fa-solid fa-sun"
  } else if(data.weather[0].main =="Rain"){
    weatherIcon.className = "fa-solid fa-cloud-rain"
  } else if (data.weather[0].main =="Mist"){
    weatherIcon.className = "fa-solid fa-cloud-mist"
  } else if (data.weather[0].main =="Drizzle"){
    weatherIcon.className = "fa-solid fa-cloud-drizzle"
  }

  document.querySelector(".weather").style.display = "block"
  document.querySelector(".error").style.display = "none"


}


searchButton.addEventListener("click", () => {
  chackWeather(searchInput.value);
  searchInput.value = "";
  
})
searchInput.addEventListener("keydown", (e) => {
  if(e.keyCode === 13){
    chackWeather(searchInput.value);
    searchInput.value = "";
  }
})