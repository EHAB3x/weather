import React, { useEffect, useState } from 'react'
import './CSS/Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faHome, faHomeAlt, faWind } from '@fortawesome/free-solid-svg-icons';
const Landing = () => {
    const [latitude, setLatitude]=useState(0);
    const [longitude, setLongitude]=useState(0);
    const [place, setPlace]=useState('');
    const [weather, setWeather]=useState({});
    const [temp, setTemp]=useState(0);
    const [state, setState]=useState('');
    const [days, setDays]=useState([]);
    const [avgTemp, setAvgTemp]=useState(0);
    const [allState, setAllState]=useState('');
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log( "Geolocation is not supported by this browser.");
        }
      }
      
      function showPosition(position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      }

      useEffect(()=>{
        
        fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
        .then(res => res.json())
        .then(data => setPlace(Object.values(data.address)[0]))
        .catch(err => console.log('Waiting...'))

        getLocation();

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=ef772a792c9e479980654507230510&q=${window.localStorage.getItem("place")}&days=7&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(data => {
          setWeather(data);
          setTemp(weather.current.temp_c);
          setState(weather.current.condition.text);
          setDays(weather.forecast.forecastday);
          setAvgTemp(weather.forecast);
          setAllState(weather.forecast)
        })
        .catch(err => console.log('Waiting...'));

      },[latitude,longitude])   
  return (
    <>
    <div className="landing">
          <h1>{temp}</h1>
        <p className='state'>{state}</p>
        <p className='place'><FontAwesomeIcon icon={faHome}/>{place}</p>
    </div>

    <ul className='forecast'>
      {days.map((day, ind)=>{
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date(day.date);
        return(
          <li className={ind===0 && 'active'} key={ind}>
            <h4>{weekday[d.getDay()]}</h4>
            <span className='heat'>{ind === 0 ? temp : avgTemp.forecastday[ind].day.avgtemp_c}</span>
            <span>{allState.forecastday[ind].day.condition.text}</span>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default Landing