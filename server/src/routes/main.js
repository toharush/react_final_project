const router = require("express").Router();
const { isLogin, isAdmin } = require("../middlewares/auth");
const authRouter = require("./auth");
const itemRouter = require("./item");
const adminRouter = require("./admin");
const { wss } = require("..");
const User = require("../model/user");
const user = new User();
router.use("/auth", authRouter);
router.use("/items", itemRouter);
router.use("/admin", adminRouter);

router.ws("/", (ws, req) => {
  user.addUser(req.cookies?.user?.uid ?? false);
  ws.on("close", () => user.removeUser(req.cookies?.user?.uid ?? false));
});

const aWss = wss.getWss("/api/v1/");

setInterval(() => {
  aWss.clients.forEach((client) => {
    client.send(
      `LoggedInUsers:${user.getLoggedInUsers()}, GuestUsers:${user.getGuestUsers()}`
    );
  });
}, 5000);

module.exports = router;
