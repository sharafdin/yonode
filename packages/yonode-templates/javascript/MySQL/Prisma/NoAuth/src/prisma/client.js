import { PrismaClient } from "@prisma/client";

let prisma

// check if PrismaClient is not on globalThis object
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

export default prisma;