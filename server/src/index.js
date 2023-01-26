const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("express-ws")(app);
const port = 8080;
const routes = require("./routes/main");

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => callback(null, true),
  })
);

app.use(cookieParser("Test1234"));
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
