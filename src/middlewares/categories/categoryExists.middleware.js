import database from "../../database";
import { AppError } from "../../errors/appError";

const categoryExistsMiddleware = async (req, res, next) => {
  if (isNaN(req.params.id)) {
    return res.status(404).json({ message: "This product not exists!" });
  }
  const categoryExists = await database.query(
    `SELECT 
        *
    FROM
        categories
    WHERE
        id = $1;`,
    [req.params.id]
  );

  if (!categoryExists.rows[0]) {
    throw new AppError("This category not exists!", 404);
  }

  next();
};

export { categoryExistsMiddleware };
