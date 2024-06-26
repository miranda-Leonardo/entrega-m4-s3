import database from "../../database";

const getCategoryService = async (id) => {
  const response = await database.query(
    `SELECT 
        *
    FROM
        categories
    WHERE
        id = $1;`,
    [id]
  );

  return response.rows[0];
};

export { getCategoryService };
