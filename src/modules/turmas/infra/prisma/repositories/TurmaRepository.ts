import { Prisma, Turma } from '@prisma/client'
import { ITurmaRepository } from '../../../repositories/ITurmaRepository'
import { prisma } from '../../../../../database/prisma'

export class TurmaRepository implements ITurmaRepository {
  async create(data: Prisma.TurmaCreateManyInput): Promise<Turma> {
    const turma = await prisma.turma.create({
      data,
    })

    return turma
  }

  async findById(id: string): Promise<Turma> {
    const turma = await prisma.turma.findFirst({ where: { id } })
    return turma
  }

  async findAll(institution_id: string): Promise<Turma[]> {
    const turmas = await prisma.turma.findMany({
      where: {
        institution_id,
      },
    })

    return turmas
  }
}
