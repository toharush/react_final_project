const router = require("express").Router();
const { verifyToken, isUserAdmin } = require("../controllers/auth");
const User = require("../model/user");
const user = new User();

router.get("/signout", async (req, res) => {
  user.removeUser(req.headers.authorization);
  res.end();
});

router.get("/isAdmin", async (req, res) => {
  res.json(isUserAdmin(req.headers.authorization));
});

module.exports = router;
