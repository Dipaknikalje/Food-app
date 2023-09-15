import React from 'react'
import './craving.css'

import cravingImg1 from '../../../../Assets/Homepage/craving/craving1.webp'
import cravingImg2 from '../../../../Assets/Homepage/craving/craving2.webp'
import cravingImg3 from '../../../../Assets/Homepage/craving/craving3.webp'
import { NavLink } from 'react-router-dom'



const Craving = () => {
  return (
    <div>
       <div className="craving-container">
          <div className="cravings-labol">
            <h2>WHAT WE ARE CRAVING</h2>
          </div>
          <div className="craving-images-container-file">
            <div className="craving-images">
              <NavLink to="/recipe?q=freezer friendly">
                <img src={cravingImg1} alt="freezer friendly meals" />
                <div className="cravings-labol-container-file">
                  <p className="collection">COLLECTION</p>
                  <p className="cravings-labol">24 FREEZER FRIENDLY MEALS</p>
                </div>
              </NavLink>
            </div>
            <div className="craving-images">
              <NavLink to="/recipe?q=kids lunch">
                <img src={cravingImg2} alt="Lunch for Kids" />
                <div className="cravings-labol-container-file">
                  <p className="collection">COLLECTION</p>
                  <p className="cravings-labol">50 LUNCH IDEAS FOR KIDS</p>
                </div>
              </NavLink>
            </div>

            <div className="craving-images">
              <NavLink to="/recipe?q=corn">
                <img src={cravingImg3} alt="Corn Recipes" />
                <div className="cravings-labol-container-file">
                  <p className="collection">COLLECTION</p>
                  <p className="cravings-labol">24 BEST CORN RECIPES</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Craving
