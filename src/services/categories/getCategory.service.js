import database from "../../database";

const getCategoryService = async (id) => {
  const response = await database.query(
    `SELECT 
        *
    FROM
        categories
    WHERE
        id = ${id};`
  );

  return response.rows[0];
};

export { getCategoryService };
