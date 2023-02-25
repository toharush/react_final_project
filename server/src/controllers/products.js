const { GetAllProductsFromDb } = require("../model/product");

exports.GetAllProducts = async () => {
  return await GetAllProductsFromDb();
};

exports.GetAllProductsWebSocket = async (ws) => {
  await setInterval(async () => await ws.send(await GetAllProductsFromDb()), 1000);
};
