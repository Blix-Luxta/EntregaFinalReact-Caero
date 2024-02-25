import pkg from 'pg';
const { Client } = pkg;
import * as dotenv from 'dotenv'
dotenv.config({})

const DB_NAME = process.env.DB_DATABASE;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_PASSWORD = process.env.DB_PASSWORD;

async function setUpDatabase() {
  const isDev = process.env.NODE_ENV === 'development'
  // Check if we are in development environment
  if (!isDev) {
    return console.log('In production environment - skipping database creation.');
  }

  // Create a new client - this will allow us to connect to the database
  const client = new Client({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT
  })

  await client.connect()

  // Check if the database exists
  const res = await client.query(
    'SELECT datname FROM pg_catalog.pg_database WHERE datname = ?;',
    [DB_NAME]
  );

  if (res.rowCount === 0) {
    console.log(`${DB_NAME} database not found, creating it.`);
    await client.query('CREATE DATABASE ?;', [DB_NAME]);
    console.log(`created database ${DB_NAME}.`);
  } else {
    console.log(`${DB_NAME} database already exists.`);
  }

  // Close the connection
  await client.end()
}

setUpDatabase()