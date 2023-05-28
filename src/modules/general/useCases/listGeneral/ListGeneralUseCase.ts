import { inject, injectable } from 'tsyringe'
import { IGeneralRepository } from '../../repositories/IGeneralRepostitory'

interface IListUseCaseRequest {
  city_id: string
}

@injectable()
export class ListGeneralUseCase {
  constructor(
    @inject('GeneralRepository')
    private generalRepository: IGeneralRepository,
  ) {}

  async execute(city_id: string) {
    const general = await this.generalRepository.findAll(city_id)

    return general
  }
}
