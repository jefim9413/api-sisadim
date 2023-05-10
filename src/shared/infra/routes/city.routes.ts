import { Router } from 'express'
import { CreateCityController } from '../../../modules/city/useCases/createCity/CreateCityController'

export const cityRouter = Router()

const createCityController = new CreateCityController()

cityRouter.post('/', createCityController.handle)
