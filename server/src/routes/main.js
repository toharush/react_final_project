const router = require("express").Router();
const { isLogin, isAdmin } = require("../middlewares/auth");
const authRouter = require("./auth");
const itemRouter = require("./item");
const adminRouter = require("./admin");

router.use("/auth", authRouter);
router.use("/items", itemRouter);
router.use("/admin", [isLogin, isAdmin], adminRouter);

module.exports = router;
