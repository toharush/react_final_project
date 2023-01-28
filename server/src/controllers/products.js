const { GetAllProductsFromDb } = require("../model/product")

exports.GetAllProducts = async() => {
    console.log("hey")
   return await GetAllProductsFromDb();
}