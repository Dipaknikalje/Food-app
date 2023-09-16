import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import closeIcon from "../../Assets/cancel_8618474.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { host } from "../Utility/HostLink";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";

const Login = () => {
  const nav = useNavigate();

  // const dispatch = useDispatch();
  // const state = useSelector((state) => console.log(state.value));
  // const [data,setData]=useState([])

  const [errMsg, setErrMsg] = useState(null);

  const [user, setUser] = useState({
    email: null,
    password: null,
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${host}/user/login`, user);
    console.log(res.data.msg);
    const token = res.data.token;
    console.log(res.data)

    if (token) {
      
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("loggedIn", true)
      localStorage.setItem("email",res.data.email)
      nav('/')
      window.location.reload()
      toast.success("Logged In Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setErrMsg(res.data.msg);
  };
  function handlePopup(){
    nav(-1);
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="mainbox-data">
        <div className="close-btn-mainbox">
          <img onClick={handlePopup} alt="close button" src={closeIcon} />
        </div>

        <div className="user-content login-content">
          <h2>LOG IN</h2>

          <form className="user login">
            <label>EMAIL</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              onChange={onChange}
            />
            <div className="err-occured">{""}</div>
            <label>PASSWORD</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
            <div className="err-occured">{errMsg} </div>

            <button onClick={handleLogin}>LOG IN</button>
          </form>
        </div>

        <NavLink className="forgot-pass">FORGOT PASSWORD?</NavLink>

        <div className="auth-socials-content">
          <p className="continue-txt"> OR CONTINUE WITH</p>
          <div className="social-icons-login">
          <NavLink>
              <i class="fa-brands fa-apple"></i>
            </NavLink>
            <NavLink>
              <i class="fa-brands fa-google"></i>
            </NavLink>
            <NavLink>
              <i class="fa-brands fa-facebook"></i>{" "}
            </NavLink>
            
            <NavLink>
              <i class="fa-brands fa-amazon"></i>
            </NavLink>
           
          </div>

          <div className="bottom-section">
            <p>Don't have acount yet?</p>
            <NavLink to="/register" >Sign Up</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
