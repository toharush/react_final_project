const router = require("express").Router();
const {
  AddToCart,
  syncCart,
  getCart,
  emptyCart,
} = require("../controllers/cart");
const {
  addComment,
  GetAllComments,
  GetAllCommentsById,
} = require("../controllers/comments");
const {
  GetAllProducts,
  GetProductById,
  updateProducts,
} = require("../controllers/products");
const { isLogin } = require("../middlewares/auth");

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

router.post("/comments", isLogin, async (req, res) => {
  console.log(req.headers.authorization);
  res.send(
    await addComment(
      req.body.productId,
      req.headers.authorization,
      req.body.rating,
      req.body.comment
    )
  );
});

router.post("/buy", isLogin, async (req, res) => {
  await updateProducts((await getCart(req.headers.authorization))?.products);
  await emptyCart(req.headers?.authorization);
  res.end();
});

router.post("/cart", isLogin, async (req, res) => {
  res.send(await syncCart(req.headers.authorization, req.body.cart));
});

router.get("/cart", isLogin, async (req, res) => {
  res.send(await getCart(req.headers.authorization));
});

router.get("/:item/comments", async (req, res) => {
  res.json(await GetAllCommentsById(req.params.item));
});

router.get("/", async (req, res) => {
  res.json(await GetAllProducts());
});

router.get("/:id", async (req, res) => {
  res.json(await GetProductById(req.params.id));
});

router.get("/cart/add/:item", async (req, res) => {
  res.send(await AddToCart(req.params.item, req.headers.authorization));
});

module.exports = router;
