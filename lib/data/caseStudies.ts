export type CaseStudyContent = {
  category: string;
  title: string;
  tagline: string;
  summary: string;
  live?: string;
  github: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  integrations: string;
  challenges: string;
  learned: string;
  technology: { group: string; items: string[] }[];
};

export const caseStudies: Record<"en" | "es", Record<"cabo101" | "cabo-bay", CaseStudyContent>> = {
  en: {
    cabo101: {
      category: "Web Application",
      title: "Cabo101",
      tagline: "Modern full-stack architecture",
      summary: "A full-stack booking platform for transportation and tourism services in Los Cabos — frontend, backend, database, payments and third-party integrations built as one cohesive system.",
      live: "https://cabo101.com",
      github: "https://github.com/EdgarVenegasDev",
      overview: "Cabo101 handles reservations for transportation and tourism services end to end: browsing availability, booking, paying, and getting confirmation — all in one platform instead of phone calls and spreadsheets.",
      problem: "The business ran on manual booking: phone calls, WhatsApp messages, and a spreadsheet to track availability. It didn't scale, and double-bookings were common.",
      solution: "A self-serve platform where customers see real-time availability, pay online, and receive automatic confirmation — while the business gets a dashboard to manage everything without touching a spreadsheet.",
      architecture: ["Next.js frontend", "API routes / backend", "Prisma ORM", "MariaDB"],
      integrations: "Mercado Pago handles payments end to end. Google Maps APIs power location selection and route previews. Automated emails confirm bookings and send receipts, with PDFs generated server-side.",
      challenges: "Keeping availability consistent under concurrent bookings required careful transaction handling at the database level, not just UI-side checks. Payment webhooks also needed to be idempotent — Mercado Pago can retry notifications, and double-processing a payment would have been a real problem.",
      learned: "This project pushed me past building interfaces into owning a full system: data integrity, payment reliability, and the operational details that only show up once real money and real customers are involved.",
      technology: [
        { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
        { group: "Backend", items: ["Node.js", "API Routes", "Prisma"] },
        { group: "Data", items: ["MariaDB"] },
        { group: "Integrations", items: ["Mercado Pago", "Google Maps APIs", "Email", "PDF generation"] },
        { group: "Infra", items: ["Docker", "GitHub Actions", "CI/CD"] },
      ],
    },
    "cabo-bay": {
      category: "Real Estate Platform",
      title: "Cabo Bay",
      tagline: "Server-side architecture",
      summary: "A traditional server-side web application built for a real transportation business in Los Cabos — reservations, gallery and admin, handled the way the web has worked for decades.",
      github: "https://github.com/EdgarVenegasDev",
      overview: "Cabo Bay is a PHP application for a transportation business: a public site for browsing and booking, and an admin panel to manage reservations and content.",
      problem: "The business needed a real web presence and a way to take reservations online, without the overhead of a full JavaScript stack — reliability and simplicity mattered more than trendy tooling.",
      solution: "A classic server-rendered PHP app: pages generated on request, MySQL as the source of truth, and an admin area to manage bookings and gallery content directly.",
      architecture: ["PHP (server-rendered)", "Apache + .htaccess routing", "MySQL"],
      integrations: "No external payment processor — reservations are confirmed manually by the business through the admin panel, matching how the client actually operates.",
      challenges: "Structuring routes and includes cleanly in plain PHP, without a framework, takes discipline — it's easy for a codebase like this to turn into spaghetti if you're not deliberate about separating concerns.",
      learned: "Building this reinforced that not every problem needs a modern framework. Understanding how the web works underneath — requests, sessions, server-rendered HTML — makes me a better engineer even when I'm back in Next.js.",
      technology: [
        { group: "Server", items: ["PHP", "Apache", ".htaccess"] },
        { group: "Data", items: ["MySQL"] },
        { group: "Frontend", items: ["JavaScript", "Tailwind CSS", "HTML", "CSS"] },
      ],
    },
  },
  es: {
    cabo101: {
      category: "Aplicación Web",
      title: "Cabo101",
      tagline: "Arquitectura full-stack moderna",
      summary: "Una plataforma de reservas para servicios de transporte y turismo en Los Cabos — frontend, backend, base de datos, pagos e integraciones externas, construidos como un solo sistema.",
      live: "https://cabo101.com",
      github: "https://github.com/EdgarVenegasDev",
      overview: "Cabo101 maneja reservaciones de transporte y turismo de principio a fin: ver disponibilidad, reservar, pagar y recibir confirmación — todo en una plataforma en vez de llamadas telefónicas y hojas de cálculo.",
      problem: "El negocio operaba con reservas manuales: llamadas, mensajes de WhatsApp y una hoja de cálculo para llevar la disponibilidad. No escalaba, y los dobles bookings eran comunes.",
      solution: "Una plataforma de autoservicio donde el cliente ve disponibilidad en tiempo real, paga en línea y recibe confirmación automática — mientras el negocio obtiene un panel para manejar todo sin tocar una hoja de cálculo.",
      architecture: ["Frontend en Next.js", "API routes / backend", "Prisma ORM", "MariaDB"],
      integrations: "Mercado Pago maneja los pagos de principio a fin. Las APIs de Google Maps permiten seleccionar ubicaciones y previsualizar rutas. Correos automáticos confirman reservas y envían recibos, con PDFs generados desde el servidor.",
      challenges: "Mantener la disponibilidad consistente bajo reservas simultáneas requirió manejar transacciones cuidadosamente a nivel de base de datos, no solo validaciones en el frontend. Los webhooks de pago también tenían que ser idempotentes — Mercado Pago puede reintentar notificaciones, y procesar un pago dos veces hubiera sido un problema real.",
      learned: "Este proyecto me llevó más allá de construir interfaces hacia ser responsable de un sistema completo: integridad de datos, confiabilidad de pagos, y los detalles operativos que solo aparecen cuando hay dinero y clientes reales de por medio.",
      technology: [
        { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
        { group: "Backend", items: ["Node.js", "API Routes", "Prisma"] },
        { group: "Datos", items: ["MariaDB"] },
        { group: "Integraciones", items: ["Mercado Pago", "Google Maps APIs", "Email", "Generación de PDF"] },
        { group: "Infraestructura", items: ["Docker", "GitHub Actions", "CI/CD"] },
      ],
    },
    "cabo-bay": {
      category: "Plataforma Inmobiliaria",
      title: "Cabo Bay",
      tagline: "Arquitectura server-side",
      summary: "Una aplicación web tradicional del lado del servidor, construida para un negocio real de transporte en Los Cabos — reservaciones, galería y administración, tal como ha funcionado la web durante décadas.",
      github: "https://github.com/EdgarVenegasDev",
      overview: "Cabo Bay es una aplicación en PHP para un negocio de transporte: un sitio público para ver y reservar, y un panel de administración para manejar reservaciones y contenido.",
      problem: "El negocio necesitaba presencia web real y una forma de tomar reservaciones en línea, sin el peso de un stack completo en JavaScript — la confiabilidad y simplicidad importaban más que herramientas de moda.",
      solution: "Una app clásica renderizada del lado del servidor en PHP: páginas generadas por petición, MySQL como fuente de verdad, y un área de administración para manejar reservaciones y galería directamente.",
      architecture: ["PHP (renderizado en servidor)", "Apache + ruteo con .htaccess", "MySQL"],
      integrations: "Sin procesador de pagos externo — las reservaciones se confirman manualmente por el negocio desde el panel de administración, tal como opera el cliente en realidad.",
      challenges: "Estructurar rutas e includes de forma limpia en PHP puro, sin framework, requiere disciplina — es fácil que un código así se vuelva espagueti si no separas responsabilidades a propósito.",
      learned: "Construir esto reforzó que no todo problema necesita un framework moderno. Entender cómo funciona la web por debajo — peticiones, sesiones, HTML renderizado en servidor — me hace mejor ingeniero incluso cuando regreso a Next.js.",
      technology: [
        { group: "Servidor", items: ["PHP", "Apache", ".htaccess"] },
        { group: "Datos", items: ["MySQL"] },
        { group: "Frontend", items: ["JavaScript", "Tailwind CSS", "HTML", "CSS"] },
      ],
    },
  },
};