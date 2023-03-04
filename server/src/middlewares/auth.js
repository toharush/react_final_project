const { isUserAdmin } = require("../controllers/auth");

exports.isLogin = (req, res, next) => {
  const { ws } = req;
  try {
    if (req.headers?.authorization) {
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
  if (isWs) {
    req.ws.close();
  } else {
    res.status(status).end();
  }
};

exports.isAdmin = (req, res, next) => {
  const { ws } = req;

  try {
    if (isUserAdmin(req.headers?.authorization)) {
      next();
    } else {
      closeConnection(Boolean(ws), req, res, 401);
    }
  } catch (err) {
    console.log(err);
    closeConnection(Boolean(ws), req, res, 500);
  }
};
