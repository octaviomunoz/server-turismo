import { CONST_SUPPORTED_DATABASE } from './constants'

export const database = {
  dialect: process.env.DATABASE_DIALECT || CONST_SUPPORTED_DATABASE.MONGO,
  location: process.env.DATABASE_LOCATION || 'localhost',
  dbName: process.env.DATABASE_NAME || 'test',
}
