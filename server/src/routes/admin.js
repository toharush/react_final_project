const { GetAllProductsWebSocket, GetAllProducts } = require("../controllers/products");

const router = require("express").Router();

router.ws("/", async(ws, req) => {
  console.log("socket from client");
  ws.on("message", (msg) => {
    ws.send("back from node");
  });
  ws.on("connection", async() => {
    console.log("Started with express-ws");
    setInterval(async () => ws.send(await GetAllProducts()), 1000);
    await GetAllProductsWebSocket(ws);
    ws.send("Started with express-ws");
  });
  const res = await GetAllProducts();
  ws.send(res);
  ws.send(" Started with express-ws");
});

router.get("/users", (req, res) => {});

module.exports = router;
