import database from "../../database";

const updateProductService = async (id, productData) => {
  let query = "UPDATE products SET ";
  const keys = Object.keys(productData);
  const values = Object.values(productData);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);

  query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

  const response = await database.query(query, [...values, id]);

  return response.rows[0];
};

export { updateProductService };
