export type Subject = {
  name: string;
  credits?: number;
};

export type School = {
  institution: string;
  degree: string;
  image: string; 
  subjects: Subject[];
};

export type Course = {
  title: string;
  issuer?: string;
  image: string; 
};

export type EducationContent = {
  educationLabel: string;
  schools: School[];
  viewSubjects: string;
  hideSubjects: string;
  searchPlaceholder: string;
  noResults: string;
  coursesLabel: string;
  courses: Course[];
  comingSoon: string;
  sololearnLabel: string;
  sololearnName: string;
  sololearnUrl: string;
  udemyUrl?: string;
  udemyName?: string;
};

const iteslcSubjects: Subject[] = [
  { name: "Cálculo Diferencial" },
  { name: "Cálculo Integral" },
  { name: "Cálculo Vectorial" },
  { name: "Álgebra Lineal" },
  { name: "Física General" },
  { name: "Química General" },
  { name: "Fundamentos de Programación" },
  { name: "Programación Orientada a Objetos" },
  { name: "Contabilidad y Costos" },
  { name: "Estructura de Datos y Algoritmos" },
  { name: "Sistemas Operativos" },
  { name: "Taller de Sistemas Operativos" },
  { name: "Bases de Datos" },
  { name: "Bases de Datos Avanzadas" },
  { name: "Taller de Bases de Datos" },
  { name: "Fundamentos de Telecomunicaciones" },
  { name: "Redes de Computadoras" },
  { name: "Arquitectura de Computadoras" },
  { name: "Interfaces" },
  { name: "Ingeniería de Software" },
  { name: "Desarrollo Web" },
  { name: "Desarrollo Móvil" },
  { name: "Graficación" },
  { name: "Lenguajes y Autómatas" },
  { name: "Inteligencia Artificial" },
  { name: "Programación Lógica" },
  { name: "Administración de Proyectos de Software" },
  { name: "Taller de Investigación I" },
  { name: "Taller de Investigación II" },
];

const udgSubjects: Subject[] = [
  { name: "Conceptualización de la administración de proyectos", credits: 10 },
  { name: "Conceptualización de sistemas de información", credits: 8 },
  { name: "Contextualización de las tecnologías de información y la comunicación", credits: 8 },
  { name: "Desarrollo del pensamiento computacional", credits: 8 },
  { name: "Estructuración de datos", credits: 10 },
  { name: "Fundamentos de elementos multimedia", credits: 8 },
  { name: "Gestión de infraestructura informática", credits: 8 },
  { name: "Implantación de proyectos de tecnologías e información", credits: 8 },
  { name: "Ingeniería de software", credits: 10 },
  { name: "Inglés", credits: 8 },
  { name: "Problematización de la sociedad de la información", credits: 10 },
  { name: "Programación estructurada", credits: 10 },
  { name: "Programación orientada a objetos", credits: 10 },
  { name: "Diseño e implementación de redes", credits: 10 },
  { name: "Análisis de información y minería de datos para la toma de decisiones", credits: 10 },
  { name: "Animación digital", credits: 10 },
  { name: "Construcción de interfaces gráficas", credits: 10 },
  { name: "Diagnóstico de necesidades de tecnologías de información y comunicación", credits: 8 },
  { name: "Diseño de aplicaciones", credits: 8 },
  { name: "Diseño de arquitectura de sistemas de información", credits: 8 },
  { name: "Diseño de interfaces de interacción humano-computadora", credits: 8 },
  { name: "Diseño e implementación de bases de datos", credits: 10 },
  { name: "Diseño de proyectos de cableado estructurado", credits: 10 },
  { name: "Diseño, desarrollo e integración de aplicaciones web", credits: 10 },
  { name: "Gestión de riesgos de sistemas", credits: 8 },
  { name: "Gestión de seguridad informática", credits: 10 },
  { name: "Integración y evaluación de sistemas de información", credits: 8 },
  { name: "Mantenimiento de sistemas de información", credits: 8 },
  { name: "Producción de multimedia digital", credits: 10 },
  { name: "Web dinámica", credits: 8 },
  { name: "Programación por integración de componentes", credits: 10 },
  { name: "Proyecto I", credits: 12 },
  { name: "Proyecto II", credits: 12 },
  { name: "Proyecto III", credits: 12 },
  { name: "Proyecto IV", credits: 12 },
  { name: "Proyecto V", credits: 12 },
  { name: "Proyecto VI", credits: 12 },
  { name: "Proyecto VII", credits: 12 },
  { name: "Proyecto VIII", credits: 12 },
  { name: "Laboratorio I", credits: 7 },
  { name: "Laboratorio II", credits: 7 },
  { name: "Laboratorio III", credits: 7 },
  { name: "Laboratorio IV", credits: 7 },
  { name: "Seminario I", credits: 7 },
  { name: "Seminario II", credits: 7 },
  { name: "Seminario III", credits: 7 },
  { name: "Seminario IV", credits: 7 },
  { name: "Taller I", credits: 7 },
  { name: "Taller II", credits: 7 },
  { name: "Taller III", credits: 7 },
  { name: "Taller IV", credits: 7 },
];
const iteslcSubjectsEn: Subject[] = [
  { name: "Differential Calculus" },
  { name: "Integral Calculus" },
  { name: "Vector Calculus" },
  { name: "Linear Algebra" },
  { name: "General Physics" },
  { name: "General Chemistry" },
  { name: "Programming Fundamentals" },
  { name: "Object-Oriented Programming" },
  { name: "Accounting and Costs" },
  { name: "Data Structures and Algorithms" },
  { name: "Operating Systems" },
  { name: "Operating Systems Lab" },
  { name: "Databases" },
  { name: "Advanced Databases" },
  { name: "Databases Lab" },
  { name: "Telecommunications Fundamentals" },
  { name: "Computer Networks" },
  { name: "Computer Architecture" },
  { name: "Interfaces" },
  { name: "Software Engineering" },
  { name: "Web Development" },
  { name: "Mobile Development" },
  { name: "Computer Graphics" },
  { name: "Languages and Automata" },
  { name: "Artificial Intelligence" },
  { name: "Logic Programming" },
  { name: "Software Project Management" },
  { name: "Research Seminar I" },
  { name: "Research Seminar II" },
];

const udgSubjectsEn: Subject[] = [
  { name: "Project Management Concepts", credits: 10 },
  { name: "Information Systems Concepts", credits: 8 },
  { name: "Information Technology and Communication Context", credits: 8 },
  { name: "Computational Thinking Development", credits: 8 },
  { name: "Data Structuring", credits: 10 },
  { name: "Multimedia Fundamentals", credits: 8 },
  { name: "IT Infrastructure Management", credits: 8 },
  { name: "IT Project Implementation", credits: 8 },
  { name: "Software Engineering", credits: 10 },
  { name: "English", credits: 8 },
  { name: "Information Society Analysis", credits: 10 },
  { name: "Structured Programming", credits: 10 },
  { name: "Object-Oriented Programming", credits: 10 },
  { name: "Network Design and Implementation", credits: 10 },
  { name: "Data Mining and Analysis for Decision Making", credits: 10 },
  { name: "Digital Animation", credits: 10 },
  { name: "Graphic Interface Construction", credits: 10 },
  { name: "IT Needs Diagnosis", credits: 8 },
  { name: "Application Design", credits: 8 },
  { name: "Information Systems Architecture Design", credits: 8 },
  { name: "Human-Computer Interaction Design", credits: 8 },
  { name: "Database Design and Implementation", credits: 10 },
  { name: "Structured Cabling Project Design", credits: 10 },
  { name: "Web Application Design, Development and Integration", credits: 10 },
  { name: "Systems Risk Management", credits: 8 },
  { name: "Information Security Management", credits: 10 },
  { name: "Information Systems Integration and Evaluation", credits: 8 },
  { name: "Information Systems Maintenance", credits: 8 },
  { name: "Digital Multimedia Production", credits: 10 },
  { name: "Dynamic Web", credits: 8 },
  { name: "Component-Based Programming", credits: 10 },
  { name: "Project I", credits: 12 },
  { name: "Project II", credits: 12 },
  { name: "Project III", credits: 12 },
  { name: "Project IV", credits: 12 },
  { name: "Project V", credits: 12 },
  { name: "Project VI", credits: 12 },
  { name: "Project VII", credits: 12 },
  { name: "Project VIII", credits: 12 },
  { name: "Lab I", credits: 7 },
  { name: "Lab II", credits: 7 },
  { name: "Lab III", credits: 7 },
  { name: "Lab IV", credits: 7 },
  { name: "Seminar I", credits: 7 },
  { name: "Seminar II", credits: 7 },
  { name: "Seminar III", credits: 7 },
  { name: "Seminar IV", credits: 7 },
  { name: "Workshop I", credits: 7 },
  { name: "Workshop II", credits: 7 },
  { name: "Workshop III", credits: 7 },
  { name: "Workshop IV", credits: 7 },
];



export const education: Record<"en" | "es", EducationContent> = {
  en: {
    educationLabel: "Education",
    schools: [
      {
        institution: "Instituto Tecnológico de Estudios Superiores de Los Cabos",
        degree: "Systems Engineering",
        image: "/schools/iteslc.png",
        subjects: iteslcSubjectsEn,
      },
      {
        institution: "Universidad de Guadalajara",
        degree: "B.Sc. in Information Technology",
        image: "/schools/udg.png",
        subjects: udgSubjectsEn,
      },
    ],
    viewSubjects: "View subjects",
    hideSubjects: "Hide subjects",
    searchPlaceholder: "Search a subject…",
    noResults: "No subjects match your search.",
    coursesLabel: "Certifications & Courses",
    courses: [
      { title: "AWS Cloud Practitioner", image: "/certificates/aws-cloud-practitioner.png" },
    ],
    comingSoon: "More on the way.",
    sololearnLabel: "Also learning on",
    sololearnName: "SoloLearn",
    sololearnUrl: "https://www.sololearn.com/es/profile/16928725",
  },
  es: {
    educationLabel: "Educación",
    schools: [
      {
        institution: "Instituto Tecnológico de Estudios Superiores de Los Cabos",
        degree: "Ingeniería en Sistemas",
        image: "/schools/iteslc.jpg",
        subjects: iteslcSubjects,
      },
      {
        institution: "Universidad de Guadalajara",
        degree: "Licenciatura en Tecnologías de la Información",
        image: "/schools/udg.jpg",
        subjects: udgSubjects,
      },
    ],
    viewSubjects: "Ver materias",
    hideSubjects: "Ocultar materias",
    searchPlaceholder: "Buscar una materia…",
    noResults: "Ninguna materia coincide con tu búsqueda.",
    coursesLabel: "Certificaciones y Cursos",
    courses: [
      { title: "AWS Cloud Practitioner", image: "/certificates/aws-cloud-practitioner.jpg" },
    ],
    comingSoon: "Vienen más en camino.",
    sololearnLabel: "También aprendiendo en",
    sololearnName: "SoloLearn",
    sololearnUrl: "https://www.sololearn.com/es/profile/16928725",
  },
};