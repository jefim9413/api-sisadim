import { inject, injectable } from 'tsyringe'
import { IInstitutionRepository } from '../../repositories/IInstitutionRepository'

@injectable()
export class ListAllInstitutionUseCase {
  constructor(
    @inject('InstitutionRepository')
    private institutionRepository: IInstitutionRepository,
  ) {}

  async execute(city_id: string) {
    const institution = await this.institutionRepository.findAll(city_id)
    return institution
  }
}
