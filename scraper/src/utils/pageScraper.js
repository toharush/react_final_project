const scraperObject = {
  async scraper(browser, url) {
    let page = await browser.newPage();
    console.log(`Navigating to ${url}...`);
    await page.goto(url);
    await page.waitForSelector("div.item__short_tayt");
    return await page.evaluate(() => {
      let elem = Array.from(
        document.querySelectorAll("li.listing-product_3mjp")
      );
      return elem.map((el) => {
        const colors = Array.from(el?.querySelectorAll("div.color-item_1Y2Y"));
        const sizes = Array.from(
          el?.querySelectorAll("div.item__short_tayt")
        ).map((size) => size.textContent);
        sizes.splice(0, 1);
        sizes.splice(sizes.length - 1, 1);
        return {
          price: el?.querySelector("div.final-price_8CiX")?.textContent.split(" ")[0],
          name: el?.querySelector("a.title_3ZxJ")?.textContent,
          supplier: "Terminal X",
          color: colors.map((e) => {
            e.click();
            return {
              size: sizes,
              color: {
                name: e.getAttribute("title"),
                style: e.getAttribute("style"),
              },
              img: el?.querySelector("img.image_3k9y").getAttribute("src"),
            };
          }),
        };
      });
    });
  },
};

module.exports = scraperObject;
