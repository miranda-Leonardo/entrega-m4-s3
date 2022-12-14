import database from "../../database";
import { AppError } from "../../errors/appError";

const categoryNotExistsMiddleware = async (req, res, next) => {
  const categoryNotExists = await database.query(
    `SELECT 
          *
        FROM
          categories
        WHERE
          name = $1`,
    [req.body.name]
  );

  if (categoryNotExists.rowCount > 0) {
    throw new AppError("This category already exists!", 400);
  }

  return next();
};

export { categoryNotExistsMiddleware };
