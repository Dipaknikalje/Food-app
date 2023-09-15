import React, { useEffect, useState } from 'react'
import { FaUser, FaSearch, FaBookmark, FaRegUser, FaRegBookmark } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';
import LoginForm from '../components/LoginForm/LoginForm';
import './navbar.style.css'
import {useSelector, useDispatch} from 'react-redux'
import { loginFunc } from '../Utility/reduxtool/UserLoggedSlice';
import SignupForm from '../components/SignupGorm/SignupForm';
import { Link, useNavigate } from 'react-router-dom';

function NavIcons() {
const state = useSelector(state=>state.userControl)

const [loggedIn, setLoggedIn] = useState(false)
const [loggedInDropDown, setLoggedInDropDown] = useState(false)

// console.log(state);
  // const [home, setHome] = useState(true)
  const [login, setLogin] =useState(state.loginPage)
  // const [signup, setSignup] = useState(state.signinPage)
  const dispatch = useDispatch()
  const navi = useNavigate()

  useEffect(()=>{
    setLogin(state.loginPage)
  }, [state])

  const token = localStorage.getItem("token")
  useEffect(()=>{
   if(token){
    setLoggedIn(token)
   }
  },[token])

  const handleUser = ()=>{
    dispatch(loginFunc())
    setLogin(login)
  }

const handleLoggedUser=()=>{
  setLoggedInDropDown(!loggedInDropDown)

}

const handleLogout=()=>{
  localStorage.clear()
  setLoggedInDropDown(false)

}

  return (
    <>
   
    <div className='NavBar-icon-cntr'>
        <div className='Nav-Search' onClick={()=>navi('/search')}><IoIosSearch className='nav-icn' /></div>
          <div onClick={()=>navi('/saves')}><FaRegBookmark className='nav-icn' /></div>
          
          { 
          token 
          ?
          <>
          <div onClick={handleLoggedUser} className='smile-emoji'><BsEmojiSmileFill/></div>
          {
           loggedInDropDown &&
           <ul className='loggedInDropDown'>
              <li><Link to='/profile'>Profile</Link></li> 
              {/* <li>Add a Recipe</li> 
              <li>User Setting</li>  */}
              <li onClick={handleLogout}><Link to='/'>Logout</Link></li>
           </ul> 
          }
          </>
          :
          <div onClick={handleUser}><FaRegUser className='nav-icn' /></div>
          }
          </div>
    {state.loginPage && <div className="backDrop"></div>}
      {state.loginPage && <LoginForm />}
      {state.signinPage && <div className="backDrop"></div>}
      {state.signinPage && <SignupForm />}
    </>
  )
}

export default NavIcons