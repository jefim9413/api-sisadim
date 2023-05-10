import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCityUseCase } from './CreateCityUseCase'

export class CreateCityController {
  async handle(request: Request, response: Response) {
    const { name, password } = request.body
    const createCityUseCase = container.resolve(CreateCityUseCase)
    const city = await createCityUseCase.execute({
      name,
      password,
    })
    return response.status(201).send(city)
  }
}
