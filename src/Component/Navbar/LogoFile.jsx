import React from 'react'
import './logofile.css'
import { NavLink } from 'react-router-dom'

const LogoFile = () => {
  return (
    <div className='logo-box'>
      <ul className='logos'>
        <li>
          <NavLink to='/search'>
        <i class="fa-solid fa-magnifying-glass" id="search"></i>
        </NavLink>
        </li>
        <li>
          <NavLink to="/saverecipe">
        <i class="fa-regular fa-bookmark" id="saved"></i>
        </NavLink>
        </li>
        <li>
       <NavLink to="/login"><i class="fa-regular fa-user" id="profile"></i></NavLink> 
        </li>
      </ul>
    </div>
  )
}

export default LogoFile
