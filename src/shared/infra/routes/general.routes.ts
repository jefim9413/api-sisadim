import { Router } from 'express'
import { CreateGeneralController } from '../../../modules/general/useCases/createGeneral/CreateGeneralController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ListGeneralController } from '../../../modules/general/useCases/listGeneral/ListGeneralController'

export const generalRouter = Router()

const createGeneralController = new CreateGeneralController()
const listGeneralController = new ListGeneralController()

generalRouter.post('/', ensureAuthenticated, createGeneralController.handle)
generalRouter.get('/', ensureAuthenticated, listGeneralController.handle)
