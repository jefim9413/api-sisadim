import { inject, injectable } from 'tsyringe'
import { ICityRepository } from '../../repositories/ICityRepository'

interface ICityRequest {
  name: string
  password: string
}

@injectable()
export class AuthenticateUseCase {
  constructor(
    @inject('CityRepository')
    private cityRepository: ICityRepository,
  ) {}

  async execute({ name, password }: ICityRequest) {}
}
