import { MySqlDataStore, throwException } from 'backk';

const MYSQL_HOST = process.env.MYSQL_HOST ?? throwException('Undefined MYSQL_HOST environment variable');
const MYSQL_USER = process.env.MYSQL_USER ?? throwException('Undefined MYSQL_USER environment variable');

const MYSQL_PASSWORD =
  process.env.MYSQL_PASSWORD ?? throwException('Undefined MYSQL_PASSWORD environment variable');

export const mySqlDataStore = new MySqlDataStore(MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, 'public');
