import { Sequelize } from 'sequelize-typescript';
import keys from '../config/keys';
import { Url } from '../modules/shortUrl/models';

const sequelizeConnection = new Sequelize({
  dialect: keys.type,
  host: keys.host,
  username: keys.username,
  password: keys.password,
  database: keys.database,
  port: keys.port,
  logging: keys.logging,
  models: [Url],
});

export { sequelizeConnection };
