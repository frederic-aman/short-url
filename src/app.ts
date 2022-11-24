import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';
import { sequelizeConnection } from './utils';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, async () => {
  console.log(`App is running at https://localhost:${port}`);
  await sequelizeConnection.sync();
  routes(app);
});
