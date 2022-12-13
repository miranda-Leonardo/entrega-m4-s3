import { Router } from "express";
import { createCategoryController } from "../controllers/categories.controllers";
import { categoryDataValidateMiddleware } from "../middlewares/categories/categoryDataValidate.middleware";
import { categoryExistsMiddleware } from "../middlewares/categories/categoryExists.middleware";
import { createCategorySchema } from "../serializers/createCategory.serializer";

const categoriesRoutes = Router();

categoriesRoutes.post("", categoryDataValidateMiddleware(createCategorySchema), categoryExistsMiddleware, createCategoryController);

export { categoriesRoutes };
