import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async () => {
    
    try {
      axios.post("http://localhost:9002/login", user).then((res) => {
        alert("login successfully");
        localStorage.setItem("token", res.user)
        window.location="/orders"
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        error(error.response.data.message);
      }
    }
  };
  return (
    <div className="login-main-div">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        ></input>
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => Navigate("/register")}>
          Register
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
