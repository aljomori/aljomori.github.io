/** CV content by language - used for PDF generation */
export type CVData = {
  sections: {
    profile: string
    experience: string
    technicalSkills: string
    education: string
    references: string
    startupExperience: string
  }
  personal_info: { title: string }
  profile: { summary: string }
  experience: Array<{
    role: string
    company: string
    period: string
    responsibilities: string[]
  }>
  startup_experience: Array<{
    role: string
    company: string
    period: string
    responsibilities: string[]
  }>
  education: { degree: string; institution: string; location: string; period: string }
  references: Array<{ name: string; company: string; location: string; role: string }>
}

const experienceEN = [
  {
    role: 'Backend Engineer',
    company: 'Gala',
    period: '2024 - Present',
    responsibilities: [
      'Leading frontend development team building Telegram WebApps using TypeScript, Node.js (Express), and MongoDB',
      'Developed a domain-specific language (DSL) in Golang to define and generate metadata schemas dynamically',
      'Maintain metadata distribution system in Python',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Forte',
    period: '2022 - 2024',
    responsibilities: [
      'Designed, implemented and maintained tools and protocols for a console platform enhancing team collaboration',
      'Designed custom Micro-frontend architecture using Module Federation',
      'Used GitHub Actions and AWS Terraform to optimize development workflows',
      'Developed custom JavaScript libraries and UI component libraries',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'N3twork Inc',
    period: '2020 - 2022',
    responsibilities: [
      'Contributed to platform for managing mobile video game operations (React, Redux, RxJS, Thrift, Material UI)',
      'Built strategies for in-app notifications and targeted advertising',
      'Implemented Nx Micro-frontend architecture to unify multiple clients into one Console Platform',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'SOSAFE',
    period: '2017 - 2020',
    responsibilities: [
      'Led frontend development of real-time event monitoring platform (PWA, React, Redux)',
      'Developed SOSAFE GO (React Native hybrid mobile app)',
      'Built static sites, embedded JS widgets, and in-app notification templates',
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'BlancLabs',
    period: '2016 - 2017',
    responsibilities: [
      'Worked with remote team in Oregon',
      'Created embedded JS widgets',
      'Built car sales web app using MEAN stack',
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'Teravision',
    period: '2015 - 2016',
    responsibilities: [
      'Worked on projects using AngularJS, PHP + Drupal, and Node + Express',
      'Built CMS-based websites with Drupal',
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'CANTV',
    period: '2014 - 2015',
    responsibilities: [
      'Technical lead for HR internal system (MEAN stack)',
      'Developed information feed and appointment management system',
      'Maintained internal PHP (Yii) products',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Fundabit',
    period: '2012 - 2014',
    responsibilities: [
      'Developed educational management system for Ministry of Education',
      'Used PHP, Yii, PostgreSQL, and Pentaho',
    ],
  },
]

const experienceES = [
  {
    role: 'Ingeniero Backend',
    company: 'Gala',
    period: '2024 - Presente',
    responsibilities: [
      'Liderando equipo de desarrollo frontend construyendo WebApps de Telegram con TypeScript, Node.js (Express) y MongoDB',
      'Desarrollé un lenguaje específico de dominio (DSL) en Golang para definir y generar esquemas de metadatos dinámicamente',
      'Mantengo sistema de distribución de metadatos en Python',
    ],
  },
  {
    role: 'Ingeniero de Software',
    company: 'Forte',
    period: '2022 - 2024',
    responsibilities: [
      'Diseñé, implementé y mantuve herramientas y protocolos para una plataforma consola mejorando la colaboración del equipo',
      'Diseñé arquitectura Micro-frontend personalizada usando Module Federation',
      'Utilicé GitHub Actions y AWS Terraform para optimizar flujos de desarrollo',
      'Desarrollé librerías JavaScript personalizadas y librerías de componentes UI',
    ],
  },
  {
    role: 'Ingeniero de Software',
    company: 'N3twork Inc',
    period: '2020 - 2022',
    responsibilities: [
      'Contribuí a plataforma de gestión de operaciones de videojuegos móviles (React, Redux, RxJS, Thrift, Material UI)',
      'Construí estrategias para notificaciones in-app y publicidad dirigida',
      'Implementé arquitectura Nx Micro-frontend para unificar múltiples clientes en una Plataforma Consola',
    ],
  },
  {
    role: 'Desarrollador Frontend',
    company: 'SOSAFE',
    period: '2017 - 2020',
    responsibilities: [
      'Lideré desarrollo frontend de plataforma de monitoreo de eventos en tiempo real (PWA, React, Redux)',
      'Desarrollé SOSAFE GO (app móvil híbrida React Native)',
      'Construí sitios estáticos, widgets JS embebidos y plantillas de notificaciones in-app',
    ],
  },
  {
    role: 'Desarrollador Fullstack',
    company: 'BlancLabs',
    period: '2016 - 2017',
    responsibilities: [
      'Trabajé con equipo remoto en Oregon',
      'Creé widgets JS embebidos',
      'Construí web app de venta de autos usando MEAN stack',
    ],
  },
  {
    role: 'Desarrollador Fullstack',
    company: 'Teravision',
    period: '2015 - 2016',
    responsibilities: [
      'Trabajé en proyectos con AngularJS, PHP + Drupal y Node + Express',
      'Construí sitios web basados en CMS con Drupal',
    ],
  },
  {
    role: 'Desarrollador Fullstack',
    company: 'CANTV',
    period: '2014 - 2015',
    responsibilities: [
      'Líder técnico del sistema interno de RRHH (MEAN stack)',
      'Desarrollé sistema de feed de información y gestión de citas',
      'Mantuve productos internos en PHP (Yii)',
    ],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Fundabit',
    period: '2012 - 2014',
    responsibilities: [
      'Desarrollé sistema de gestión educativa para el Ministerio de Educación',
      'Utilicé PHP, Yii, PostgreSQL y Pentaho',
    ],
  },
]

const startupEN = [
  {
    role: 'Co-Founder',
    company: 'SIMPLIDECO',
    period: '2022 - 2023',
    responsibilities: [
      'Part of Startup Chile acceleration program',
      'Led team of 4 developers',
      'Built microservices platform using Serverless on AWS',
      'Used DynamoDB and Elasticsearch',
      'Backend mainly Node.js and Python',
      'Frontend in React, Hooks, TypeScript',
      'Developed custom 2D moodboard editor',
    ],
  },
]

const startupES = [
  {
    role: 'Co-Fundador',
    company: 'SIMPLIDECO',
    period: '2022 - 2023',
    responsibilities: [
      'Parte del programa de aceleración Startup Chile',
      'Lideré equipo de 4 desarrolladores',
      'Construí plataforma de microservicios usando Serverless en AWS',
      'Usé DynamoDB y Elasticsearch',
      'Backend principalmente Node.js y Python',
      'Frontend en React, Hooks, TypeScript',
      'Desarrollé editor 2D personalizado para moodboards',
    ],
  },
]

const referencesBase = [
  { name: 'Akshay Vyas', company: 'Gala Games', location: 'San Bruno, USA' },
  { name: 'Joaquin Del Prado', company: 'Gala Games', location: 'Concepcion, Chile' },
  { name: 'Simon Paredes', company: 'Forte Inc.', location: 'Santiago, Chile' },
  { name: 'Julio Espinoza', company: 'N3twork Inc.', location: 'Santiago, Chile' },
  { name: 'Jean Carlos Garcia Castro', company: 'SOSAFE', location: 'Santiago, Chile' },
  { name: 'Cristian Cabrera', company: 'SOSAFE', location: 'Santiago, Chile' },
  { name: 'Sayuj Nambiar', company: 'BlancLabs', location: 'Toronto, Canada' },
  { name: 'Juorder Gonzalez', company: 'Teravision Technologies', location: 'Santiago, Chile' },
  { name: 'Servando Reyes', company: 'CANTV', location: 'Argentina, Chile' },
]

const roleEN = [
  'VP Engineering',
  'Backend Engineer',
  'CEO/CTO at Southern Labs SpA',
  'Software Engineer',
  'Co-founder',
  'Co-founder',
  'Product Manager',
  'Senior Frontend Engineer',
  'Software Engineer',
]

const roleES = [
  'VP Ingeniería',
  'Ingeniero Backend',
  'CEO/CTO en Southern Labs SpA',
  'Ingeniero de Software',
  'Co-fundador',
  'Co-fundador',
  'Product Manager',
  'Ingeniero Frontend Senior',
  'Ingeniero de Software',
]

export const CV_DATA_EN: CVData = {
  sections: {
    profile: 'Profile',
    experience: 'Experience',
    technicalSkills: 'Technical Skills',
    education: 'Education',
    references: 'References',
    startupExperience: 'Startup Experience',
  },
  personal_info: { title: 'Software Engineer' },
  profile: {
    summary:
      'Software Engineer with more than 10 years of experience focused on web product development. Experienced in defining project requirements, orchestrating development processes, managing deployments, and maintaining web platforms including websites, web applications, hybrid mobile apps, and APIs. Skilled in scalable, user-centered solutions and cross-functional collaboration.',
  },
  experience: experienceEN,
  startup_experience: startupEN,
  education: {
    degree: 'BA in Informatic',
    institution: 'Cecilio Acosta College',
    location: 'Los Teques, Miranda, Venezuela',
    period: '2009 - 2012',
  },
  references: referencesBase.map((r, i) => ({ ...r, role: roleEN[i] })),
}

export const CV_DATA_ES: CVData = {
  sections: {
    profile: 'Perfil',
    experience: 'Experiencia',
    technicalSkills: 'Habilidades Técnicas',
    education: 'Educación',
    references: 'Referencias',
    startupExperience: 'Experiencia en Startups',
  },
  personal_info: { title: 'Ingeniero de Software' },
  profile: {
    summary:
      'Ingeniero de Software con más de 10 años de experiencia enfocado en desarrollo de productos web. Experto en definición de requisitos de proyectos, orquestación de procesos de desarrollo, gestión de despliegues y mantenimiento de plataformas web incluyendo sitios web, aplicaciones web, apps móviles híbridas y APIs. Capacitado en soluciones escalables centradas en el usuario y colaboración multidisciplinaria.',
  },
  experience: experienceES,
  startup_experience: startupES,
  education: {
    degree: 'Licenciatura en Informática',
    institution: 'Colegio Cecilio Acosta',
    location: 'Los Teques, Miranda, Venezuela',
    period: '2009 - 2012',
  },
  references: referencesBase.map((r, i) => ({ ...r, role: roleES[i] })),
}

export function getCVData(lang: string): CVData {
  return lang.startsWith('es') ? CV_DATA_ES : CV_DATA_EN
}

export function getCVLangCode(lang: string): 'EN' | 'ES' {
  return lang.startsWith('es') ? 'ES' : 'EN'
}
