import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export function getPrisma() {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
  }

  const isLocalDatabase =
  connectionString.includes("localhost") ||
  connectionString.includes("127.0.0.1");

  const adapter = new PrismaPg({
  connectionString,
  ...(isLocalDatabase
    ? {}
    : {
        ssl: {
          rejectUnauthorized: false,
        },
      }),
});

  const prisma = new PrismaClient({ adapter });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
  }

  return prisma;
}