// Register.js
const bcrypt = require("bcrypt");
const { getDB } = require("./db");

async function RegisterCred(Username, Password, Name, City) {
  const db = await getDB();
  const col = db.collection("LoginAuthentication");

  // Check only by email (Username)
  const existingUser = await col.findOne({ Username });
  if (existingUser) {
    return 1; // user exists
  }

  // Hash password
  const hashed = await bcrypt.hash(Password, 10);

  const insertRes = await col.insertOne({
    Username,
    Password: hashed,
    Name,
    City,
    createdAt: new Date()
  });

  return insertRes.insertedId ? 2 : 0;
}

module.exports = { RegisterCred };
