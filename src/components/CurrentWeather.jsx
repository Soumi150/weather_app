import React, {useState} from 'react';
import DisplayWeather from "./DisplayWeather";
import CityInput from './CityInput';
function CurrentWeather(){
    const [cityInput, setCityInput] = useState("");
    function handleChange(e){
        setCityInput(e.target.value) ;
    }
    
    const [data, setData] = useState("");
    
  function handlekeypress(){
    if(cityInput!==""){
      getWeather();
      }
    setCityInput("");
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${process.env.REACT_APP_API_KEY}` ;
  async function getWeather(){
        return await fetch (url)
        .then(response => response.json())
        .then(result => {
          setData(result);
        })
        .catch(e => console.log(e));
      }
  
      
    return(
        <>
        <div className= "cityInput text-center">
        <label>Enter City</label>
        <br/>
        <CityInput
        Input={cityInput}
        handleChange={handleChange}
        handlekeypress={handlekeypress}
        />
        </div>
        {(typeof data.main != 'undefined') ? (
        <DisplayWeather weatherData={data}/>
      ): (
        <div></div>
      )}
        </>
    )
}
export default CurrentWeather;