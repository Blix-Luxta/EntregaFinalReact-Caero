import { createClientDb } from "../database/setup.js";

export async function GetAll() {
  const client = createClientDb();
  try {
    await client.connect();

    const res = await client.query(
      `SELECT Id,
              Title,
              Description,
              Price,
              Category,
              Brand,
              Discount,
              Rating,
              Thumbnail
      FROM products`
    );

    await client.end();

    return res.rows;

  } catch (error) {
    console.error(error)
  }

}

export async function GetById(id) {
  const client = createClientDb();
  try {

    const res = await client.query(
      `SELECT Id,
              Title,
              Description,
              Price,
              Category,
              Brand,
              Discount,
              Rating,
              Thumbnail
      FROM products
      WHERE Id = $1`, [id]
    );

    await client.end();

    return res.rows;

  } catch (error) {
    console.error(error)
  }
}

export async function CreateProduct({ title, description, price, category, brand, discount, rating, thumbnail }) {
  const client = createClientDb();
  try {
    await client.connect();

    const res = await client.query(
      `INSERT INTO products (Title, Description, Price, Category, Brand, Discount, Rating, Thumbnail)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [title, description, price, category, brand, discount, rating, thumbnail]
    );

    await client.end();

    return res.rows;

  } catch (error) {
    console.error(error)
  }
}

export async function UpdateProduct({ id, title, description, price, category, brand, discount, rating, thumbnail }) {
  const client = createClientDb();
  try {
    await client.connect();

    const res = await client.query(
      `UPDATE products
      SET Title = $1,
          Description = $2,
          Price = $3,
          Category = $4,
          Brand = $5,
          Discount = $6,
          Rating = $7,
          Thumbnail = $8
      WHERE Id = $9`,
      [title, description, price, category, brand, discount, rating, thumbnail, id]
    );

    await client.end();

    return res.rows;

  } catch (error) {
    console.error(error)
  }
}

export async function DeleteProduct(id) {
  const client = createClientDb();
  try {
    await client.connect();

    const res = await client.query(
      `DELETE FROM products
      WHERE Id = $1`, [id]
    );

    await client.end();

    return res.rows;

  } catch (error) {
    console.error(error)
  }
}