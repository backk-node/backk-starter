import { PostgreSqlDataStore, throwException } from 'backk';

const POSTGRESQL_HOST =
  process.env.POSTGRESQL_HOST ?? throwException('Undefined POSTGRESQL_HOST environment variable');

const POSTGRESQL_USER =
  process.env.POSTGRESQL_USER ?? throwException('Undefined POSTGRESQL_USER environment variable');

const POSTGRESQL_PASSWORD =
  process.env.POSTGRESQL_PASSWORD ?? throwException('Undefined POSTGRESQL_PASSWORD environment variable');

const POSTGRESQL_PORT = process.env.POSTGRESQL_PORT ? parseInt(process.env.POSTGRESQL_PORT, 10) : 5432;

export const postgreSqlDataStore = new PostgreSqlDataStore(
  POSTGRESQL_HOST,
  POSTGRESQL_PORT,
  POSTGRESQL_USER,
  POSTGRESQL_PASSWORD,
  'postgres',
  'public'
);
