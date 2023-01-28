const { MongoClient } = require("mongodb");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

let db = mongoose.connection;

db.set("strictQuery", false);
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("DB Connected"));

module.exports = db;
