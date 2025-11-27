// dashboard.js
const { getDB } = require("./db");

async function ActiveUsers(Username) {
  const db = await getDB();
  const col = db.collection("ActiveUsers");

  const payload = {
    Username,
    timestamp: new Date()
  };

  const res = await col.insertOne(payload);
  return res.insertedId ? 1 : 0;
}

module.exports = { ActiveUsers };
