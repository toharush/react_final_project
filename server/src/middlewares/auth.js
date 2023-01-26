const { admin, app } = require("../config/auth");
const { isUserAdmin } = require("../controllers/auth");

exports.isLogin = (req, res, next) => {
    try {
        if(JSON.parse(req.cookies.user)) {
            next();
        } else {
            res.status(401).end();
        }
    } catch {
        res.status(500).end();
    }
}

exports.isAdmin = (req, res, next) => {
    if(isUserAdmin(req.cookies?.user?.uid)) {
        next();
    } else {
        res.status(401).end();
    }
}