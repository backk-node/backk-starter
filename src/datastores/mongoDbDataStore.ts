import { MongoDbDataStore, throwException } from 'backk';

const MONGO_DB_URI =
  process.env.MONGO_DB_URI ?? throwException('Undefined MONGO_DB_URI environment variable');

export const mongoDbDataStore = new MongoDbDataStore(MONGO_DB_URI, 'public');
