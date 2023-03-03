const router = require("express").Router();
const { verifyToken, isUserAdmin } = require("../controllers/auth");
const User = require("../model/user");
const user = new User();

router.post("/", async (req, res) => {
  if (req.headers.authorization) {
    const userDetail = await verifyToken(req.headers.authorization);

    if (userDetail?.uid) {
      user.removeUser(false);
      user.addUser(userDetail?.uid);
      res.cookie("user", userDetail);
    } else {
      res.status(500);
    }
  } else {
    res.status(400);
  }

  res.end();
});

router.get("/", async (req, res) => {
  res.json(req.cookies.user);
});

router.get("/isAdmin", async (req, res) => {
  res.json(isUserAdmin(req.cookies?.user?.uid));
});

router.get("/logout", (req, res) => {
  user.removeUser(req?.cookies?.user);
  user.addUser(false);
  res.clearCookie("user");
  res.end();
});

module.exports = router;
