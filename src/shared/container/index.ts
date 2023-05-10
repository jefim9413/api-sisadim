import { container } from 'tsyringe'
import { CityRepository } from '../../modules/city/infra/prisma/repositories/CityRepository'
import { ICityRepository } from '../../modules/city/repositories/ICityRepository'

container.registerSingleton<ICityRepository>('CityRepository', CityRepository)
