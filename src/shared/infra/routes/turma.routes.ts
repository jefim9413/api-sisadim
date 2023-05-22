import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ListTurmaController } from '../../../modules/turmas/useCases/listTurma/ListTurmaController'
import { CreateTurmaController } from '../../../modules/turmas/useCases/createTurma/CreateTurmaController'

export const turmaRouter = Router()

const createTurmaController = new CreateTurmaController()
const listTurmaController = new ListTurmaController()

turmaRouter.post(
  '/:institution_id',
  ensureAuthenticated,
  createTurmaController.handle,
)

turmaRouter.get('/:institution_id', listTurmaController.handle)
