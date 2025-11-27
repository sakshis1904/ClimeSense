// activeUser.js
const { getDB } = require("./db");

async function ActiveUserDetails() {
  const db = await getDB();
  const col = db.collection("ActiveUsers");

  // return the most recent active user
  const docs = await col.find().sort({ timestamp: -1 }).limit(1).toArray();
  if (!docs || docs.length === 0) return null;
  return docs[0];
}

module.exports = { ActiveUserDetails };
