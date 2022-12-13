import database from "../../database";

const getProductService = async (id) => {
  const response = await database.query(
    `SELECT
        *
    FROM
        products
    WHERE
        id = $1;`,
    [id]
  );

  return response.rows[0];
};

export { getProductService };
