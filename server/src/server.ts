import fastify from 'fastify'
import cors from '@fastify/cors'

import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes)

app
  .listen({
    port: 11337,
  })
  .then(() => {
    console.log(' listening on server http://localhost:11337')
  })
