const { isUserAdmin } = require("../controllers/auth");

exports.isLogin = (req, res, next) => {
  const { ws } = req;
  console.log(ws)
  try {
    if (req.cookies?.user?.uid) {
      next();
    } else {
      closeConnection(Boolean(ws), req, res, 401);
    }
  } catch (err) {
    console.log(err);
    closeConnection(Boolean(ws), req, res, 500);
  }
};

const closeConnection = (isWs, req, res, status) => {
  console.log(isWs)
  if (isWs) {
    req.ws.close();
  } else {
    res.status(status).end();
  }
};

exports.isAdmin = (req, res, next) => {
  const { ws } = req;

  try {
    if (isUserAdmin(req.cookies?.user?.uid)) {
      next();
    } else {
      closeConnection(Boolean(ws), req, res, 401);
    }
  } catch (err) {
    console.log(err);
    closeConnection(Boolean(ws), req, res, 500);
  }
};
