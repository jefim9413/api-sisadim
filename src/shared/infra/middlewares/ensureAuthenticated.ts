import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { CityRepository } from '../../../modules/city/infra/prisma/repositories/CityRepository'

interface IPlayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const autheHeard = request.headers.authorization

  if (!autheHeard) {
    throw new Error('Token missing')
  }

  const [, token] = autheHeard.split(' ')

  try {
    const { sub: city_id } = verify(
      token,
      'ac81a9ff47be796b7f2e4ccad808e14a',
    ) as IPlayload

    request.city = {
      id: city_id,
    }
    next()
  } catch {
    throw new Error('Invalid token')
  }
}
