const router = require("express").Router();
const { verifyToken, isUserAdmin } = require("../controllers/auth");

router.post("/", async (req, res) => {
  if (req.headers.authorization) {
    const user = await verifyToken(req.headers.authorization);
    console.log(user);
    if (user?.uid) {
      res.cookie("user", user);
    } else {
      res.status(500);
    }
  } else {
    res.status(400);
  }

  res.end();
});

router.get("/", async (req, res) => {
  console.log(req.cookies.user);
  res.json(req.cookies.user);
});

router.get("/isAdmin", async (req, res) => {
  res.json(isUserAdmin(req.cookies?.user?.uid));
});

router.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.end();
});

module.exports = router;
