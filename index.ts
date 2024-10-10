import express, { Express, Request, Response } from "express";
import stringsController from "./controllers/strings";
import productsController from "./controllers/products"
import productslistController from "./controllers/productslist"

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', stringsController);

app.use('/', productsController); 

app.use('/', productslistController)

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});