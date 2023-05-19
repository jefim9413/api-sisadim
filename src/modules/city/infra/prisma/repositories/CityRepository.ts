import { Prisma, City } from '@prisma/client'
import { ICityRepository } from '../../../repositories/ICityRepository'
import { prisma } from '../../../../../database/prisma'

export class CityRepository implements ICityRepository {
  async create(data: Prisma.CityCreateManyInput): Promise<City> {
    const city = await prisma.city.create({
      data,
    })
    return city
  }

  async findByCity(name: string): Promise<City> {
    const city = await prisma.city.findFirst({ where: { name } })
    return city
  }

  async findById(id: string): Promise<City> {
    const city = await prisma.city.findFirst({ where: { id } })
    return city
  }
}
