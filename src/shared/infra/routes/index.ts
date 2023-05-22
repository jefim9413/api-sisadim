import { Router } from 'express'
import { cityRouter } from './city.routes'
import { autheenticaterRoutes } from './Authenticate.routes'
import { institutionRouter } from './institution.routes'
import { turmaRouter } from './turma.routes'

export const router = Router()

router.use('/city', cityRouter)
router.use('/institution', institutionRouter)
router.use('/turma', turmaRouter)
router.use(autheenticaterRoutes)
