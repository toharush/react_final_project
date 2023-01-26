const ws = require("ws");
const wss = new ws.Server({
  port: 9999,
  perMessageDeflate: false,
});

wss.on("connection", (ws) => {
  console.log(ws.headers);
  //connection is up, let's add a simple simple event
  ws.on("message", (message) => {
    //log the received message and send it back to the client
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
});
module.exports = wss;
