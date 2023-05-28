import { General, Prisma } from '@prisma/client'

export interface IGeneralRepository {
  create(data: Prisma.GeneralCreateManyInput): Promise<General>
  findById(id: string): Promise<General | null>
  findAll(city_id: string): Promise<General[]>
}
