import React, { useEffect, useState } from 'react'
import './CSS/LeftNavbar.css'
const LeftNavbar = () => {
  const [today, setToday]=useState('');
  useEffect(()=>{
    const today= new Date();
    setToday(today.toLocaleDateString());
    console.log(today.toLocaleDateString());
  },[])
  return (
    <nav className='left_nav'>
      <h2>Weather App</h2>
      <p>{today}</p>
    </nav>
  )
}

export default LeftNavbar