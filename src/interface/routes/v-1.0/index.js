import { Router } from 'express'
import fs from 'fs'

const router = Router()

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExt = removeExtension(file)
  const skip = ['index'].includes(fileWithOutExt)
  if (!skip) {
    router.use(
      `/${fileWithOutExt}`,
      require(`./${fileWithOutExt}.routes`).default
    )
    console.log('CARGA RUTA ---->', fileWithOutExt)
  }
})

router.get('*', (req, res) => {
  res.status(404)
  res.json({ error: 'Not found' })
})

export default router
