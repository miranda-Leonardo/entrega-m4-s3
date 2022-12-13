import { createProductService } from "../services/products/createProduct.service";
import { getAllProductsService } from "../services/products/getAllProducts.service";

const createProductController = async (req, res) => {
  const product = await createProductService(req.body);
  return res.status(201).json(product);
};

const getAllProductsController = async (req, res) => {
  const products = await getAllProductsService();
  return res.status(200).json(products);
};

export { createProductController, getAllProductsController };
