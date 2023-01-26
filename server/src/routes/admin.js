const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  res.send("admin");
});

router.get("/users", (req, res) => {});

module.exports = router;
