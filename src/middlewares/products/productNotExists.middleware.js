import database from "../../database";
import { AppError } from "../../errors/appError";

const productNotExistsMiddleware = async (req, res, next) => {
  const productNotExists = await database.query(
    `SELECT 
          *
        FROM
          products
        WHERE
          name = $1;`,
    [req.body.name]
  );

  if (productNotExists.rowCount > 0) {
    throw new AppError("This product already exists!", 400);
  }

  next();
};

export { productNotExistsMiddleware };
