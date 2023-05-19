import { Prisma, Institution } from '@prisma/client'
import { IInstitutionRepository } from '../../../repositories/IInstitutionRepository'
import { prisma } from '../../../../../database/prisma'

export class InstitutionRepository implements IInstitutionRepository {
  findAll(city_id: string): Promise<Institution[]> {
    const institution = prisma.institution.findMany({
      where: {
        city_id,
      },
    })
    return institution
  }

  async create(data: Prisma.InstitutionCreateManyInput): Promise<Institution> {
    const institution = await prisma.institution.create({
      data,
    })
    return institution
  }

  async findById(id: string): Promise<Institution> {
    const institution = await prisma.institution.findFirst({ where: { id } })
    return institution
  }
}
