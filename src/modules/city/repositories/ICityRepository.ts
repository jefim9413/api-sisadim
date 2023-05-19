import { City, Prisma } from '@prisma/client'
export interface ICityRepository {
  create(data: Prisma.CityCreateManyInput): Promise<City>
  findByCity(name: string): Promise<City>
  findById(id: string): Promise<City>
}
