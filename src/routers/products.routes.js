import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductsByCategoryController,
  getAllProductsController,
  getProductController,
  updateProductController,
} from "../controllers/products.controllers";
import { productDataValidateMiddleware } from "../middlewares/products/productDataValidate.middleware";
import { createProductSerializer } from "../serializers/createProduct.serializer";

const productsRoutes = Router();

productsRoutes.post(
  "",
  productDataValidateMiddleware(createProductSerializer),
  createProductController
);
productsRoutes.get("", getAllProductsController);
productsRoutes.get("/:id", getProductController);
productsRoutes.patch("/:id", updateProductController);
productsRoutes.delete("/:id", deleteProductController);
productsRoutes.get("/category/:id", getAllProductsByCategoryController);

export { productsRoutes };
