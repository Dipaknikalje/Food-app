import React from "react";
import "./trending.css";
import { NavLink } from "react-router-dom";

import trendingImg1 from "../../../../Assets/Homepage/trending/trending.webp";
import trendingImg2 from "../../../../Assets/Homepage/trending/trending1.webp";
import trendingImg3 from "../../../../Assets/Homepage/trending/trending2.webp";
import trendingImg4 from "../../../../Assets/Homepage/trending/trending3.webp";

const Trending = () => {
  return (
    <div>
      <div className="trending-recipe-page">
        <div className="trending-labol">
          <h1>TRENDING NOW</h1>
          <NavLink to="/recipe?q=trending">View All</NavLink>
        </div>

        <div className="trendingimgs-card">
          <div className="trendingimgs">
            <NavLink to="/recipe?q=pineapple zucchini bread">
              <img src={trendingImg1} alt="PINEAPPLE ZUCCHINI BREAD" />
              <p>PINEAPPLE ZUCCHINI BREAD</p>
            </NavLink>
          </div>

          <div className="trendingimgs">
            <NavLink to="/recipe?q=spicy broccli">
              <img src={trendingImg2} alt="SPICY BROCCLI-CHEDDER SOUP" />
              <p>SPICY BROCCLI-CHEDDER SOUP</p>
            </NavLink>
          </div>

          <div className="trendingimgs">
            <NavLink to="/recipe?q=chicken enchiladas">
              <img src={trendingImg3} alt="QUICK & EASY CHICKEN ENCHILADAS" />
              <p>QUICK & EASY CHICKEN ENCHILADAS</p>
            </NavLink>
          </div>

          <div className="trendingimgs">
            <NavLink to="/recipe?q=gluten lemonade">
              <img src={trendingImg4} alt="GLUTEN FREE LEMONADE SCONES" />
              <p>GLUTEN FREE LEMONADE SCONESS</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
