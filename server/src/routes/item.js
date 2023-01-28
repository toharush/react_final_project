const router = require("express").Router();
const { AddToCart } = require("../controllers/cart");
const { GetAllProducts } = require("../controllers/products");

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

router.get("/", async (req, res) => {
  res.json(await GetAllProducts());
});

router.get("/cart/add/:item", async (req, res) => {
  console.log(req.params.item, req.cookies?.user?.uid)
  res.send(await AddToCart(req.params.item, req.cookies?.user?.uid));
});

module.exports = router;
