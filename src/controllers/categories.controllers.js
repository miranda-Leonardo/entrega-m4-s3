import { createCategoryService } from "../services/categories/createCategory.service";
import { getAllCategoriesService } from "../services/categories/getAllCategories.service";

const createCategoryController = async (req, res) => {
  const category = await createCategoryService(req.body);
  return res.status(201).json(category);
};

const getAllCategoriesController = async (req, res) => {
  const categories = await getAllCategoriesService();
  return res.status(201).json(categories);
};

export { createCategoryController, getAllCategoriesController };
