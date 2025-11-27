import { WiDaySnowWind } from "react-icons/wi";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';

import "../css/Home.css";
import "../css/Login.css";

function LoginData({ history }) {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  async function SendLoginData(event) {
    event.preventDefault();

    // Show loader
    document.getElementById('Loginloader').style.display = 'block';
    document.getElementById('Submit').style.display = 'none';
    document.getElementById('Register').style.display = 'none';

    try {
      const data = { Username, Password };

      const response = await axios.post('http://localhost:5000/loginCredentials', data);

      // Backend SUCCESS response
      if (response.data.message === "successful") {

    const user = response.data.user;

    // SAVE USER DETAILS TO LOCAL STORAGE
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("city", user.City);
    localStorage.setItem("name", user.Name);
    localStorage.setItem("email", user.Username);

    console.log("Saved:", {
      city: user.City,
      name: user.Name,
      email: user.Username,
      token: response.data.token
    });

    // Add active user
    axios.post("http://localhost:5000/activeUsers", {
      Username: user.Username
    });

    history.push("/dashboard");
}

 
      
      else {
        // Wrong credentials
        document.getElementById('IncorrectIdPwd').style.display = 'block';
        document.getElementById('Loginloader').style.display = 'none';
        document.getElementById('Submit').style.display = 'block';
        document.getElementById('Register').style.display = 'block';
      }

    } catch (error) {
      console.error(error);

      document.getElementById('IncorrectIdPwd').style.display = 'block';
      document.getElementById('Loginloader').style.display = 'none';
      document.getElementById('Submit').style.display = 'block';
      document.getElementById('Register').style.display = 'block';
    }
  }

  return (
    <form className="Loginform card glass fade-in" onSubmit={SendLoginData} style={{ padding: '1.2rem', minWidth: '320px' }}>
      <input className='LoginUsername focus-ring' type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
      <input className='LoginPassword focus-ring' type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />

      <div className="IncorrectIdPwd" id='IncorrectIdPwd'>Incorrect Username or password</div>

      <input className='Submit' id='Submit' type='submit' value="Login" />

      <Link to="/register">
        <div className="Register" id='Register'>Not a member? Sign In</div>
      </Link>

      <div className="Loginloader" id='Loginloader'></div>
    </form>
  );
}

const LoginWithRouter = withRouter(LoginData);

export default function LoadLoginPage() {
  return (
    <>
      <div className="background">
        <div className="Welcome-section">
          <div className="welcome-empty-section">
            <WiDaySnowWind className="WeatherIcon float" />
          </div>

          <div className="Welcome-heading fade-in">
            <div className="heading"> Welcome to Clime<span style={{ color: 'White' }}>Sense</span></div>
            <div id="login">
              <LoginWithRouter />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
