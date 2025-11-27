// db.js
const { MongoClient } = require("mongodb");
const { MONGO_URL } = require("./config");

const client = new MongoClient(MONGO_URL, {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
  tls: true,
  tlsAllowInvalidCertificates: true
});


let dbInstance = null;

async function getDB() {
  if (dbInstance) return dbInstance;
  await client.connect();
  dbInstance = client.db("WeatherSenseDB");
  return dbInstance;
}

// optional cleanup helper
async function closeDB() {
  if (client) await client.close();
  dbInstance = null;
}

module.exports = { getDB, closeDB };
