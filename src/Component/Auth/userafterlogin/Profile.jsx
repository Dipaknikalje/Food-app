import React, { useState } from 'react'
import './profile.css'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = () => {
  const [show,setShow]=useState(localStorage.getItem('loggedIn'))
  console.log(show)
  const handleLogout=()=>{
    localStorage.clear();
    setShow(!show);
    toast.info("Logout successfully",
    {position: toast.POSITION.TOP_RIGHT})
    window.location.reload()
  }

  const Renderprofile=()=>{
    if(show){
      return (
        <div className='user-profile'>
           <ul>
           <li> <NavLink to="/user" className="li-nav-link">Profile</NavLink></li>
           <li><NavLink to="/addrecipe" className="li-nav-link">Add a Recipe</NavLink></li>
           <li><NavLink to="/usersetting" className="li-nav-link">User Setting</NavLink></li>
            <li><NavLink to="/login" className="li-nav-link" onClick={handleLogout} >Logout</NavLink>  </li>
          </ul>
    
        </div>
      )
    }
   

}
return(
  <>
  <Renderprofile/>
  </>
)


}

export default Profile
