import { CONST_SUPPORTED_DATABASE } from './constants'
import { database } from './environment'

import mongoose from '../orm/mongoose/mongoose'

export const bootstrap = {
  async init() {
    if (database.dialect === CONST_SUPPORTED_DATABASE.MONGO) {
      mongoose
    }

    if (database.dialect === CONST_SUPPORTED_DATABASE.POSTGRES) {
      throw new Error('Not implemente postgres')
    }

    if (database.dialect === CONST_SUPPORTED_DATABASE.MYSQL) {
      throw new Error('Not implemente mysql')
    }

    if (database.dialect === CONST_SUPPORTED_DATABASE.SQLITE) {
      throw new Error('Not implemente sqlite')
    }
  },
}
