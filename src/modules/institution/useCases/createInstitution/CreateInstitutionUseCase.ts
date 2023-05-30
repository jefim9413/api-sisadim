import { inject, injectable } from 'tsyringe'
import { IInstitutionRepository } from '../../repositories/IInstitutionRepository'

interface IInstituicaoResquest {
  name: string
  city_id: string
  database: string
}

@injectable()
export class CreateInstitutionUseCase {
  constructor(
    @inject('InstitutionRepository')
    private institutionRepository: IInstitutionRepository,
  ) {}

  async execute({ name, city_id, database }: IInstituicaoResquest) {
    const institution = await this.institutionRepository.create({
      name,
      city_id,
      database,
    })
    return institution
  }
}
