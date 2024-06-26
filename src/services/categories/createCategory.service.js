import database from "../../database";

const createCategoryService = async (data) => {
  const response = await database.query(
    `INSERT INTO
        categories (name)
    VALUES
        ($1)
    RETURNING *;`,
    [data.name]
  );

  return response.rows[0];
};

export { createCategoryService };
