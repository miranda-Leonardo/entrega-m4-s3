import database from "../../database";
import { AppError } from "../../errors/appError";

const categoryExistsMiddleware = async (req, res, next) => {
  try {
    const categoryExists = await database.query(
      `SELECT 
          *
        FROM
          categories
        WHERE
          name = $1`,
      [req.body.name]
    );

    if (categoryExists.rowCount > 0) {
      throw new AppError("This category already exists!", 409);
    }

    return next();
  } catch (err) {
    return res.status(err.statusCode).json(err.message);
  }
};

export { categoryExistsMiddleware };
