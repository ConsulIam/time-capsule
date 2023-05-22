import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(jwt, {
  secret: 'spacetime',
})

app.register(cors, {
  origin: true,
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 11337,
  })
  .then(() => {
    console.log(' listening on server http://localhost:11337')
  })
