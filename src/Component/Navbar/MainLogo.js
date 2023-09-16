import React from "react";
import "./mainlogo.css";
import { NavLink } from "react-router-dom";
const MainLogo = () => {
  return (
    <div>
      <div className="logo">
        <NavLink to="/">
          <h1 className="logo-name">
            Food <span className="logo-dot">.</span>
          </h1>
        </NavLink>
      </div>
    </div>
  );
};

export default MainLogo;
