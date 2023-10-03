import cors from 'cors'
import express from 'express'
import { enoentError } from './middlewares/errors.js'
import { apiRouter } from './routes/api.router.js'

const PORT = process.env.PORT ?? 3000

const app = express()

app.disable('x-powered-by')
app.use(express.json())
app.use(cors())

app.use(apiRouter)

app.use(enoentError)

app.listen(PORT, () => {
  console.log('Server on port', PORT)
})
