import { inject, injectable } from 'tsyringe'
import { ICityRepository } from '../../repositories/ICityRepository'

interface CityUseCaseRequest {
  name: string
  password: string
}
@injectable()
export class CreateCityUseCase {
  constructor(
    @inject('CityRepository')
    private cityRepository: ICityRepository,
  ) {}

  async execute({ name, password }: CityUseCaseRequest) {
    const city = await this.cityRepository.create({ name, password })

    return city
  }
}
