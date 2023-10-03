import { NextFunction, Request, Response, Router } from 'express'
import fs from 'node:fs/promises'
import nodepath from 'node:path'
import { Directory } from '../schemas/directory.schema.js'
import type { Content } from '../types/index.js'
import { pathParser } from '../utils/pathParser.js'

export const apiRouter = Router()
const router = Router()

router.get(
  '/content/*',
  async (req: Request, res: Response, next: NextFunction) => {
    const params = req.params[0]
    const path = pathParser(params)
    const content: Content = {
      files: [],
      directories: [],
    }

    try {
      const storage = await fs.opendir(path)

      for await (const dirent of storage) {
        if (dirent.isDirectory()) {
          content.directories.push(dirent.name)
        } else {
          content.files.push(dirent.name)
        }
      }

      return res.json(content)
    } catch (error) {
      return next(error)
    }
  }
)

router.post(
  '/content/*',
  async (req: Request, res: Response, next: NextFunction) => {
    const params = req.params[0]
    const path = pathParser(params)

    try {
      const { name } = Directory.parse(req.body)
      const newPath = path.concat(name)

      await fs.mkdir(newPath)

      return res.status(201).json({
        statusCode: 201,
        path: newPath,
      })
    } catch (error) {
      return next(error)
    }
  }
)

router.patch(
  '/content/*',
  async (req: Request, res: Response, next: NextFunction) => {
    const params = req.params[0]
    const path = pathParser(params)

    try {
      const { name } = Directory.parse(req.body)
      const newPath = nodepath.dirname(path).concat('/' + name)

      await fs.rename(path, newPath)

      return res.json({
        statusCode: 200,
        path: newPath,
      })
    } catch (error) {
      return next(error)
    }
  }
)

apiRouter.use('/api', router)
