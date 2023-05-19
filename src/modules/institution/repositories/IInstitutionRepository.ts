import { Institution, Prisma } from '@prisma/client'
export interface IInstitutionRepository {
  create(data: Prisma.InstitutionCreateManyInput): Promise<Institution>
  findById(id: string): Promise<Institution>
  findAll(city_id: string): Promise<Institution[]>
}
