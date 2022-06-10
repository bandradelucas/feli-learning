import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app: Express = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3333;

app.get('/', (req: Request, res: Response) => {
  // res.send(process.env.MONGO_CONNECTION);
  mongoose.connect(process.env.DB_CONNECTION);
  const Cat = mongoose.model('Cat', { name: String });

  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));

  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});