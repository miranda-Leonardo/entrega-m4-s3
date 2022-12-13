import { Router } from "express";
import { createProductController } from "../controllers/products.controllers";
import { productDataValidateMiddleware } from "../middlewares/products/productDataValidate.middleware";
import { createProductSerializer } from "../serializers/createProduct.serializer";

const productsRoutes = Router();

productsRoutes.post(
  "",
  productDataValidateMiddleware(createProductSerializer),
  createProductController
);

export { productsRoutes };
