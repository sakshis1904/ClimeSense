// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { LoginCred } = require("./login");
const { RegisterCred } = require("./Register");
const { ActiveUsers } = require("./dashboard");
const { ActiveUserDetails } = require("./activeUser");
const { FetchAPIdata } = require("./weatherAPI");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// LOGIN
app.post("/loginCredentials", async (req, res) => {
  try {
    const { Username, Password } = req.body;
    const result = await LoginCred(Username, Password);

    if (result.status === 1) {
      // send token + user info
      res.json({ message: "successful", token: result.token, user: result.user });
    } else {
      res.status(401).json({ message: "unsuccessful" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

// REGISTER
app.post("/registerCredentials", async (req, res) => {
  try {
    const { Username, Password, Name, City } = req.body;
    const result = await RegisterCred(Username, Password, Name, City);

    if (result === 1) res.json({ message: "exists" });
    else if (result === 2) res.json({ message: "created" });
    else res.status(500).json({ message: "unsuccessful" });
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

// ACTIVE USERS - record who logged in (no password)
app.post("/activeUsers", async (req, res) => {
  try {
    const { Username } = req.body;
    const result = await ActiveUsers(Username);
    if (result === 1) res.json({ message: "added" });
    else res.status(500).json({ message: "not added" });
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

// DASHBOARD - returns last active user + weatherdata
app.post("/loadDashboard", async (req, res) => {
  try {
    const { City } = req.body;

    if (!City) {
      return res.status(400).json({ message: "City is required" });
    }

    const WeatherData = await FetchAPIdata(City);

    res.json({
      WeatherData: WeatherData
    });

  } catch (err) {
    console.error("Dashboard error:", err);
    res.status(500).json({ message: "Error loading dashboard" });
  }
});


app.listen(port, () => console.log(`Server listening: http://localhost:${port}`));
