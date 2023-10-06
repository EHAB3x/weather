import React, { useEffect, useState } from 'react'
import './CSS/RightNav.css'
const RightNav = () => {
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        setInterval(()=>{
            const time = new Date();
            setTime(time);
        },1000)
    },[])
  return (
    <nav className='right_nav'>
        <h2>{time.getHours() < 12 ? "Good Morning": "Good Evening"}</h2>
        <p className='time'>{`${time.getHours() > 12 ? time.getHours() - 12 : time.getHours()} : ${time.getMinutes()} ${time.getHours() > 12 ? "PM" : "AM"}`}</p>
    </nav>
  )
}

export default RightNav