<div align="center">

# ClimeSense 
https://climesense-2.onrender.com/

</div>

This repository contains a full-stack project developed using the MERN stack (MongoDB, Express.js, React, and Node.js) that fetches local weather data from weather API and displays it on the dashboard.

https://github.com/sakshis1904/ClimeSense

## Frontend

The frontend of the application is developed using React.js with a modular, component-based architecture to ensure clean structure, easy maintenance, and scalability. It includes key interfaces such as Login, Register, Dashboard, and Weather Search, along with reusable UI elements like Navbar, Search Bar, Weather Card, and Loader. 

User authentication is handled on the client side using JWT stored in localStorage, while protected routes are implemented using React Router to restrict access to authenticated users only. Communication with the backend happens through Axios, with proper error handling, input validation, and loading states for a smooth user experience. The UI is fully responsive and styled to provide a clean and intuitive experience across both mobile and desktop devices.

## Backend

The backend is built using Node.js and Express.js and is responsible for handling business logic, secure authentication, and API communication. It uses MongoDB Atlas for persistent data storage and bcrypt to securely hash user passwords before storing them. JWT-based authentication is implemented to verify user identity and ensure protected access to resources. 

The backend exposes RESTful APIs that handle registration, login, weather search history, and communication with the third-party OpenWeatherMap API to fetch real-time weather data. Proper error handling, input validation, and secure request processing ensure reliability, data integrity, and a seamless connection between the frontend and backend.


## Screenshots

![WhatsApp Image 2025-11-28 at 00 29 17_4d19cc0a](https://github.com/user-attachments/assets/6d24692f-a0e0-4dfe-9874-a29f97412437)


![WhatsApp Image 2025-11-28 at 00 29 33_6ec3ddfb](https://github.com/user-attachments/assets/c068a4f9-209b-4b0e-8952-e5b7707bbb1e)


## Authors

- [@SakshiShrivastava](https://github.com/sakshis1904)

[![portfolio](https://portfolio-7s42dc8sq-sakshi-shrivastavas-projects.vercel.app/)
[![linkedin](https://www.linkedin.com/in/sakshi-shrivastava19/)



## Tech Stack

**Frontend:** React

**Backend:** Node, Express 

**Database:** MongoDB

**Authenticatiob:** JWT

**Deployment:** Render

**API:** OpenWeatherMap API



## Installation

Install ClimeSense with npm after cloning the project

```bash
npm Install
```
    
## Documentation

[React Framework](https://react.dev/)

[Express JS](https://expressjs.com/)

[MongoDB](https://www.mongodb.com/)

[Axios](https://axios-http.com/)

[Authentication](https://www.jwt.io/introduction)


## Features

- Fetches weather data from an API every minute and displays it in the frontend
- Allows users to register and login to access personalized weather information
- Stores user data, including name, email, password, and city, in a MongoDB database
- Provides a responsive user interface with routing and sub-component rendering using React




