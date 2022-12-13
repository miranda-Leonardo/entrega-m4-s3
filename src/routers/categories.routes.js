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
import { createCategorySerializer } from "../serializers/createCategory.serializer";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  categoryDataValidateMiddleware(createCategorySerializer),
  categoryExistsMiddleware,
  createCategoryController
);
categoriesRoutes.get("", getAllCategoriesController);
categoriesRoutes.get("/:id", getCategoryController);
categoriesRoutes.patch(
  "/:id",
  categoryDataValidateMiddleware(createCategorySerializer),
  updateCategoryController
);
categoriesRoutes.delete("/:id", deleteCategoryController);

export { categoriesRoutes };
