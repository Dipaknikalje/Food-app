import React from "react";
import "./poster.css";
import { NavLink } from "react-router-dom";
import posterImg from "../../../../Assets/Homepage/grilled/grilledchicken.webp";

const Poster = () => {
  return (
    <div>
      <div className="poster-file">
        <div className="poster1">
          <div className="poster-img">
            <img src={posterImg} alt="Grilled Chicken"></img>
            <div className="poster-label">
              <h1>
                56 GRILLED CHICKEN <p>RECIPES</p>
              </h1>
              <NavLink to="/recipe?q=grill%20chicken" id="see-btn">SEE THEM ALL</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
