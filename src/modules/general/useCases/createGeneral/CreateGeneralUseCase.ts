import { inject, injectable } from 'tsyringe'
import { IGeneralRepository } from '../../repositories/IGeneralRepostitory'

interface IGeneralRequest {
  name: string
  database: string
  city_id: string
}

@injectable()
export class CreateGeneralUseCase {
  constructor(
    @inject('GeneralRepository')
    private generalRepository: IGeneralRepository,
  ) {}

  async execute({ name, database, city_id }: IGeneralRequest) {
    const general = await this.generalRepository.create({
      name,
      database,
      city_id,
    })

    return general
  }
}
