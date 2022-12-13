import database from "../../database";

const createProductService = async ({ name, price, category_id }) => {
  const response = await database.query(
    `INSERT INTO products
        (name, price, category_id)
    VALUES
        ($1, $2, $3);`,
    [name, price, category_id]
  );

  return response.rows[0];
};

export { createProductService };
