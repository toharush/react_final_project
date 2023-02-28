const products = require("../schemas/products");

exports.GetAllProductsFromDb = async () => {
  let res = [];

  try {
    res = await products.find({});
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};

exports.GetProductByIdFromDb = async (id) => {
  let res = {};

  try {
    res = await products.findById(id);
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};
