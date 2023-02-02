import { PrismaClient, Prisma } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient();
const server = express();

server.use(express.json());

server.post(`/register`, async (req, res) => {
    const { login, password, email, phone } = req.body

    const clients = await prisma.client.findMany();

    const result = await prisma.client.create({
      data: {
        login,
        password,
        email,
        phone
      },
    })
    res.json(result)
  })

