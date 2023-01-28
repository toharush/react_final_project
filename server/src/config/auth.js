const admin = require("firebase-admin");
require("dotenv").config();

console.log(process.env.FIREBASE_DOMAIN);
exports.app = admin.initializeApp({
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.FIREBASE_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
  appId: process.env.FIREBASE_AUTH_ID,
  measurementId: process.env.MEASUREMENT_ID,
});

exports.admin = admin;
