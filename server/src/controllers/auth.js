const { admin, app } = require("../config/auth");

exports.getUserByEmail = (email) => {
    return admin.auth(app).getUserByEmail(email)
}

exports.isUserAdmin = (uid) => {
    if(uid && ["fGDZpltWWxgz0Wyue9BmhqyJP8p2"].includes(uid)) {
        return true;
    }
    return false;
}

exports.verifyToken = async(token) => {
    if(token) {
       return await admin.auth(app).verifyIdToken(token);
    }
}