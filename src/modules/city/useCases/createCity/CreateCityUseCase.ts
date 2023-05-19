import { inject, injectable } from 'tsyringe'
import { ICityRepository } from '../../repositories/ICityRepository'
import { hash } from 'bcryptjs'

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
    const cityAlreadyExists = await this.cityRepository.findByCity(name)

    if (cityAlreadyExists) {
      throw new Error('City already exists')
    }

    const passwordHash = await hash(password, 8)
    const city = await this.cityRepository.create({
      name,
      password: passwordHash,
    })
    return city
  }
}
