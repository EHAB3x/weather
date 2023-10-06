import React, { useEffect, useState } from 'react'
import './CSS/Forecast.css'
const Forecast = () => {
    const [hour,setHour] = useState(0);
    const[forecast, setForecast]= useState([]);
    useEffect(()=>{
        setInterval(() => {
            const hour = new Date().getHours();
            setHour(hour)
        }, 10000);
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=ef772a792c9e479980654507230510&q=${window.localStorage.getItem('place')}&days=7&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(data => {
            setForecast(data.forecast.forecastday[0].hour.slice(hour, hour + 9))
            console.log(data.forecast.forecastday[0].hour.slice(hour, hour + 9))
        })
        .catch(err => console.log('Waiting...'));
    },[hour])
  return (
    <div className='hourly_forecast'>
        <h3>Hourly Forecast</h3>
        <ul>
            {forecast.map((hour, ind)=>{
                return(
                    <li key={ind}>
                        <h4>{hour.time.slice(10,16)}</h4>
                        <p>{hour.temp_c}</p>
                        <span>{hour.condition.text}</span>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Forecast