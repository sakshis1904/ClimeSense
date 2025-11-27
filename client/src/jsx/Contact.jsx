import React from 'react';
import '../css/Contact.css'

function Contact (){
	return (
		<div className="contact-page">
			<div className="contact-card fade-in container">
				<h2>Contact</h2>
				<p className="contact-details">If you have questions, feedback or want to try the API, reach out:</p>
				<div className="contact-list">
					<div className="contact-details">Email: <a href='mailto:sakshishrivastava190304@gmail.com'>sakshishrivastava190304@gmail.com</a></div>
					<div className="contact-details">Project: <a href='https://github.com/sakshis1904/ClimeSense' target='_blank' rel='noreferrer'>GitHub repo</a></div>
				</div>
			</div>
		</div>
	)
}

export default Contact;
