import React from "react";
import "./ideas.css";
import { NavLink } from "react-router-dom";

import ideasImg1 from "../../../../Assets/Homepage/ideas/idea1.webp";
import ideasImg2 from "../../../../Assets/Homepage/ideas/idea2.webp";
import ideasImg3 from "../../../../Assets/Homepage/ideas/idea3.webp";
import ideasImg4 from "../../../../Assets/Homepage/ideas/idea4.webp";

const Ideas = () => {
  return (
    <div>
      <div className="trending-recipe-page">
        <div className="trending-labol">
          <h1>MORE IDEAS</h1>
          <NavLink to="/recipe?q=ideas">View All</NavLink>
        </div>

        <div className="trendingimgs-card">
          <div className="trendingimgs">
            <NavLink to="/recipe?q=vegan bacon">
              <img src={ideasImg1} alt="VEGAN BACON" />
              <p>VEGAN BACON</p>
            </NavLink>
          </div>

          <div className="trendingimgs">
            <NavLink to="/recipe?q=copycat">
              <img src={ideasImg2} alt="COPYCAT MC DONALD'S BIG MAC SAUCE" />
              <p>COPYCAT MC DONALD'S BIG MAC SAUCE</p>
            </NavLink>
          </div>

          <div className="trendingimgs">
            <NavLink to="/recipe?q=quick">
              <img src={ideasImg3} alt="QUICK & EASY CHICKEN ENCHILADAS" />
              <p>QUICK & EASY CHICKEN ENCHILADAS</p>
            </NavLink>
          </div>

          <div className="trendingimgs">
            <NavLink to="/recipe?q=butter beer">
              <img src={ideasImg4} alt="DIRTY SHRIMP IN BUTTER BEER SAUCE" />
              <p>DIRTY SHRIMP IN BUTTER BEER SAUCE</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
