import { inject, injectable } from 'tsyringe'
import { ITurmaRepository } from '../../repositories/ITurmaRepository'

@injectable()
export class ListTurmaUseCase {
  constructor(
    @inject('TurmaRepository')
    private turmaRepository: ITurmaRepository,
  ) {}

  async execute(institution_id: string) {
    const turmas = await this.turmaRepository.findAll(institution_id)
    return turmas
  }
}
