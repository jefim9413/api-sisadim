import { container } from 'tsyringe'
import { ListGeneralUseCase } from './ListGeneralUseCase'
import { Request, Response } from 'express'

export class ListGeneralController {
  async handle(request: Request, response: Response) {
    const city_id = request.city.id
    const listGeneralUseCase = container.resolve(ListGeneralUseCase)

    const general = await listGeneralUseCase.execute(city_id)

    return response.json(general)
  }
}
