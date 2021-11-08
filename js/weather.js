const API_KEY = "0eaa30eb27754450f1faa40e33180489";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `/ ${Math.round(data.main.temp)} °C ${data.weather[0].main}`;
    });
    //url 가져오기 크롬 network가면 wifi에 인터넷에 무슨 일 일어나는지 나타남 
    //실제로 거기 갈 필요 없이 가져올 것임 그 불러온거 누르면 웹 페이지 내용 나타남


}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//function 2개 갖는다, 하나는 모든게 잘 됐을 때 실행될 함수, 다른하나는 에러가 발생했을 때 