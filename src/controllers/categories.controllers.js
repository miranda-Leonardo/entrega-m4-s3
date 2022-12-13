import { createCategoryService } from "../services/categories/createCategory.service";
import { getAllCategoriesService } from "../services/categories/getAllCategories.service";
import { getCategoryService } from "../services/categories/getCategory.service";

const createCategoryController = async (req, res) => {
  const category = await createCategoryService(req.body);
  return res.status(201).json(category);
};

const getAllCategoriesController = async (req, res) => {
  const categories = await getAllCategoriesService();
  return res.status(201).json(categories);
};

const getCategoryController = async (req, res) => {
  const category = await getCategoryService(req.params.id);
  return res.status(201).json(category);
};

export {
  createCategoryController,
  getAllCategoriesController,
  getCategoryController,
};
