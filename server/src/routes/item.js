const router = require("express").Router();
const { AddToCart } = require("../controllers/cart");
const {
  addComment,
  GetAllComments,
  GetAllCommentsById,
} = require("../controllers/comments");
const { GetAllProducts, GetProductById } = require("../controllers/products");
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
