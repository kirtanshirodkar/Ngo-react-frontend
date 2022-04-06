import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router";
const navigate = useNavigate();

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  

 const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Janseva</h3>
          <span className="loginDesc">
            Connect with NGOs, world around you on Janseva.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input type="Password" placeholder="Password" className="loginInput" />
            <input type="Password" placeholder="Password Again" className="loginInput" />
            <button className="loginButton"  onClick={RegisterUser}>Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
