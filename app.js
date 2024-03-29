const api_key = "12a8a574e1e43c58bd19add7fa2c13dc";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(cityname) {
  const response = await fetch(api_url + cityname +`&appid=` + api_key);
  var data = await response.json();
  console.log(data);

  document.querySelector(".cityname").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if  (data.weather[0].main == "Clouds"){
    document.querySelector(".weather-details").innerHTML = data.weather[0].description;
    weatherIcon.src="images/clouds.png"
  }
  else if(data.weather[0].main=="Rain"){
    document.querySelector(".weather-details").innerHTML = data.weather[0].description;
    weatherIcon.src="images/rain.png"
  }
  else if(data.weather[0].main=="Drizzle"){
    document.querySelector(".weather-details").innerHTML = data.weather[0].description;
    weatherIcon.src="images/drizzle.png"
  }
  else if(data.weather[0].main=="Mist"){
    document.querySelector(".weather-details").innerHTML = data.weather[0].description;
    weatherIcon.src="images/mist.png"
  }
  else if(data.weather[0].main=="Snow"){
    document.querySelector(".weather-details").innerHTML = data.weather[0].description;
    weatherIcon.src="images/snow.png"
  }
  else if(data.weather[0].main=="Clear"){
    document.querySelector(".weather-details").innerHTML = data.weather[0].description;
    weatherIcon.src="images/clear.png"
  }
  else if(data.weather[0].main=="Haze"){
    document.querySelector(".weather-details").innerHTML = data.weather[0].description;
    weatherIcon.src="images/haze.png"
  }
  else if(data.weather[0].main=="Smoke"){
    document.querySelector(".weather-details").innerHTML = data.weather[0].description;
    weatherIcon.src="images/smoke.png"
  }
}
searchbtn.addEventListener("click",()=>{
    getWeather(searchbox.value);
})
