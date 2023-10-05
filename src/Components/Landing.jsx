import React, { useEffect, useState } from 'react'
import './CSS/Form.css'
const Landing = () => {
    const [latitude, setLatitude]=useState(0);
    const [longitude, setLongitude]=useState(0);
    const [place, setPlace]=useState('');
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log( "Geolocation is not supported by this browser.");
        }
      }
      
      function showPosition(position) {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
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
        .then(data => console.log(data))
        .catch(err => console.log('Waiting...'))
      },[latitude,longitude])

      console.log(place);
  return (
    <div className="landing">
        
    </div>
  )
}

export default Landing