import database from "../../database";
import { AppError } from "../../errors/appError";

const productExistsMiddleware = async (req, res, next) => {
  if (req.params.id.length !== 36) {
    return res.status(404).json({ message: "This product not exists!" });
  }
  const productExists = await database.query(
    `SELECT 
          *
        FROM
          products
        WHERE
          id = $1;`,
    [req.params.id]
  );

  if (!productExists.rows[0]) {
    throw new AppError("This product not exists!", 404);
  }

  next();
};

export { productExistsMiddleware };
