import React from "react";
import './footer.css'
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer_sub">
       
        <div className="footer_cnt1">
          <div className="footer_1st_div">
         
          <div className="footer_img_cntnr">
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

        </div> 
           

          <div className="scrollArrow" onClick={scrollToTop}>
          <i class="fa fa-arrow-up" aria-hidden="true" color="white"></i>
          </div>
          <div className="scrollText" onClick={scrollToTop}>
            Back to Top
          </div>
        </div>
        <ul className="footer_2nd_div">
          <li>All Categories</li>
          <li>Site Map</li>
          <li>About Us</li>
          <li>Help</li>
        </ul>

        </div>

        {/* <div > */}
      
        {/* </div> */}
        <div className="footer_cnt2">
          <div className="footer_cnt3">
          <div className="blue">The Discovery Family of Networks </div>
<div>© 2022 Warner Bros. Discovery, Inc. or its subsidiaries and affiliates.</div>
<div>All rights reserved.</div>

          </div>
          <div className="footer_cnt4">
            <ul className="footer_advetise">

          <li>Advertise</li>
<li>AdChoices</li>
<li>Privacy Notice</li>
<li>Visitor Agreement</li>
            </ul>
            <div className="california">California Privacy Notice <div>Do Not Sell or Share My Personal Information</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
