import { Router } from 'express'
import { cityRouter } from './city.routes'

export const router = Router()

router.use('/city', cityRouter)
