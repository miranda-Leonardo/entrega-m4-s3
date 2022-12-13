import database from "../../database";

const deleteProductService = async (id) => {
  const product = await database.query(
    `DELETE FROM
        products
    WHERE
        id = $1
    RETURNING *;`,
    [id]
  );

  return {};
};

export { deleteProductService };
