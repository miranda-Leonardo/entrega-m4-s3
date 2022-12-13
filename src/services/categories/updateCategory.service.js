import database from "../../database";

const updateCategoryService = async (id, { name }) => {
  const response = await database.query(
    `UPDATE
        categories
    SET 
        name = $1
    WHERE
        id = $2
    RETURNING *;`,
    [name, id]
  );

  return response.rows[0];
};

export { updateCategoryService };
