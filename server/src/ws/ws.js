const ws = require("ws");
const { verifyToken, isUserAdmin } = require("../controllers/auth");
const wss = new ws.Server({
  port: 9999,
  perMessageDeflate: false,
});

wss.on("connection", (ws) => {
  ws.on("message", (token) => {
    if (isUserAdmin(token)) {
      ws.send(`Hello, you sent -> ${message}`);
    } else {
      ws.close();
    }
  });
});
module.exports = wss;
