const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

require("dotenv").config();
require("./config/db");
require("express-ws")(app);

const port = process.env.PORT || 8080;
const routes = require("./routes/main");

app.use(bodyParser.json({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => callback(null, true),
  })
);

app.use(cookieParser(process.env.COOKIE_SECRET || "Test1234"));
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
