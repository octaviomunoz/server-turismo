import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import { API_V1_0 } from './routers/v-1.0'

const app = express()

app.set('pkg', pkg)

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  })
})

app.use('/api/v1.0', require('./routers/v-1.0').default)

export default app
