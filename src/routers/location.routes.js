import { Router } from 'express'

import {
  createLocation,
  getLocations,
  getLocationById,
  updateLocationById,
  deleteLocationById,
} from '../controller/location.controller'

const router = Router()

router.get('/', getLocations)
router.post('/', createLocation)
router.get('/:productId', getLocationById)
router.put('/:productId', updateLocationById)
router.delete('/:productId', deleteLocationById)

export default router
