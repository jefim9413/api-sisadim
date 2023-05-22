import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateTurmaUseCase } from './CreateTurmaUseCase'

export class CreateTurmaController {
  async handle(request: Request, response: Response) {
    const institution_id = request.params.institution_id
    const { name, database } = request.body

    const createTurmaUseCase = container.resolve(CreateTurmaUseCase)

    const turma = await createTurmaUseCase.execute({
      name,
      database,
      institution_id,
    })
    return response.status(201).send(turma)
  }
}
