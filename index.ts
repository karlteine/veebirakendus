import express, { Express, Request, Response } from "express";
import cors from "cors";
import stringsController from "./controllers/strings";
import productsController from "./controllers/products";
import productListController from "./controllers/productslist";

const app: Express = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productListController);

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});