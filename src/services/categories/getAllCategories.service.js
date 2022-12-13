import database from "../../database";

const getAllCategoriesService = async () => {
  const response = await database.query(
    `SELECT
        *
    FROM
        categories;`
  );

  return response.rows;
};

export { getAllCategoriesService };
