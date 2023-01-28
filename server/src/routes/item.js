const router = require("express").Router();
const { GetAllProducts } = require("../controllers/products");

router.get("/userinfo", (req, res) => {
  res.json({
    userName: "toharush",
    fname: "tohar",
    lname: "harush",
  });
});

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

router.get("/", async (req, res) => {
  console.log("hey")
  res.json(await GetAllProducts());
});

module.exports = router;
