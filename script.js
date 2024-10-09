function weather(){
  const city_name = document.querySelector("#c_name").value;

  axios.get(`https://api.weatherapi.com/v1/current.json?key=4d84b07176dd4334b9272747242602&q=${city_name}&aqi=yes`)
  .then(function (response) {
    let weather = response.data
    console.log(weather);
    document.getElementById("temp_s").innerHTML=(`${city_name} Temp: ${weather.current.temp_c} °C`)
    document.getElementById("hum_s").innerHTML=(`Humidity: ${weather.current.humidity}%`)
    document.getElementById("wind_s").innerHTML=(`Wind: ${weather.current.wind_kph} KMPH`)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}