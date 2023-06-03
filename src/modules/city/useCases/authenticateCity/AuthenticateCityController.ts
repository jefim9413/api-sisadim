import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AuthenticateUseCase } from './AuthenticateCityUseCase'

export class AuthenticateController {
  async handle(request: Request, response: Response) {
    const { name, password } = request.body
    const authenticateUseCase = container.resolve(AuthenticateUseCase)
    const token = await authenticateUseCase.execute({
      password,
      name,
    })

    return response.status(201).json(token)
  }
}
