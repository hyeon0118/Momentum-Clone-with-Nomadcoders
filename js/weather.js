const API_KEY = '0eaa30eb27754450f1faa40e33180489';
const weatherContainer = document.getElementById('weather')
const city = document.querySelector('span#city')
const temperature = document.querySelector('span#temperature')

const COORDINATION = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDINATION, JSON.stringify(coordsObj));
}




function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordsObj = [
        lat,
        lon,
    ]

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    saveCoords(coordsObj);
    
    //haven't understood yet. 
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const createIcon = document.createElement('img')
        const iconId = data.weather[0].icon;
        city.innerText = data.name;
        temperature.innerText = `${Math.round(data.main.temp)} °C`;
        createIcon.id = 'weather-icon'
        createIcon.src = `https://openweathermap.org/img/w/${iconId}.png`
        weatherContainer.appendChild(createIcon);
    });
    

}

function onGeoError() {
    alert("Weather information unavailable")
}


function askForGeo() {
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

const loadedCoords = localStorage.getItem(COORDINATION)

function loadGeo() {
    if (loadedCoords === null) {
        askForGeo();
    } 
}

loginForm.addEventListener('submit',loadGeo);


if (loadedCoords !== null) {
    const lat = JSON.parse(localStorage.getItem('coords'))[0]
    const lon = JSON.parse(localStorage.getItem('coords'))[1]

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const createIcon = document.createElement('img')
        const iconId = data.weather[0].icon;
        city.innerText = data.name;
        temperature.innerText = `${Math.round(data.main.temp)} °C`;
        createIcon.id = 'weather-icon'
        createIcon.src = `https://openweathermap.org/img/w/${iconId}.png`
        weatherContainer.appendChild(createIcon);
    });
}
