import { Router } from 'express'
import { AuthenticateController } from '../../../modules/city/useCases/authenticateCity/AuthenticateCityController'

export const autheenticaterRoutes = Router()

const authenticateController = new AuthenticateController()
autheenticaterRoutes.post('/sessions', authenticateController.handle)
