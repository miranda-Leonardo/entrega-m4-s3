import database from "../../database";
import { AppError } from "../../errors/appError";

const productExistsMiddleware = async (req, res, next) => {
  const productExists = await database.query(
    `SELECT 
          *
        FROM
          products
        WHERE
          id = $1`,
    [req.params.id]
  );

  if (productExists.rowCount < 1) {
    throw new AppError("This product not exists!", 404);
  }

  return next();
};

export { productExistsMiddleware };
