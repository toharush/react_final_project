const browserObject = require("./utils/startChrome");
const scraperController = require("./utils/pageController");
require("dotenv").config();
require("./config/db");

(async () => {
  let browserInstance = browserObject.startBrowser();

  const res = await scraperController(browserInstance);
  console.log(res)
})();
