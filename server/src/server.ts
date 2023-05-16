import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: 11337,
  })
  .then(() => {
    console.log(' listening on server http://localhost:11337')
  })
