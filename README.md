<div align="center">

# Edgar Abraham Gutierrez Venegas — Portfolio

### Personal Developer Portfolio

A production-ready developer portfolio built to showcase my software engineering projects, technical experience, and development skills.

Built with **Next.js, TypeScript, PostgreSQL, Prisma, Docker, and AWS**, with an automated CI/CD deployment pipeline using GitHub Actions.

<br />

[![Live Website](https://img.shields.io/badge/Live_Website-edgarabrahamportfolio.com-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://edgarabrahamportfolio.com)
[![GitHub](https://img.shields.io/badge/GitHub-EdgarVenegasDev-181717?style=for-the-badge&logo=github)](https://github.com/EdgarVenegasDev)

</div>

---

# Overview

This portfolio is a full-stack web application designed to present my professional profile, technical skills, and software development projects.

Rather than using a static project list, the portfolio uses a database-backed architecture where project information is retrieved through an API and rendered dynamically by the application.

The project also serves as a practical demonstration of modern development and deployment practices, including containerization, CI/CD, cloud infrastructure, and secure authentication between GitHub Actions and AWS.

---

# Features

## Portfolio

- Professional profile
- Technical skills
- Professional experience
- Education
- Featured projects
- Responsive design
- Mobile-friendly interface
- Project details and external links

## Project Management

Projects are stored in PostgreSQL and retrieved dynamically through the application API.

Each project can contain:

- Title
- Description
- Technologies
- GitHub repository
- Live website
- URL-friendly slug
- Creation date

## API

The application includes backend API routes for retrieving portfolio data.

Example:

```text
GET /api/projects
```

Returns the projects stored in the PostgreSQL database.

## Production Deployment

The application is containerized with Docker and deployed to Amazon EC2.

The deployment pipeline automatically:

1. Builds the application
2. Builds a Docker image
3. Publishes the image to GitHub Container Registry
4. Authenticates GitHub Actions with AWS using OIDC
5. Sends a deployment command through AWS Systems Manager
6. Pulls the latest image on EC2
7. Replaces the running container
8. Starts the new application version
9. Verifies the application and API are responding

---

# Technology Stack

| Technology | Purpose |
|------------|---------|
| Next.js | Full-stack React framework |
| React | User interface |
| TypeScript | Type-safe development |
| PostgreSQL | Relational database |
| Prisma | ORM and database access |
| Tailwind CSS | Styling and responsive UI |
| Node.js | Runtime environment |
| Docker | Application containerization |
| GitHub Actions | CI/CD automation |
| GitHub Container Registry | Docker image registry |
| AWS EC2 | Production infrastructure |
| AWS Systems Manager | Remote deployment |
| AWS IAM | Access control |
| GitHub OIDC | Secure AWS authentication |

---

# Architecture

```text
                           GitHub
                              │
                              │ Push / Merge
                              ▼
                    ┌─────────────────────┐
                    │   GitHub Actions    │
                    │       CI/CD         │
                    └──────────┬──────────┘
                               │
                               │ Build
                               ▼
                    ┌─────────────────────┐
                    │ Docker Image        │
                    │                     │
                    │ GitHub Container    │
                    │ Registry (GHCR)     │
                    └──────────┬──────────┘
                               │
                               │ OIDC
                               ▼
                    ┌─────────────────────┐
                    │      AWS IAM        │
                    │   Assume Role       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ AWS Systems Manager │
                    │     Run Command     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      AWS EC2        │
                    │                     │
                    │      Docker         │
                    │         │           │
                    │         ▼           │
                    │     Portfolio       │
                    │    127.0.0.1:3000   │
                    └──────────┬──────────┘
                               │
                               ▼
                         Nginx / HTTPS
                               │
                               ▼
                  edgarabrahamportfolio.com
```

---

# Application Architecture

```text
                         USER
                           │
                           ▼
                ┌──────────────────────┐
                │      Next.js         │
                │    Web Application   │
                └──────────┬───────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │      API Routes      │
                │                      │
                │   /api/projects      │
                └──────────┬───────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │        Prisma        │
                │         ORM          │
                └──────────┬───────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │      PostgreSQL      │
                │      Database        │
                └──────────────────────┘
```

---

# CI/CD Pipeline

The project uses GitHub Actions to automate the production deployment process.

```text
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Build Application
    │
    ├── Build Docker Image
    │
    └── Push Image to GHCR
             │
             ▼
      AWS OIDC Authentication
             │
             ▼
       AWS IAM Role
             │
             ▼
      AWS Systems Manager
             │
             ▼
           EC2
             │
             ├── Pull latest image
             ├── Stop old container
             ├── Remove old container
             ├── Start new container
             │
             └── Run health checks
```

---

# Security

The deployment architecture avoids storing long-lived AWS access keys in GitHub.

GitHub Actions authenticates with AWS using **OpenID Connect (OIDC)** and assumes a dedicated IAM role.

The deployment process uses:

- GitHub OIDC
- AWS IAM
- IAM trust policies
- AWS Systems Manager
- GitHub repository permissions
- Environment variables for application configuration

The EC2 environment stores production configuration separately from the Docker image.

---

# Database

The application uses **PostgreSQL** as its relational database.

Prisma is used as the ORM and provides:

- Database schema management
- Type-safe database queries
- Migrations
- Seed data
- Application data access

Example project data includes:

```text
Project
├── id
├── slug
├── title
├── description
├── githubUrl
├── liveUrl
├── technologies
└── createdAt
```

---

# Project Structure

```text
portfolio/
│
├── app/
│   ├── api/
│   │   └── projects/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│
├── lib/
│   └── prisma.ts
│
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│   └── ...
│
├── generated/
│   └── prisma/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── Dockerfile
├── docker-compose.yml
├── prisma.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# Local Development

## Requirements

- Node.js
- npm
- Docker
- PostgreSQL

## Installation

Clone the repository:

```bash
git clone https://github.com/EdgarVenegasDev/portfolio.git

cd portfolio
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

Configure the database connection:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/portfolio"
```

Start PostgreSQL with Docker if needed:

```bash
docker compose up -d
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Seed the database:

```bash
npx prisma db seed
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

# Production Deployment

Production deployment is automated through GitHub Actions.

A push or merge to the `main` branch triggers the deployment workflow.

```text
main
 │
 ▼
GitHub Actions
 │
 ├── Build
 │
 ├── Docker Image
 │
 ├── GHCR
 │
 ├── AWS OIDC
 │
 ├── IAM
 │
 └── Systems Manager
       │
       ▼
      EC2
```

The EC2 instance runs the application as a Docker container with:

```text
127.0.0.1:3000 → portfolio container
```

Nginx handles the public HTTPS endpoint.

---

# Health Checks

After deployment, the workflow verifies that the new container is functioning correctly.

### Application

```bash
curl http://127.0.0.1:3000
```

### API

```bash
curl http://127.0.0.1:3000/api/projects
```

The deployment is considered successful only when both checks complete successfully.

---

# Design & Development Goals

The project was designed with the following goals:

- Clean and responsive UI
- Maintainable React architecture
- Type-safe development
- Database-backed project management
- Secure production configuration
- Containerized deployment
- Automated CI/CD
- Secure AWS authentication
- Production health checks

---

# What I Learned

This project allowed me to strengthen my experience with:

- Next.js application architecture
- React and TypeScript
- REST API development
- PostgreSQL
- Prisma ORM
- Docker
- GitHub Actions
- GitHub Container Registry
- AWS EC2
- AWS Systems Manager
- AWS IAM
- OpenID Connect
- CI/CD pipelines
- Production deployment
- Linux server administration

---

# Live Project

🌐 **Portfolio**

https://edgarabrahamportfolio.com

💻 **GitHub**

https://github.com/EdgarVenegasDev/portfolio

---

# Author

**Edgar Abraham Gutierrez Venegas**

Junior Software Engineer · Full-Stack Developer

Los Cabos, Baja California Sur, Mexico

[LinkedIn](https://www.linkedin.com/in/edgar-abraham-gutierrez-venegas-578372304/)
