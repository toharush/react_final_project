const admin = require('firebase-admin');
const app = admin.initializeApp({
    apiKey: "AIzaSyA6K-m7VNHL0WVvocp0s4duTp3FDZRfLkE",
    authDomain: "terminal-a408f.firebaseapp.com",
    projectId: "terminal-a408f",
    storageBucket: "terminal-a408f.appspot.com",
    messagingSenderId: "551646444204",
    appId: "1:551646444204:web:0542f05b17c6d9d15d3d09",
    measurementId: "G-Z3QRTQPWMG"
});

exports.verifyToken = async(token) => {
    if(token) {
       return await admin.auth(app).verifyIdToken(token);
    }
}

exports.isLogin = (req, res, next) => {
    if(req.cookies.user) {
        next();
    } else {
        res.end();
    }
}
