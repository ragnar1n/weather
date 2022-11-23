document.addEventListener('DOMContentLoaded',cityWeather)

function fetchWeatherInfo(city){
    var key='6cec3250795104e5b0a08a43046cdb28'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(function (resp){
        return resp.json()
    })
    .then(function (data){
        console.log(data)
        drawWeather(data)
    })
    .catch(function (){

    })
}

function cityWeather(e){
    fetchWeatherInfo("Tallinn")
}

function drawWeather(data){
    var celcius=Math.round(parseFloat(data.main.temp)-273.15)
    var description=data.weather[0].description
    document.querySelector('#description').innerHTML=description
    document.querySelector('#temp').innerHTML=celcius+'&degC'
    document.querySelector('#location').innerHTML=data.name
}