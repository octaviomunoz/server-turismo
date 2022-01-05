import mongoose from 'mongoose'
import { database } from '../../config/environment'

const DATABASE_URL = `mongodb://${database.location}/${database.dbName}`

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true })
  .then((db) => console.log('Db is connected'))
  .catch((error) => console.log('error'))
