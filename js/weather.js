const API_KEY = "e7cb4c6a33c37c591c60e87ef674322c";

function onGeoOk(position){
     const lat = position.coords.latitude;
     const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const locate = document.querySelector('.locate');
        const weather = document.querySelector(".weather");
        const degree = document.querySelector(".degree");
        locate.innerText = `${data.name}`;
        degree.innerText = `${Math.round(data.main.temp)}°C`;
        weather.innerHTML = `${data.weather[0].main}`;
    })

}

function onGeoError(){
    document.querySelector(".defalut-box__error").classList.add('show');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);