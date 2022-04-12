import './style.css';

//gets json from api call to openweather
async function getWeather(location) { 
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=cfa56b7e1c85cefc27cb2887c8ae1708`,{mode: 'cors'} )
    let weatherData = await response.json();
    // console.log(weatherData.name);
    processJson(weatherData);

}

//takes json and scrubs the useful data
async function processJson(json) { 
    // console.log(json);
    const processedData = new Object();
    processedData.name = json.name;
    processedData.temp = json.main.temp;
    processedData.weather = json.weather[0].main;
    displayWeather(processedData);
    return processedData;
}

//sets up search function
const search = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-button');
searchBtn.addEventListener("click", function(e){
    e.preventDefault();
    searchWeather();
});

function searchWeather() {
    getWeather(search.value);
}

//displays the weather data on the page
function displayWeather(processedData) {
    const city = document.querySelector('.city');
    const temperature = document.querySelector('.temperature');
    const weather = document.querySelector('.weather');

    city.textContent = `City: ${processedData.name}`;
    temperature.textContent = `Temperature: ${processedData.temp}`;
    weather.textContent = `Weather: ${processedData.weather}`;
}

//openweather api cfa56b7e1c85cefc27cb2887c8ae1708S