const express = require('express')
const app = express();
const port = 8080;
const cors = require('cors')
const routes = require("./routes/main");
const data = require("./data.json");
const { verifyToken } = require('./middlewares/auth');
const cookieParser = require("cookie-parser");

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use(cookieParser("Test1234"));

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})