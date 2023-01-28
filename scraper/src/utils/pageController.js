const { CreateNewProduct } = require("../controllers/products");
const pageScraper = require("./pageScraper");
const scrapeAll = async (browserInstance) => {
  const urls = [
    "https://www.terminalx.com/brands/terminal-x/terminal-x-men?p=3",
    "https://www.terminalx.com/brands/terminal-x/terminal-x-women?p=3",
  ];
  let browser;
  try {
    browser = await browserInstance;
    for (let url of urls) {
      console.log(url);
      const a = await pageScraper.scraper(browser, url);
      await a.map(async (b) => {
        if (b?.color?.length > 0) {
          await CreateNewProduct(b);
        }
      });
    }
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
};

module.exports = (browserInstance) => scrapeAll(browserInstance);
