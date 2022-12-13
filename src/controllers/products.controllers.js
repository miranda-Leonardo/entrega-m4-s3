import { createProductService } from "../services/products/createProduct.service";

const createProductController = async (req, res) => {
  const product = await createProductService(req.body);
  return res.status(201).json(product);
};

export { createProductController };
