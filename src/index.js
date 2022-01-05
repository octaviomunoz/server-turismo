import dotenv from 'dotenv'

import app from './app'
import { bootstrap } from './infrastructure/config/bootstrap'

dotenv.config()

//bootstrap.init()

const PORT = process.env.SERVER_PORT || 4000
app.listen(PORT)
console.log('SERVER LIST ON PORT', PORT)
