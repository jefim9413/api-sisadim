import { Prisma, Turma } from '@prisma/client'

export interface ITurmaRepository {
  create(data: Prisma.TurmaCreateManyInput): Promise<Turma>
  findById(id: string): Promise<Turma>
  findAll(institution_id: string): Promise<Turma[]>
}
