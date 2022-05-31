import express from 'express';
import cors from 'cors';
import apiRouter from './src/routes/apiRouter.js';

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/pizzas', apiRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })




  

