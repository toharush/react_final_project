const { GetAllProductsFromDb } = require("../model/product");

exports.GetAllProducts = async () => {
  return await GetAllProductsFromDb();
};
