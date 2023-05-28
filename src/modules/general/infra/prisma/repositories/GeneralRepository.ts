import { Prisma, General } from '@prisma/client'
import { IGeneralRepository } from '../../../repositories/IGeneralRepostitory'
import { prisma } from '../../../../../database/prisma'

export class GeneralRepository implements IGeneralRepository {
  async create(data: Prisma.GeneralCreateManyInput): Promise<General> {
    const general = await prisma.general.create({ data })

    return general
  }

  async findById(id: string): Promise<General> {
    const general = await prisma.general.findUnique({
      where: {
        id,
      },
    })

    return general
  }

  async findAll(city_id: string): Promise<General[]> {
    const general = await prisma.general.findMany({ where: { city_id } })

    return general
  }
}
