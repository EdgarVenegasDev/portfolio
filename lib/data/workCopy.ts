export type WorkCopyEntry = {
  category: string;
  tagline: string;
  story: string;
};

export const workCopy: Record<"en" | "es", Record<string, WorkCopyEntry>> = {
  en: {
    "cabo-bay": {
      category: "PHP / MySQL",
      tagline: "Server-side architecture",
      story: "A traditional server-side web application built for a real transportation business in Los Cabos — reservations, gallery, and admin, all handled the way the web has worked for decades.",
    },
    cabo101: {
      category: "Next.js / React / Node.js",
      tagline: "Modern full-stack architecture",
      story: "A full-stack booking platform for transportation and tourism services — frontend, backend, database, payments and third-party integrations, built as one cohesive system.",
    },
    portfolio: {
      category: "Full Stack",
      tagline: "Production-ready application",
      story: "This portfolio itself: a full-stack app with a real database, an API layer, containerized deployment and CI/CD — built to demonstrate the same engineering practices used in production software.",
    },
  },
  es: {
    "cabo-bay": {
      category: "PHP / MySQL",
      tagline: "Arquitectura server-side",
      story: "Una aplicación web tradicional del lado del servidor, construida para un negocio real de transporte en Los Cabos — reservaciones, galería y administración, tal como ha funcionado la web durante décadas.",
    },
    cabo101: {
      category: "Next.js / React / Node.js",
      tagline: "Arquitectura full-stack moderna",
      story: "Una plataforma de reservas para servicios de transporte y turismo — frontend, backend, base de datos, pagos e integraciones externas, construidos como un solo sistema.",
    },
    portfolio: {
      category: "Full Stack",
      tagline: "Aplicación lista para producción",
      story: "Este mismo portafolio: una app full-stack con base de datos real, una capa de API, despliegue en contenedores y CI/CD — construido para demostrar las mismas prácticas de ingeniería que se usan en software de producción.",
    },
  },
};


export const workOrder = ["cabo-bay", "cabo101", "portfolio"];