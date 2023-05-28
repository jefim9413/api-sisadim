import { container } from 'tsyringe'
import { ListAllInstitutionUseCase } from './ListAllInstitutionUseCase'
import { Request, Response } from 'express'

export class ListAllInstitutionController {
  async handle(request: Request, response: Response) {
    const listAllInstitutionUseCase = container.resolve(
      ListAllInstitutionUseCase,
    )
    const city_id = request.city.id

    const institution = await listAllInstitutionUseCase.execute(city_id)
    return response.json(institution)
  }
}
