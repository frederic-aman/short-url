import { Dialect } from 'sequelize';

let keys: {
  type: Dialect;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  logging: boolean;
};

if (process.env.NODE_ENV === 'production') {
  keys = require('./prod');
} else {
  keys = require('./dev');
}

export default keys;
