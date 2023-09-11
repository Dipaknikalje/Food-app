import React from "react";
import "./footer.css";
// import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer_bar">
      <div className="Footer-bar-child1">
        <div className="icons">
          <div>
            <i class="fab fa-facebook"></i>
          </div>
          <div>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div>
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div>
            <i class="fa-brands fa-youtube"></i>
          </div>
          <div>
            <i class="fa fa-envelope-o" color="white"></i>
          </div>
          <div>
            <i class="fa fa-arrow-up" aria-hidden="true" color="white"></i>
          </div>
          <div>Back to top</div>
        </div>
        <div className="footer-nav">
          <div>AllCategories</div>
          <div>Site Map</div>
          <div>About us</div>
          <div>Help</div>
        </div>
      </div>
      <div className="Footer-bar-child2">
        <div className="discovery">The Discovery of networks</div>
        <div className="copyright">
          © 2023 Warner Bros. Discovery, Inc. or its subsidiaries and
          affiliates. All rights reserved.
        </div>
        <br />
        <div className="Footer-nav2">
          <ul className="ul1">
            <li>Advertise</li>
            <li>AdChoices</li>
            <li>Privacy Notice</li>
            <li>Visitor Agreement</li>
          </ul>
          <ul className="ul2">
            <li>California</li>
            <li>Privacy Notice</li>
            <li>Do Not Sell or Share My Personal Information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
