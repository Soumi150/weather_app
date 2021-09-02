
function DisplayWeather({weatherData}){
    var dt = weatherData.dt * 1000;
    var time = new Date(dt).toLocaleString();
    return(
        <div>
            <div className=" weather mx-auto card text-center" style={{width: "18rem"}}>
             <div className ="card-body">
             <h3 className ="card-title">Current Weather</h3>
             <p className="card-text">{weatherData.name}, {weatherData.sys.country}</p>
             <p className="card-text">{time}</p>
             <h5 className="card-text">{weatherData.main.temp} F</h5>
             <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-icon"></img>
             <p className="card-text">{weatherData.weather[0].main}</p>
             <p className="card-text">Feels Like: {weatherData.main.feels_like} &nbsp; Wind: {weatherData.wind.speed}/h</p>
             <p className="card-text">Visibility: {weatherData.visibility/1000} km &nbsp; Humidity: {weatherData.main.humidity} %</p>
             </div>
            </div>
        </div>
    )
}
export default DisplayWeather;