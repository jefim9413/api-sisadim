import { Router } from 'express'
import { cityRouter } from './city.routes'
import { autheenticaterRoutes } from './Authenticate.routes'
import { institutionRouter } from './institution.routes'

export const router = Router()

router.use('/city', cityRouter)
router.use('/institution', institutionRouter)
router.use(autheenticaterRoutes)
