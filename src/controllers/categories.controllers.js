import { createCategoryService } from "../services/categories/createCategory.service";

const createCategoryController = async (req, res) => {
    const category = await createCategoryService(req.body);
    return res.status(201).json(category)
};

export { createCategoryController };