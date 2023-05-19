import { Router } from 'express'
import { CreateInstitutionController } from '../../../modules/institution/useCases/createInstitution/CreateInstitutionController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ListAllInstitutionController } from '../../../modules/institution/useCases/listAllInstitution/ListAllInstitutionController'

export const institutionRouter = Router()

const createInstitutionController = new CreateInstitutionController()
const listAllInstitutionController = new ListAllInstitutionController()

institutionRouter.post(
  '/',
  ensureAuthenticated,
  createInstitutionController.handle,
)
institutionRouter.get(
  '/',
  ensureAuthenticated,
  listAllInstitutionController.handle,
)
