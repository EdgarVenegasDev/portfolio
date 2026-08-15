import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.project.upsert({
    where: {
      slug: "cabo101",
    },
    update: {
      title: "Cabo101",
      description:
        "Full-stack booking platform for transportation and tourism services in Los Cabos, integrating reservations, payments, availability, maps, email notifications and server-side PDF generation.",
      githubUrl: "https://github.com/EdgarVenegasDev",
      liveUrl: "https://cabo101.com",
      technologies:
        "Next.js, React, TypeScript, Node.js, Prisma, MariaDB, Mercado Pago, Google Maps API, Docker, GitHub Actions",
    },
    create: {
      slug: "cabo101",
      title: "Cabo101",
      description:
        "Full-stack booking platform for transportation and tourism services in Los Cabos, integrating reservations, payments, availability, maps, email notifications and server-side PDF generation.",
      githubUrl: "https://github.com/EdgarVenegasDev",
      liveUrl: "https://cabo101.com",
      technologies:
        "Next.js, React, TypeScript, Node.js, Prisma, MariaDB, Mercado Pago, Google Maps API, Docker, GitHub Actions",
    },
  });

  await prisma.project.upsert({
    where: {
      slug: "cabo-bay",
    },
    update: {
      title: "Cabo Bay",
      description:
        "Server-rendered PHP application for a transportation business, featuring online reservations, an administrative panel, gallery management and MySQL persistence.",
      githubUrl: "https://github.com/EdgarVenegasDev",
      liveUrl: null,
      technologies:
        "PHP, Apache, MySQL, JavaScript, HTML, CSS, Tailwind CSS",
    },
    create: {
      slug: "cabo-bay",
      title: "Cabo Bay",
      description:
        "Server-rendered PHP application for a transportation business, featuring online reservations, an administrative panel, gallery management and MySQL persistence.",
      githubUrl: "https://github.com/EdgarVenegasDev",
      liveUrl: null,
      technologies:
        "PHP, Apache, MySQL, JavaScript, HTML, CSS, Tailwind CSS",
    },
  });

  console.log("Projects seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });