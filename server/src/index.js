const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes/main");
const app = express();
const port = 8080;
const wss = require("./ws/ws");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(cookieParser("Test1234"));

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
