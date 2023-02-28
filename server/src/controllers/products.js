const { GetAllProductsFromDb, GetProductByIdFromDb } = require("../model/product");

exports.GetAllProducts = async () => {
  return await GetAllProductsFromDb();
};

exports.GetProductById = async (id) => {
  return await GetProductByIdFromDb(id);
};

exports.GetAllProductsWebSocket = async (ws) => {
  await setInterval(async () => await ws.send(await GetAllProductsFromDb()), 1000);
};
