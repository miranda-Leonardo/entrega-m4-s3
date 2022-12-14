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
import { productExistsMiddleware } from "../middlewares/products/productExists.middleware";
import { productNotExistsMiddleware } from "../middlewares/products/productNotExists.middleware";
import { createProductSerializer } from "../serializers/createProduct.serializer";

const productsRoutes = Router();

productsRoutes.post(
  "",
  productDataValidateMiddleware(createProductSerializer),
  productNotExistsMiddleware,
  createProductController
);
productsRoutes.get("", getAllProductsController);
productsRoutes.get("/:id", productExistsMiddleware, getProductController);
productsRoutes.patch("/:id", productExistsMiddleware, updateProductController);
productsRoutes.delete("/:id", productExistsMiddleware, deleteProductController);
productsRoutes.get(
  "/category/:category_id",
  getAllProductsByCategoryController
);

export { productsRoutes };
