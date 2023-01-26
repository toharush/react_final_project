const { isUserAdmin } = require("../controllers/auth");

exports.isLogin = (req, res, next) => {
  try {
    if (req.cookies?.user?.uid) {
      next();
    } else {
      res.status(401).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

exports.isLoginWebSocket = (req, next) => {
  try {
    if (req.cookies?.user?.uid) {
      next();
    } else {
      res.status(401).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

exports.isAdmin = (req, res, next) => {
  if (isUserAdmin(req.cookies?.user?.uid)) {
    next();
  } else {
    res.status(401).end();
  }
};
