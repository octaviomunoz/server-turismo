import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

//Routes
import locationRoutes from './routers/location.routes'

const app = express()

app.set('pkg', pkg)

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  })
})

app.use('/locations', locationRoutes)

export default app
