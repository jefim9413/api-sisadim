import { container } from 'tsyringe'
import { CityRepository } from '../../modules/city/infra/prisma/repositories/CityRepository'
import { ICityRepository } from '../../modules/city/repositories/ICityRepository'
import { IInstitutionRepository } from '../../modules/institution/repositories/IInstitutionRepository'
import { InstitutionRepository } from '../../modules/institution/infra/prisma/repositories/InstitutionRepository'
import { ITurmaRepository } from '../../modules/turmas/repositories/ITurmaRepository'
import { TurmaRepository } from '../../modules/turmas/infra/prisma/repositories/TurmaRepository'
import { IGeneralRepository } from '../../modules/general/repositories/IGeneralRepostitory'
import { GeneralRepository } from '../../modules/general/infra/prisma/repositories/GeneralRepository'

container.registerSingleton<ICityRepository>('CityRepository', CityRepository)

container.registerSingleton<IInstitutionRepository>(
  'InstitutionRepository',
  InstitutionRepository,
)

container.registerSingleton<ITurmaRepository>(
  'TurmaRepository',
  TurmaRepository,
)

container.registerSingleton<IGeneralRepository>(
  'GeneralRepository',
  GeneralRepository,
)
