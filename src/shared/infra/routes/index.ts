import { Router } from 'express'
import { cityRouter } from './city.routes'
import { autheenticaterRoutes } from './Authenticate.routes'

export const router = Router()

router.use('/city', cityRouter)
router.use(autheenticaterRoutes)
