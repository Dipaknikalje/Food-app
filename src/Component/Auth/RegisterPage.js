import React from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import closeIcon from "../../Assets/cancel_8618474.png";
import { useState } from "react";
import axios from "axios";
import { host } from "../Utility/HostLink";

const RegisterPage = () => {
  const [user, setUser] = useState({
    email: null,
    password: null,
  });
  const nav = useNavigate();

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(user);
    const res = await axios.post(`${host}/user/register`, user);
    console.log(res);
    if ((res.data.msg = "user registered successfully")) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("data", res.data);
      nav("/");
    }
  };
  const handlePopup = () => {
    nav(-1);
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="register-content">
        <div className="close-btn-mainbox">
          <img onClick={handlePopup} alt="close button" src={closeIcon} />
        </div>

        <div className="register-form-content">
          <h2>CREATE AN ACOUNT</h2>

          <p className="register-desc-txt">
            Save recipes across devices, write reviews, and share your own
            photos
          </p>

          <form className="user login register-form">
            <label>EMAIL</label>
            <input
              type="email"
              onChange={onChange}
              name="email"
              placeholder="your@email.com"
            />
            <div className="err-occured">{""}</div>
            <label>PASSWORD</label>
            <input
              type="password"
              onChange={onChange}
              name="password"
              placeholder="Password"
            />
            <div className="err-occured"> </div>

            <div className="terms">
              {" "}
              <input type="checkbox" />
              <p>
                By creating an account, you agree to the Terms of Use and have
                read our Privacy Policy. Discovery and its affiliates may use
                your email address to provide updates, ads, and offers. You can
                opt out or learn more about your rights via the Privacy Policy.
              </p>
            </div>

            <button onClick={handleRegister}>CREATE ACCOUNT</button>
          </form>
        </div>

        <NavLink className="forgot-pass">FORGOT PASSWORD?</NavLink>

        <div className="auth-socials-content">
          <p className="continue-txt"> OR CONTINUE WITH</p>
          <div className="social-icons-login">
            <NavLink>
              <i class="fa-brands fa-facebook"></i>{" "}
            </NavLink>
            <NavLink>
              <i class="fa-brands fa-google"></i>
            </NavLink>
            <NavLink>
              <i class="fa-brands fa-amazon"></i>
            </NavLink>
            <NavLink>
              <i class="fa-brands fa-apple"></i>
            </NavLink>
          </div>

          <div className="bottom-section">
            <p>Already Member?</p>
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
