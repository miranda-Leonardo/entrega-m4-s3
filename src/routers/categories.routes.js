import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  getCategoryController,
  updateCategoryController,
} from "../controllers/categories.controllers";
import { categoryDataValidateMiddleware } from "../middlewares/categories/categoryDataValidate.middleware";
import { categoryExistsMiddleware } from "../middlewares/categories/categoryExists.middleware";
import { categoryNotExistsMiddleware } from "../middlewares/categories/categoryNotExists.middleware";
import { createCategorySerializer } from "../serializers/createCategory.serializer";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  categoryDataValidateMiddleware(createCategorySerializer),
  categoryNotExistsMiddleware,
  createCategoryController
);
categoriesRoutes.get("", getAllCategoriesController);
categoriesRoutes.get("/:id", categoryExistsMiddleware, getCategoryController);
categoriesRoutes.patch(
  "/:id",
  categoryDataValidateMiddleware(createCategorySerializer),
  categoryExistsMiddleware,
  updateCategoryController
);
categoriesRoutes.delete(
  "/:id",
  categoryExistsMiddleware,
  deleteCategoryController
);

export { categoriesRoutes };
