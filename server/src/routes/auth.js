const { Router } = require('express');
const { verifyToken, isUserAdmin } = require('../controllers/auth');
const router = Router();

router.post("/", async(req, res) => {
    if(req.headers.authorization) {
        const user = await verifyToken(req.headers.authorization);
        if(user) {
            res.cookie('user', user);
        } else {
            res.status(500);
        }
        res.status(400);
    }

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