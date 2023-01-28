const productsMetadata = require("../schemas/productsMetadata");

exports.AddProductMetadata = async(productId, userId) => {
    let res = {};
    try {
      res = await productsMetadata.find({
          productId: productId,
          userId: userId
      });
      console.log(res)
      if(res.length == 0) {
         res = await productsMetadata.insertMany({
              productId: productId, 
              userId: userId,
              buy: false
          });
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      return res;
    }
}