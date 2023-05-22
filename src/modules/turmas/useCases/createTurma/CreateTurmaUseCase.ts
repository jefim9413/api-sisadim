import { inject, injectable } from 'tsyringe'
import { ITurmaRepository } from '../../repositories/ITurmaRepository'
import { IInstitutionRepository } from '../../../institution/repositories/IInstitutionRepository'

interface ICreateUseCaseRequest {
  name: string
  database: string
  institution_id: string
}

@injectable()
export class CreateTurmaUseCase {
  constructor(
    @inject('TurmaRepository')
    private turmaRepository: ITurmaRepository,
  ) {}

  async execute({ name, database, institution_id }: ICreateUseCaseRequest) {
    const turma = await this.turmaRepository.create({
      name,
      database,
      institution_id,
    })

    return turma
  }
}
