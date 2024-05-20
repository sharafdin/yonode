import { PrismaClient } from "@prisma/client";
import { nodeEnv } from "../src/config/initailConfig.js";

let prisma;

if (nodeEnv === "production") {
  prisma = new PrismaClient();
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

export default prisma;
