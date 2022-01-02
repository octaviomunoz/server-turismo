import { Router } from 'express'

import * as authController from '../../controller/auth.controller'

const router = Router()

router.post('/login', authController.login)

router.post('/sing-in', authController.singIn)

router.post('/logout', authController.logout)

export default router
