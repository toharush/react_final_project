const router = require("express").Router();
const { isLogin, isAdmin } = require("../middlewares/auth");
const authRouter = require("./auth");
const itemRouter = require("./item");
const adminRouter = require("./admin");
const { wss } = require("..");

router.use("/auth", authRouter);
router.use("/items", itemRouter);
router.use("/admin", adminRouter);

router.ws("/", (ws, req) => {});
const aWss = wss.getWss("/api/v1/");

setInterval(() => {
  aWss.clients.forEach((client) => {
    client.send(aWss.clients.size);
  });
}, 5000);

module.exports = router;
