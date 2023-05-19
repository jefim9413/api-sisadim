import { Request, Response } from 'express'
import { CreateInstitutionUseCase } from './CreateInstitutionUseCase'
import { container } from 'tsyringe'

export class CreateInstitutionController {
  async handle(request: Request, response: Response) {
    const { name } = request.body
    const city_id = request.city.id
    const createInstitutionUseCase = container.resolve(CreateInstitutionUseCase)

    const institution = await createInstitutionUseCase.execute({
      name,
      city_id,
    })

    return response.status(201).send(institution)
  }
}
