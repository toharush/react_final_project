const { Router } = require('express');
const { verifyToken, isUserAdmin } = require('../controllers/auth');
const router = Router();

router.post("/", async(req, res) => {
    const user = await verifyToken(req.headers.token);
    res.cookie('user', user);
    res.end();
});

router.get("/", async(req, res) => {
    res.json(req.cookies.user);
});

router.get("/isAdmin", async(req, res) => {
    res.json(isUserAdmin(req.cookies?.user?.uid));
});


router.get("/logout", (req, res) => { 
    res.clearCookie("user");
    res.end();
});

module.exports = router;