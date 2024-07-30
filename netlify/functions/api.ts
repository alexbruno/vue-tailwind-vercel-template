import express, { Router } from 'express'
import serverless from 'serverless-http'

const app = express()
const api = Router()

app.use(express.json())

api.get('/info', async (req, res) => {
  const request = Object.keys(req)

  res.json({ request })
})

app.use('/api', api)

export const handler = serverless(app)
