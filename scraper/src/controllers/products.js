const { CreateNewProductDb } = require("../models/products");

exports.CreateNewProduct = async (product) => {
  return await CreateNewProductDb(product);
};
