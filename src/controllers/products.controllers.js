import { createProductService } from "../services/products/createProduct.service";
import { deleteProductService } from "../services/products/deleteProduct.service";
import { getAllProductsService } from "../services/products/getAllProducts.service";
import { getAllProductsByCategoryService } from "../services/products/getAllProductsByCategory.service";
import { getProductService } from "../services/products/getProduct.service";
import { updateProductService } from "../services/products/updateProduct.service";

const createProductController = async (req, res) => {
  const product = await createProductService(req.body);
  return res.status(201).json(product);
};

const getAllProductsController = async (req, res) => {
  const products = await getAllProductsService();
  return res.status(200).json(products);
};

const getProductController = async (req, res) => {
  const product = await getProductService(req.params.id);
  return res.status(200).json(product);
};

const updateProductController = async (req, res) => {
  const product = await updateProductService(req.params.id, req.body);
  return res.status(200).json(product);
};

const deleteProductController = async (req, res) => {
  const product = await deleteProductService(req.params.id);
  return res.status(204).json(product);
};

const getAllProductsByCategoryController = async (req, res) => {
  const products = await getAllProductsByCategoryService(req.params.id);
  return res.status(200).json(products);
};

export {
  createProductController,
  getAllProductsController,
  getProductController,
  updateProductController,
  deleteProductController,
  getAllProductsByCategoryController,
};
