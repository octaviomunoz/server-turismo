import { Router } from 'express'

import * as locationController from '../../controller/location.controller'

const router = Router()

router.get('/', locationController.getLocations)
router.post('/', locationController.createLocation)
router.get('/:productId', locationController.getLocationById)
router.put('/:productId', locationController.updateLocationById)
router.delete('/:productId', locationController.deleteLocationById)

export default router
