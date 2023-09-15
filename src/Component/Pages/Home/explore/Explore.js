import React from 'react'
import './explore.css'
import { NavLink } from 'react-router-dom'

import exploreImg1 from '../../../../Assets/Homepage/explore/explore1.webp'
import exploreImg2 from '../../../../Assets/Homepage/explore/explore2.webp'
import exploreImg3 from '../../../../Assets/Homepage/explore/explore3.webp'
import exploreImg4 from '../../../../Assets/Homepage/explore/explore4.webp'
import exploreImg5 from '../../../../Assets/Homepage/explore/explore5.webp'
import exploreImg6 from '../../../../Assets/Homepage/explore/explore6.webp'


const Explore = () => {
  return (
    <div>
        <div className="explore-more-container">
          <h2>EXPLORE MORE</h2>
          <div className="explore-more-img-wrapper">
            <div>
              <NavLink to="/recipe?q=grilling and bbq">
                <img src={exploreImg1} alt="BBQ & GRILLING DISH" />
                <p className="explore-labol">GRILLING & BBQ</p>
              </NavLink>
            </div>
            <div>
              <NavLink to="/recipe?q=international eats">
                <img src={exploreImg2} alt="INTERNATIONAL EATS" />
                <p className="explore-labol">INTERNATIONAL EATS</p>
              </NavLink>
            </div>{" "}
            <div>
              <NavLink to="/recipe?q=breakfast and brunch">
                <img src={exploreImg3} alt="BREAKFAST & BRUNCH" />
                <p className="explore-labol">BREAKFAST & BRUNCH</p>
              </NavLink>
            </div>{" "}
            <div>
              <NavLink to="/recipe?q=community picks">
                <img src={exploreImg4} alt="COMMUNITY PICKS" />
                <p className="explore-labol">COMMUNITY PICKS</p>
              </NavLink>
            </div>{" "}
            <div>
              <NavLink to="/recipe?q=quick and easy">
                <img src={exploreImg5} alt="QUICK & EASY" />
                <p className="explore-labol">QUICK & EASY</p>
              </NavLink>
            </div>{" "}
            <div>
              <NavLink to="/recipe?q=copycat">
                <img src={exploreImg6} alt="COPYCAT RECIPES" />
                <p className="explore-labol">COPYCAT RECIPES</p>
              </NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Explore
