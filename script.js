const container=document.querySelector(".container");
const searchbox=document.querySelector(".searchbutton");
const weatherbox=document.querySelector(".weather-box");
const weatherdetails=document.querySelector(".weatherdetails");

searchbox.addEventListener("click",function(){
  const apikey="172ad42604035415f29ea4248a36ac61";
  const geocode="e25b1632ceaa4744a8454b6e6c38a77d";
  const city=document.querySelector(".inputtext").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
  .then(response=>response.json()).then(json=>{
    const images=document.querySelector(".weather-box img")
    const temperature=document.querySelector(".temperature")
    const humidity=document.querySelector(".infohumidity")
    const windspeed=document.querySelector(".infowind")
    const description=document.querySelector(".description")

    switch(json.weather[0].main)
    {
      case 'Clear':
        images.src='images/clear.png';
         break;
      case 'Rain':
        images.src='images/rain.png';
         break;
      case 'Snow':
        images.src='images/snow.png';
         break;
      case 'Clouds':
        images.src='images/cloud.png';
         break;
      case 'Mist':
        images.src='images/mist.png';
         break;
      
      default:
        images.src='images/clear.png'
        break;
    }
    temperature.innerHTML= `${parseInt(json.main.temp)-273}<span>°C</span>`
    description.innerHTML=`${json.weather[0].description}`
    humidity.innerHTML=`${json.main.humidity}<span>%</span>`
    windspeed.innerHTML=`${parseInt(json.wind.speed)}<span>km/h<span>`
    
   
  })
})
