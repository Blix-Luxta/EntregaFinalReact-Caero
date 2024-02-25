import express from 'express'; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.disable('x-powered-by');

app.get('/', (req, res) => {


  res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});