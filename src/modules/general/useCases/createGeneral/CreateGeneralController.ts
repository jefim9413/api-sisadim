import { Request, Response } from 'express'
import { CreateGeneralUseCase } from './CreateGeneralUseCase'
import { container } from 'tsyringe'

export class CreateGeneralController {
  async handle(request: Request, response: Response) {
    const { name, database } = request.body
    const city_id = request.city.id

    const createGeneralUseCase = container.resolve(CreateGeneralUseCase)

    const general = await createGeneralUseCase.execute({
      name,
      database,
      city_id,
    })

    return response.status(201).send(general)
  }
}
