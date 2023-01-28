const { isLogin, isLoginWebSocket } = require("../middlewares/auth");

const router = require("express").Router();


router.ws("/", (ws, req) => {
  console.log("socket from client");
  ws.on("message", (msg) => {
    ws.send("back from node");
  });
  ws.on('connection' ,() => {
    console.log("Started with express-ws")
    ws.send("Started with express-ws")
  })
  ws.send(" Started with express-ws")
});

router.get("/users", (req, res) => {});

module.exports = router;
