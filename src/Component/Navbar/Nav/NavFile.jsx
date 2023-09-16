import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navfile.css";
import {RxCross2} from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { BsBookmark, BsEmojiSmileFill } from "react-icons/bs";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { MenuItems } from "./MenuItems";
import { toast } from "react-toastify";
const NavFile=()=> {
  const [mobileView, setMobileView] = useState(false);
  const [openItems, setOpenItems] = useState({});
  const [dropdown, setDropdown] = useState(false)

  const isLogged = localStorage.getItem('token')

  const navigate = useNavigate()

  const logout = () => {
      localStorage.clear()
      navigate('/')
      toast.error("Logged out Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }
 

  const handleMobileView = () => {
    setMobileView(!mobileView);
  };

  const handleMenu = (index) => {
    setOpenItems({
      ...openItems,
      [index]: !openItems[index],
    });
  };

  const Dropdown = () =>{
    setDropdown(!dropdown)
  }

  return (
    <>
    <div className="header-box">
      <header>
        <div className="links-container">
          <button id="mobile-menu-icon" onClick={handleMobileView}>
            {mobileView ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
          <Link to="/" className="links"><h1 className="logo">
            Food<span>.</span>
          </h1></Link>
          <nav id={mobileView ? "main-nav-mobile" : "main-nav"}>
            <ul type="none" className="nav-list">
              
              {MenuItems.map((item, index) => (
                <li className="nav-list-items" key={index} 
                >
                  <span
                    className="nav-list-item-text"
                    id = {openItems[index] ? "open" : null }
                    // onClick={() => handleMenu(index)}
                    onMouseOver={() => handleMenu(index)}
                  >
                    {item.menu}
                  </span>
                  <span className="caret" onClick={() => handleMenu(index)}>
                    {openItems[index] ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                  {openItems[index] ? (
                    <ul type="none" className="dropdown">
                      {item.submenu.map((subItem, subIndex) => (
                         <Link to={`/recipe?q=${subItem}`} key={subIndex} style={{textDecoration:"none",color:"white"}}>
                        <li
                          className="dropdown-item"
                          onClick={handleMobileView}
                        >
                          {subItem}
                        </li>
                        </Link>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="nav-buttons">
             <Link to='/search' className="links"><IoIosSearch fontSize="2rem" /></Link>
             <Link to='/saverecipe' className="links"><BsBookmark fontSize="1.5rem" /></Link>
             {isLogged ?
                        <div className="navbar-logged-in-dropdown">
                            <BsEmojiSmileFill className="profile-icon" onClick={Dropdown}/>
                            <div className={dropdown ? "navbar-logged-in-dropdown-content" : "dropdown-close"}>
                                <Link to='/user' className="navbar-logged-in-dropdown-links links">Profile</Link>
                                <Link to='/addrecipe' className="navbar-logged-in-dropdown-links links">Add a Recipe</Link>
                                {/* <Link to='/usersettings' className="navbar-logged-in-dropdown-links links">User Settings</Link> */}
                                <Link to='/login' className="navbar-logged-in-dropdown-links links" onClick={logout}>Logout</Link>
                            </div>
                        </div>
                        :
                       <Link to="/login"><i class='fa-regular fa-user' id="profile"/></Link> 
                    }          
        </div>      
      </header>
    </div>
    </>
  );
}
export default NavFile;
