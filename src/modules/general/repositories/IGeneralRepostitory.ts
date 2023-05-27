import { General, Prisma } from '@prisma/client'

export interface IGeneralRepository {
  create(data: Prisma.GeneralCreateManyInput): Promise<General>
  findById(id: string): Promise<General>
  findAll(): Promise<General[]>
}
