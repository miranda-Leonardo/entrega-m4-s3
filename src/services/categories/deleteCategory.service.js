import database from "../../database";

const deleteCategoryService = async (id) => {
  const category = await database.query(
    `DELETE FROM
        categories
    WHERE
        id = $1;`,
    [id]
  );

  return {};
};

export { deleteCategoryService };
