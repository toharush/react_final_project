const express = require('express')
const app = express();
const port = 8080;
const cors = require('cors')

const data = require("./data.json");

app.use(cors());
app.get('/userinfo', (req, res) => {
  res.json({
    userName: "toharush",
    fname: "tohar",
    lname: "harush"
  })
})

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
app.get('/items', async (req, res) => {
    console.log(new Date());
    await sleep(1000);
    res.json(data);
});

app.get('/items/:name', (req, res) => {
    console.log(req.params.name);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})