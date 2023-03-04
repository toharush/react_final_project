const { admin, app } = require("../config/auth");
const User = require("../model/user");
const user = new User();

exports.getUserByEmail = (email) => {
  return admin.auth(app).getUserByEmail(email);
};

exports.getUserById = async (id) => {
  const res = await admin.auth(app).getUser(id);
  return res.email;
};

exports.isUserAdmin = (uid) => {
  if (uid) {
    user.addUser(uid);
    if (["fGDZpltWWxgz0Wyue9BmhqyJP8p2"].includes(uid)) {
      return true;
    }
    return false;
  }
  return false;
};

exports.verifyToken = async (token) => {
  if (token) {
    return await admin.auth(app).verifyIdToken(token);
  }
};
