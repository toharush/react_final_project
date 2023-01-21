const { Router } = require('express');
const { isLogin, isAdmin } = require('../middlewares/auth');
const router = Router();
const authRouter = require("./auth");
const itemRouter = require("./item");
const adminRouter = require("./admin");

router.use("/auth", authRouter);
router.use("/items", isLogin, itemRouter);
router.use("/admin", isAdmin, adminRouter);

module.exports = router;