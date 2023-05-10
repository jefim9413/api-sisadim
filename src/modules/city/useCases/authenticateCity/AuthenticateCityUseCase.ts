import { inject, injectable } from 'tsyringe'
import { ICityRepository } from '../../repositories/ICityRepository'
import { sign } from 'jsonwebtoken'

interface ICityRequest {
  name: string
  password: string
}

interface ICityResponse {
  city: {
    name: string
  }
  token: string
}

@injectable()
export class AuthenticateUseCase {
  constructor(
    @inject('CityRepository')
    private cityRepository: ICityRepository,
  ) {}

  async execute({ name, password }: ICityRequest) {
    const city = await this.cityRepository.findByCity(name)

    if (!city) {
      throw new Error('ciy or password not found')
    }

    const token = sign({}, 'ac81a9ff47be796b7f2e4ccad808e14a', {
      subject: city.id,
      expiresIn: '99d',
    })

    const tokenreturn: ICityResponse = {
      token,
      city: {
        name: city.name,
      },
    }

    return tokenreturn
  }
}
