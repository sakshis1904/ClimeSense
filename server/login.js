// login.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getDB } = require("./db");
const { JWT_SECRET } = require("./config");

async function LoginCred(Username, Password) {
  const db = await getDB();
  const col = db.collection("LoginAuthentication");

  const user = await col.findOne({ Username });
  if (!user) return { status: 0 }; // login fail

  const match = await bcrypt.compare(Password, user.Password);
  if (!match) return { status: 0 };

  // Create JWT (no password inside)
  const token = jwt.sign(
    { Username: user.Username, Name: user.Name },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  // Return minimal user info + token
  return { status: 1, token, user: { Username: user.Username, Name: user.Name, City: user.City } };
}

module.exports = { LoginCred };
