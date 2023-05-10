import { Prisma, City } from '@prisma/client'
import { ICityRepository } from '../../../repositories/ICityRepository'
import { prisma } from '../../../../../database/prisma'

export class CityRepository implements ICityRepository {
  async create(data: Prisma.CityCreateInput): Promise<City> {
    const city = await prisma.city.create({
      data,
    })
    return city
  }

  async findByCity(name: string): Promise<City[] | null> {
    const city = await prisma.city.findMany({ where: { name } })

    return city
  }
}
