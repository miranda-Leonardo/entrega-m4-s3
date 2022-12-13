import database from "../../database";

const getAllProductsByCategoryService = async (id) => {
  const response = await database.query(
    `SELECT 
        p.name,
        p.price, 
        c.name category
    FROM 
        products p 
    JOIN
        categories c ON c.id = $1;`,
    [id]
  );

  return response.rows;
};

export { getAllProductsByCategoryService };
