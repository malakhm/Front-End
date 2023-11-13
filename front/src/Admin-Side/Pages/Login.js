import '../Styles/login.css'
import Logo from '../Assets/LOGO.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// const LoginForm = ()=>{


const AdminLogin = () => {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 


  const handleuserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userName, password);

    try {
      const response = await fetch("https://abadaibeirut.onrender.com/api/admin/", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      });

      const data = await response.json();

      console.log(data, "data");

      if (data.status === "ok") {
        alert("successfull login");
        localStorage.setItem("authToken", data.data.userName); // Replace "yourAuthTokenValue" with the actual authentication token or flag.

        navigate("https://abadaibeirut.netlify.app/admin/home");

      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="login-form">
        <h1 className="login-formbuttonh1">
          <img src={Logo} alt="Admin" />
          <br />
          <form className="login-form-for-admin" onSubmit={handleSubmit}>
            <input
              placeholder="userName"
              type="text"
              className="login-formuserName"
              onChange={handleuserNameChange}
            />
            <br />
            <br />
            <input
              placeholder="PASSWORD"
              type="password"
              className="login-formpassword"
              onChange={handlePasswordChange}
            />
            <br />
            <br />
            <button className="login-formbutton" type="submit">
              Login
            </button>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default AdminLogin;