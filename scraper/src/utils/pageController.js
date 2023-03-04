const { CreateNewProduct } = require("../controllers/products");
const pageScraper = require("./pageScraper");
const scrapeAll = async (browserInstance) => {
  const urls = [
    {url: "https://www.terminalx.com/men/shirts/tshirts", categories: ["גברים", "טישירטים"]},
    {url: "https://www.terminalx.com/men/knitwear-sweatshirts/sweatshirts", categories: ["גברים", "סוויטשירטים"]},
    {url: "https://www.terminalx.com/men/jackets-coats/coats", categories: ["גברים", "מעילים"]},
    {url: "https://www.terminalx.com/men/pants/jeans", categories: ["גברים", "ג'ינסים"]},
    {url: "https://www.terminalx.com/women/tops/tshirts", categories: ["נשים", "טישירטים"]},
    {url: "https://www.terminalx.com/women/jackets-coats/coats", categories: ["נשים", "מעילים"]},
    {url: "https://www.terminalx.com/women/knitwear-sweatshirts/sweatshirts", categories: ["נשים", "סוויטשירטים"]},
    {url: "https://www.terminalx.com/women/pants-skirts/jeans", categories: ["נשים", "ג'ינסים"]}
  ];
  let browser;
  try {
    browser = await browserInstance;
    for (let url of urls) {
      const a = await pageScraper.scraper(browser, url.url);
      await a.map(async (b) => {
        if (b?.color?.length > 0) {
          await CreateNewProduct(b, url.categories);
        }
      });
    }
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
};

module.exports = (browserInstance) => scrapeAll(browserInstance);
