import { PrismaClient } from '@prisma/client';

type Context = {
  prisma: PrismaClient;
};

const prisma = new PrismaClient();

function createContext() {
  const context: Context = { prisma };
  return context;
}

export { Context, createContext };
