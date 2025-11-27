import { WiDaySnowWind } from "react-icons/wi";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import React, { useState } from 'react';

import "../css/Home.css";
import "../css/Register.css";

function RegisterData({ history }) {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [City, setCity] = useState('');

    async function SendRegisterData(event) {
        event.preventDefault();

        // Show loader
        document.getElementById('Registerloader').style.display = 'block';
        document.getElementById('RegisterButton').style.display = 'none';

        try {
            const data = {
                Username: Email,
                Password,
                Name,
                City
            };

            const response = await axios.post(
                'http://localhost:5000/registerCredentials',
                data
            );

            // Backend: "exists" | "created" | "unsuccessful"
            if (response.data.message === 'exists' || response.data === 'exists') {
                // user already exists
                document.getElementById('ProfileExists').style.display = 'block';
                document.getElementById('Registerloader').style.display = 'none';
                document.getElementById('RegisterButton').style.display = 'block';
            }
            else if (response.data.message === 'created' || response.data === 'created') {
                // Registration success → route to login
                history.push("/login");
            }
            else {
                // fallback error
                alert("Registration failed. Try again.");
                document.getElementById('Registerloader').style.display = 'none';
                document.getElementById('RegisterButton').style.display = 'block';
            }

        } catch (error) {
            console.error(error);
            alert("Something went wrong during registration.");

            document.getElementById('Registerloader').style.display = 'none';
            document.getElementById('RegisterButton').style.display = 'block';
        }
    }

    return (
        <form className="Registerform card glass fade-in" onSubmit={SendRegisterData} style={{ padding: '1.2rem', minWidth: '320px' }}>
            <input className='RegName focus-ring' type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
            <input className='RegEmail focus-ring' type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <input className='RegPassword focus-ring' type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            <input className='RegCity focus-ring' type="text" placeholder="City" required onChange={(e) => setCity(e.target.value)} />

            <div className="ProfileExists" id="ProfileExists">Profile already exists. Log in</div>

            <input className='RegisterButton' id='RegisterButton' type='submit' value={'Submit & Register'} />

            <div className="Registerloader" id='Registerloader'></div>
        </form>
    );
}

const RegisterWithRouter = withRouter(RegisterData);

export default function LoadRegisterPage() {
    return (
        <>
            <div className="background">
                <div className="Welcome-section">
                    <div className="welcome-empty-section">
                        <WiDaySnowWind className="WeatherIcon float" />
                    </div>

                    <div className="Welcome-heading fade-in">
                        <div className="heading">
                            Welcome to Clime<span style={{ color: 'White' }}>Sense</span>
                        </div>

                        <div id="register">
                            <RegisterWithRouter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
