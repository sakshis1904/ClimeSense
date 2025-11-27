import { WiDaySnowWind } from "react-icons/wi";
import { Link } from "react-router-dom";
import React from 'react';
import "../css/Home.css"




export default function LoadWelcome() {

  return (

    <>
      <div className="background">
        <div className="Welcome-section">
          <div className="welcome-empty-section">
            < WiDaySnowWind className="WeatherIcon float" />
            <span className="big-cloud">☁️</span>

          </div>
          <div className="Welcome-heading">
            <div className="hero-cloud float" aria-hidden="true"></div>
            <div className="heading"> Welcome to Clime<span style={{ color: 'White' }}>Sense</span></div>

            
            <Link to="/login">
              <button className="Welcome-button slide-up">Load Dashboard</button>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}
