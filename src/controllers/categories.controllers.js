import { createCategoryService } from "../services/categories/createCategory.service";
import { deleteCategoryService } from "../services/categories/deleteCategory.service";
import { getAllCategoriesService } from "../services/categories/getAllCategories.service";
import { getCategoryService } from "../services/categories/getCategory.service";
import { updateCategoryService } from "../services/categories/updateCategory.service";

const createCategoryController = async (req, res) => {
  const category = await createCategoryService(req.body);
  return res.status(201).json(category);
};

const getAllCategoriesController = async (req, res) => {
  const categories = await getAllCategoriesService();
  return res.status(200).json(categories);
};

const getCategoryController = async (req, res) => {
  const category = await getCategoryService(req.params.id);
  return res.status(200).json(category);
};

const updateCategoryController = async (req, res) => {
  const category = await updateCategoryService(req.params.id, req.body);
  return res.status(200).json(category);
};

const deleteCategoryController = async (req, res) => {
  const category = await deleteCategoryService(req.params.id);
  return res.status(204).json(category);
};

export {
  createCategoryController,
  getAllCategoriesController,
  getCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
