import database from "../../database";
import { AppError } from "../../errors/appError";

const categoryExistsMiddleware = async (req, res, next) => {
  const categoryExists = await database.query(
    `SELECT 
          *
        FROM
          categories
        WHERE
          id = $1`,
    [req.params.id]
  );

  if (categoryExists.rowCount < 1) {
    throw new AppError("This category not exists!", 404);
  }

  return next();
};

export { categoryExistsMiddleware };
