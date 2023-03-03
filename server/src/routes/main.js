const router = require("express").Router();
const { isLogin, isAdmin } = require("../middlewares/auth");
const authRouter = require("./auth");
const itemRouter = require("./item");
const adminRouter = require("./admin");
const { wss } = require("..");
const User = require("../model/user");
const { app } = require("../config/auth");
const user = new User();

router.use("/auth", authRouter);
router.use("/items", itemRouter);
router.use("/admin", adminRouter);

router.ws("/", (ws, req) => {
  if (req.headers.authorization) {
    user.addUser(req.headers.authorization);
  }
  app.auth().ws.on("close", () => user.removeUser(req.headers.authorization));
});

const aWss = wss.getWss("/api/v1/");

setInterval(() => {
  aWss.clients.forEach((client) => {
    client.ping((data) => console.log(data));
    client.send(
      `${user.getLoggedInUsers()},${
        aWss.clients.size - user.getLoggedInUsers() > 0
          ? aWss.clients.size - user.getLoggedInUsers()
          : 0
      }`
    );
  });
}, 5000);

module.exports = router;
