import Product from "../models/productSchema.js";

export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.json(products);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (request, response) => {
  try {
    const products = await Product.findOne({ id: request.params.id });
    response.json(products);
  } catch (error) {
    console.log(error);
  }
};
