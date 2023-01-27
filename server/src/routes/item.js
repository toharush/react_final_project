const router = require("express").Router();
const data = require("../data");

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
  await sleep(1000);
  res.json(data);
});

module.exports = router;
