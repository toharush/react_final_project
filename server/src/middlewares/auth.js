const { admin, app } = require("../config/auth");
const { isUserAdmin } = require("../controllers/auth");

exports.isLogin = (req, res, next) => {
    if(req.cookies.user) {
        next();
    } else {
        res.status(401).end();
    }
}

exports.isAdmin = (req, res, next) => {
    if(isUserAdmin(req.cookies?.user?.uid)) {
        next();
    } else {
        res.status(401).end();
    }
}