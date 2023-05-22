import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListTurmaUseCase } from './ListTurmaUseCase'

export class ListTurmaController {
  async handle(request: Request, response: Response) {
    const listTurmaUseCase = container.resolve(ListTurmaUseCase)

    const city_id = request.params.institution_id

    const turma = await listTurmaUseCase.execute(city_id)

    return response.status(201).send(turma)
  }
}
