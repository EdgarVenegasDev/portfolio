export type PortfolioContent = {
  category: string;
  title: string;
  tagline: string;
  summary: string;
  live: string;
  github: string;
  overview: string;
  challengeIntro: string;
  goals: { title: string; description: string }[];
  requestFlow: string[];
  deployFlow: string[];
  techStack: { group: string; items: string[] }[];
  databaseText: string;
  databaseSchema: string;
  apiText: string;
  apiExample: string;
  deploymentText: string;
  deploymentFlow: string[];
  ciChecks: string[];
  securityText: string;
  securityBefore: string[];
  securityAfter: string[];
  securityMeasures: string[];
  learned: string;
  result: string;
};

export const portfolioCaseStudy: Record<"en" | "es", PortfolioContent> = {
  en: {
    category: "Full Stack",
    title: "Personal Portfolio",
    tagline: "Production-ready developer portfolio",
    summary: "A production-ready developer portfolio built with Next.js, TypeScript and PostgreSQL, featuring a dynamic project API, Prisma ORM and automated Docker deployment on AWS.",
    live: "https://edgarabrahamportfolio.com",
    github: "https://github.com/EdgarVenegasDev/portfolio",
    overview: "This portfolio was designed and developed as a production-ready platform to showcase my work, technical experience and software projects. Instead of building a purely static website, I wanted it to demonstrate the same engineering practices used in real-world applications: a structured frontend, persistent data, an API layer, containerization, automated CI/CD and cloud deployment.",
    challengeIntro: "The initial version was primarily static content. As the project evolved, I wanted the portfolio itself to demonstrate backend and infrastructure skills rather than only frontend development — a system where project information lives in a relational database and is exposed through an API, while the frontend stays simple and fast.",
    goals: [
      { title: "Dynamic project management", description: "Store project information in PostgreSQL instead of hardcoded data." },
      { title: "Production architecture", description: "Separate the application, database and reverse proxy into clearly defined layers." },
      { title: "Automated deployment", description: "Build and deploy Docker images automatically through GitHub Actions." },
    ],
    requestFlow: ["Browser", "Nginx (reverse proxy)", "Next.js App", "Prisma", "PostgreSQL (RDS)"],
    deployFlow: ["GitHub", "GitHub Actions", "Docker Build", "GHCR", "AWS EC2"],
    techStack: [
      { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { group: "Backend", items: ["Next.js API Routes", "Prisma", "PostgreSQL"] },
      { group: "Infrastructure", items: ["Docker", "AWS EC2", "AWS RDS", "Nginx", "AWS Systems Manager"] },
      { group: "DevOps", items: ["GitHub Actions", "GitHub Container Registry", "CI/CD"] },
    ],
    databaseText: "Project information is persisted in PostgreSQL and accessed through Prisma ORM. The model provides a structured representation of each portfolio project while keeping presentation logic separate from persistent data.",
    databaseSchema: `model Project {
  id           Int      @id @default(autoincrement())
  slug         String   @unique
  title        String
  description  String
  githubUrl    String?
  liveUrl      String?
  technologies String
  createdAt    DateTime @default(now())
}`,
    apiText: "The project listing is exposed through a server-side API route. The frontend retrieves structured project data instead of relying exclusively on hardcoded project definitions.",
    apiExample: `GET /api/projects

[
  {
    "slug": "cabo101",
    "title": "Cabo101",
    "technologies": "Next.js, React, TypeScript..."
  }
]`,
    deploymentText: "The application is containerized and deployed through an automated CI/CD pipeline triggered on every push to main.",
    deploymentFlow: ["git push", "GitHub Actions", "Docker Build", "GHCR", "AWS EC2", "Docker Container", "Nginx"],
    ciChecks: ["ESLint", "TypeScript checks", "Tests", "Production build"],
    securityText: "Administrative access to the production server was migrated from public SSH access to AWS Systems Manager Session Manager — removing the need for an open SSH port entirely.",
    securityBefore: ["Internet", "SSH :22", "EC2"],
    securityAfter: ["Internet", "HTTPS :443", "Nginx", "Application"],
    securityMeasures: ["IAM role for SSM", "AWS Systems Manager (no public SSH)", "Nginx reverse proxy", "HTTPS via Let's Encrypt", "Environment variables for credentials", "Docker restart policy"],
    learned: "Building this portfolio pushed me beyond frontend development. I had to work with relational databases, ORM configuration, Docker networking, reverse proxies, CI/CD pipelines and AWS infrastructure. One of the biggest lessons was that getting an application to work locally is only part of the problem — making it reproducible, deployable and maintainable in production requires a completely different level of engineering discipline.",
    result: "A production-ready full-stack application, not just a static site — currently live, backed by PostgreSQL on RDS, deployed through Docker and GitHub Actions, and administered without exposing SSH to the internet.",
  },
  es: {
    category: "Full Stack",
    title: "Portafolio Personal",
    tagline: "Portafolio de desarrollador listo para producción",
    summary: "Un portafolio de desarrollador listo para producción, construido con Next.js, TypeScript y PostgreSQL, con una API de proyectos dinámica, Prisma ORM y despliegue automatizado con Docker en AWS.",
    live: "https://edgarabrahamportfolio.com",
    github: "https://github.com/EdgarVenegasDev/portfolio",
    overview: "Este portafolio fue diseñado y desarrollado como una plataforma lista para producción para mostrar mi trabajo, experiencia técnica y proyectos de software. En vez de construir un sitio puramente estático, quise que el portafolio demostrara las mismas prácticas de ingeniería usadas en aplicaciones reales: un frontend estructurado, datos persistentes, una capa de API, contenerización, CI/CD automatizado y despliegue en la nube.",
    challengeIntro: "La versión inicial era principalmente contenido estático. Conforme evolucionó el proyecto, quise que el portafolio mismo demostrara habilidades de backend e infraestructura, no solo frontend — un sistema donde la información de los proyectos vive en una base de datos relacional y se expone a través de una API, mientras el frontend se mantiene simple y rápido.",
    goals: [
      { title: "Gestión dinámica de proyectos", description: "Guardar la información de proyectos en PostgreSQL en vez de datos hardcodeados." },
      { title: "Arquitectura de producción", description: "Separar la aplicación, la base de datos y el proxy reverso en capas claramente definidas." },
      { title: "Despliegue automatizado", description: "Construir y desplegar imágenes de Docker automáticamente vía GitHub Actions." },
    ],
    requestFlow: ["Navegador", "Nginx (proxy reverso)", "App Next.js", "Prisma", "PostgreSQL (RDS)"],
    deployFlow: ["GitHub", "GitHub Actions", "Docker Build", "GHCR", "AWS EC2"],
    techStack: [
      { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { group: "Backend", items: ["Next.js API Routes", "Prisma", "PostgreSQL"] },
      { group: "Infraestructura", items: ["Docker", "AWS EC2", "AWS RDS", "Nginx", "AWS Systems Manager"] },
      { group: "DevOps", items: ["GitHub Actions", "GitHub Container Registry", "CI/CD"] },
    ],
    databaseText: "La información de los proyectos se persiste en PostgreSQL y se accede a través de Prisma ORM. El modelo ofrece una representación estructurada de cada proyecto, manteniendo la lógica de presentación separada de los datos persistentes.",
    databaseSchema: `model Project {
  id           Int      @id @default(autoincrement())
  slug         String   @unique
  title        String
  description  String
  githubUrl    String?
  liveUrl      String?
  technologies String
  createdAt    DateTime @default(now())
}`,
    apiText: "El listado de proyectos se expone a través de una ruta de API del lado del servidor. El frontend obtiene datos estructurados en vez de depender exclusivamente de definiciones hardcodeadas.",
    apiExample: `GET /api/projects

[
  {
    "slug": "cabo101",
    "title": "Cabo101",
    "technologies": "Next.js, React, TypeScript..."
  }
]`,
    deploymentText: "La aplicación está contenerizada y se despliega mediante un pipeline de CI/CD automatizado que se activa en cada push a main.",
    deploymentFlow: ["git push", "GitHub Actions", "Docker Build", "GHCR", "AWS EC2", "Docker Container", "Nginx"],
    ciChecks: ["ESLint", "Verificación de TypeScript", "Tests", "Build de producción"],
    securityText: "El acceso administrativo al servidor de producción se migró de SSH público a AWS Systems Manager Session Manager — eliminando por completo la necesidad de un puerto SSH abierto.",
    securityBefore: ["Internet", "SSH :22", "EC2"],
    securityAfter: ["Internet", "HTTPS :443", "Nginx", "Aplicación"],
    securityMeasures: ["Rol IAM para SSM", "AWS Systems Manager (sin SSH público)", "Proxy reverso con Nginx", "HTTPS vía Let's Encrypt", "Variables de entorno para credenciales", "Política de reinicio de Docker"],
    learned: "Construir este portafolio me llevó más allá del frontend. Tuve que trabajar con bases de datos relacionales, configuración de ORM, redes de Docker, proxies reversos, pipelines de CI/CD e infraestructura en AWS. Una de las lecciones más grandes fue que lograr que una aplicación funcione en local es solo parte del problema — hacerla reproducible, desplegable y mantenible en producción requiere un nivel de disciplina de ingeniería completamente distinto.",
    result: "Una aplicación full-stack lista para producción, no solo un sitio estático — actualmente en vivo, respaldada por PostgreSQL en RDS, desplegada vía Docker y GitHub Actions, y administrada sin exponer SSH a internet.",
  },
};