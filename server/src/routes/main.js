const { Router } = require('express');
const { isLogin } = require('../middlewares/auth');
const router = Router();
const authRouter = require("./auth");
const itemRouter = require("./item");

router.use("/auth", authRouter);
router.use("/items", isLogin, itemRouter);

module.exports = router;