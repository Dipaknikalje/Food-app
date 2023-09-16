import React, { useState } from 'react'
import './logofile.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Profile from '../Auth/userafterlogin/Profile'

const LogoFile = () => {
  const [showProfile,setShowProfile]=useState(false)
  const navi=useNavigate()

  const handleClick=()=>{
    setShowProfile(!showProfile);
  }
  const handleSearch=()=>{
navi('/search')
  }

  if(localStorage.getItem("loggedIn")){
  return (
    <div className='logo-box'>
      <ul className='logos'>
        <li>
          {/* <NavLink to='/search'> */}
        <i class="fa-solid fa-magnifying-glass" id="search" onClick={handleSearch}></i>
        {/* </NavLink> */}
        </li>
        <li>
          <NavLink to="/saverecipe">
        <i class="fa-regular fa-bookmark" id="saved"></i>
        </NavLink>
        </li>
        <li>
        <i class="fa-regular fa-face-smile" id="smile" onClick={handleClick}></i>
        </li>
      </ul>
      <div>{showProfile && <Profile/>}</div>
    </div>
  )
  }
  else{
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
}

export default LogoFile
