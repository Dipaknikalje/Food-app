import React from 'react'
import './logofile.css'
import { NavLink } from 'react-router-dom'

const LogoFile = () => {
  return (
    <div className='logo-box'>
      <ul className='logos'>
        <li>
        <i class="fa-solid fa-magnifying-glass" id="search"></i>
        </li>
        <li>
        <i class="fa-regular fa-bookmark"></i>
        </li>
        <li>
       <NavLink to="/login" className="nav_link"><i class="fa-regular fa-user"></i></NavLink> 
        </li>
      </ul>
    </div>
  )
}

export default LogoFile
