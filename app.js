document.addEventListener('DOMContentLoaded',cityWeather)

function fetchWeatherInfo(city){
    var key='6cec3250795104e5b0a08a43046cdb28'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(function (resp){
        return resp.json()
    })
    .then(function (data){
        console.log(data)
    })
    .catch(function (){

    })
}

function cityWeather(e){
    fetchWeatherInfo("Tallinn")
}