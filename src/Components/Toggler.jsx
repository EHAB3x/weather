import React, { useEffect, useState } from 'react'
import './CSS/Toggler.css'
const Toggler = () => {
    const [toggle , setToggle]= useState('');
    const [right , setRight]= useState('');
    useEffect(()=>{
        const toggle = document.querySelector('.toggler');
        const right = document.querySelector('.right')
        setToggle(toggle);
        setRight(right);
    },[]);
    const menuControll=()=>{
        right.classList.toggle('show');
        console.log("Yes");
    }
  return (
    <div className='toggler' onClick={()=> menuControll()}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default Toggler