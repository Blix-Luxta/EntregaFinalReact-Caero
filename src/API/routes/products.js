import { GetAll, GetById, CreateProduct, UpdateProduct, DeleteProduct} from '../services/productService.js';
import { Router } from 'express';

export const productsEndPoint = Router();

//Obtain all products
productsEndPoint.get('/', async (req, res) => {
    const products = await GetAll();

  res.json({ products });
});

//Obtain a product by id
productsEndPoint.get('/:id', async (req, res) => {
  // Obtain the id from the request parameters
  const { id } = req.params;

  const product = GetById(id);

  res.json({ product });
});

//Create a new product
productsEndPoint.post('/', async (req, res) => {
  // Obtain the data from the request body
  const { title, description, price, category, brand, discount, rating, thumbnail } = req.body;

  const product = await CreateProduct({ title, description, price, category, brand, discount, rating, thumbnail });

  res.json({ product });
});

//Update a product
productsEndPoint.put('/:id', async (req, res) => {
  // Obtain the id from the request parameters
  const { id } = req.params;
  // Obtain the data from the request body
  const { title, description, price, category, brand, discount, rating, thumbnail } = req.body;

  const product = await UpdateProduct({ id, title, description, price, category, brand, discount, rating, thumbnail });

  res.json({ product });
});

//Delete a product
productsEndPoint.delete('/:id', async (req, res) => {
  // Obtain the id from the request parameters
  const { id } = req.params;

  // Delete the product
  const product = await DeleteProduct(id);

  res.json({ product });
});