import database from "../../database";

const getAllProductsService = async () => {
  const response = await database.query(
    `SELECT
        *
    FROM
        products;`
  );

  return response.rows;
};

export { getAllProductsService };
