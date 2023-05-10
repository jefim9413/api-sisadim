import { City, Prisma } from '@prisma/client'
export interface ICityRepository {
  create(data: Prisma.CityCreateInput): Promise<City>
  findByCity(name: string): Promise<City>
}
