import React, { useState } from "react";
import "./register.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
  //--useNAVIGATE is used for redirect the route into another path
  const Navigate = useNavigate()
  //---FILED NAME WHICH IS ENTER IN FRONTEND
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  //---TAKE 2 PARAMETER NAME AND ITS VALUE
  //--PARAMETER USE IN FORMS
  //---NAME MEANS JO FIELD KA NAAM HAI
  //---VALUE MEANS JO USER USME DAALEGA
  //---ONCHANGE MEANS KOI BHI VALUE CHANGE KRE TO VO UPDATE HO JAAYE
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
      //  history.push("/login");
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="register-main-div">
    <div className="register">
      {console.log("User", user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={()=>Navigate("/")}>Login</div>
    </div>
    </div>
  );
};


export default RegisterPage;
