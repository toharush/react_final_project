const { Router } = require('express');
const { verifyToken } = require('../middlewares/auth');
const router = Router();

router.post("/", async(req, res) => {
    const user = await verifyToken(req.headers.token);
    console.log(user)
    res.cookie('user', user);
    res.end();
});

router.get("/", async(req, res) => {
    console.log(req.cookies.user);
    res.json(req.cookies.user);
});

router.get("/logout", (req, res) => { 
    console.log("hey")
    res.clearCookie("user");
    res.end();
});

module.exports = router;