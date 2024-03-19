import express, { json } from 'express';
import { productsEndPoint } from './routes/products.js';
import cors from 'cors';
import process from 'process';

const appHost = 'http://localhost:5173/';

const app = express();
app.use(json());
app.use(cors({
  origin: (origin, callback) => {
    if (origin === appHost) {
      return callback(null, true);
    }
    if (!origin) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  }
}))
app.disable('x-powered-by');

// Enpoints
app.use('/product', productsEndPoint);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});