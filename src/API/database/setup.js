import pkg from 'pg';
const { Client } = pkg;
import * as dotenv from 'dotenv'
dotenv.config({})

const DB_NAME = process.env.DB_DATABASE;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_PASSWORD = process.env.DB_PASSWORD;

export const createClientDb = () => {
  // Create a new client - this will allow us to connect to the database
  const client = new Client({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
  })
  return client;
}

// export async function setUpDatabase() {
//   const isDev = process.env.NODE_ENV === 'development'
//   // Check if we are in development environment
//   if (!isDev) {
//     return console.log('In production environment - skipping database creation.');
//   }

//   // Create a new connection
//   const client = createClientDb()
//   await client.connect()
  
//   try {
//     await createDataBase({ client })
//   } catch (error) { console.log(`Error creando la base de datos ${DB_NAME}`) }
//   // Close the connection
//   await client.end()
// }

// async function createDataBase({ client }) {

//   console.log(`Existe ${DB_NAME} ${1} veces.`)
//   // Check if the database exists
//   const res = await client.query(
//     'SELECT datname FROM pg_catalog.pg_database WHERE datname like ?;',
//     [DB_NAME]
//   );
//   console.log(`Existe ${DB_NAME} ${res.rowCount} veces.`)

//   if (res.rowCount === 0) {
//     console.log(`${DB_NAME} database not found, creating it.`);
//     await client.query('CREATE DATABASE ?;', [DB_NAME]);
//     console.log(`created database ${DB_NAME}.`);
//   } else {
//     console.log(`${DB_NAME} database already exists.`);
//   }
// }

// async function createProductTable({ client }) {
//   // Create a table if it does not exist
//   await client.query(`
//     CREATE TABLE IF NOT EXISTS Products (
//       Id SERIAL PRIMARY KEY,
//       Title VARCHAR(200),
//       Price DOUBLE PRECISION,
//       Category VARCHAR(200),
//       Thumbnail text,
//       Description text,
//       Discount NUMERIC(5, 2),
//       Rating NUMERIC(3, 2),
//       Brand VARCHAR(200)
//     );
//   `);
//   console.log('Created products table.');
// }

// async function createImageTable({ client }) {
//   await client.query(`
//     CREATE TABLE IF NOT EXISTS Images (
//       Id SERIAL PRIMARY KEY,
//       ProductId INT,
//       Image text,
//       FOREIGN KEY (ProductId) REFERENCES Products(Id)
//     );
//   `);
//   console.log('Created images table.');
// }