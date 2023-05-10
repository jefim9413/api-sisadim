import 'reflect-metadata'
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import '../container'
import { router } from './routes'

export const app = express()
app.use(express.json())

app.use(router)
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      })
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    })
  },
)
