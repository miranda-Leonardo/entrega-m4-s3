import database from "../../database";

const deleteCategoryService = async (id) => {
  const category = await database.query(
    `DELETE FROM
        categories
    WHERE
        id = $1
    RETURNING *;`,
    [id]
  );

  return {};
};

export { deleteCategoryService };
