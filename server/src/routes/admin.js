const { wss } = require("..");
const {
  GetAllProductsWebSocket,
  GetAllProducts,
} = require("../controllers/products");
const router = require("express").Router();


router.get("/users", (req, res) => {});

module.exports = router;
