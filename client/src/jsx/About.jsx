import React from 'react';
import '../css/About.css';

function About() {
	return (
		<div className="about-page">
			<div className="about-card fade-in container">
				<h1>ClimeSense</h1>
				<p>
					  ClimeSense is a smart weather monitoring application built using the MERN stack, allowing users to register, log in securely using JWT authentication, and instantly view weather metrics for their selected city.

The app integrates a live weather API to provide real-time details like temperature, humidity, wind speed, pressure, UV index, cloud percentage, visibility, etc.
It also features a clean and animated UI for enhanced user experience.

This project was developed as part of the Weather App Track, with added bonus features like authentication, deployment, animations, and advanced UI.
				</p>

				
			</div>
		</div>
	);
}

export default About;
