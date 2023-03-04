const { CreateNewProductDb } = require("../models/products");

exports.CreateNewProduct = async (product, categories) => {
  return await CreateNewProductDb(product, categories);
};
