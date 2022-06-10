import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app: Express = express();
const mongoose = require('mongoose');
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  // res.send(process.env.MONGO_CONNECTION);
  mongoose.connect(process.env.DB_CONNECTION);

  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});