const productsMetadata = require("../schemas/productsMetadata");

exports.AddToCartDb = async (productId, userId) => {
  let res = {};
  try {
    res = await productsMetadata.find({
        productId: productId,
        userId: userId
    });
    if(res.length == 0) {
       res = await productsMetadata.insertMany({
            productId: productId, 
            userId: userId,
            buy: false
        });
    }
  } catch (err) {
    console.log(err);
  } finally {
    return res;
  }
};


exports.Buy = () => {

}