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
