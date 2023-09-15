import React from "react";
import "./miss.css";
import { NavLink } from "react-router-dom";

import dmImg1 from "../../../../Assets/Homepage/dontmiss/dm1.webp";
import dmImg2 from "../../../../Assets/Homepage/dontmiss/dm2.webp";
import dmImg3 from "../../../../Assets/Homepage/dontmiss/dm3.webp";

const Miss = () => {
  return (
    <div>
      <div className="craving-container">
        <div className="cravings-labol">
          <h2>DON'T MISS</h2>
        </div>
        <div className="craving-images-container-file">
          <div className="craving-images">
            <NavLink to="/recipe?q=freezer friendly">
              <img src={dmImg1} alt="freezer friendly meals" />
              <div className="cravings-labol-container-file">
                <p className="collection">COLLECTION</p>
                <p className="cravings-labol">45 SUMMER SALADS</p>
              </div>
            </NavLink>
          </div>
          <div className="craving-images">
            <NavLink to="/recipe?q=kids lunch">
              <img src={dmImg2} alt="Lunch for Kids" />
              <div className="cravings-labol-container-file">
                <p className="collection">COLLECTION</p>
                <p className="cravings-labol">59 COOL CUCUMBER RECIPES</p>
              </div>
            </NavLink>
          </div>

          <div className="craving-images">
            <NavLink to="/recipe?q=corn">
              <img src={dmImg3} alt="Corn Recipes" />
              <div className="cravings-labol-container-file">
                <p className="collection">COLLECTION</p>
                <p className="cravings-labol">35 EASY ONE POT MEALS</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miss;
