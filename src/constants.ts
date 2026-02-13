export const CAREER_START_YEAR = 2012

export const getYearsOfExperience = () =>
  Math.floor(new Date().getFullYear() - CAREER_START_YEAR)

export interface ExperienceItem {
  company: string
  year: string
  period: string
  logo: string
  role: string
  responsibilities: string[]
  hintKey: string
}

export const EXPERIENCE = [
  { company: 'Gala Games', period: '2024', logo: '/images/gala.png' },
  { company: 'Forte Inc', period: '2020-24', logo: '/images/forte.jpeg' },
  { company: 'Networks', period: '2020-22', logo: '/images/n3twork.jpeg' },
  { company: 'SOSAFE', period: '2017-20', logo: '/images/sosafe.jpeg' },
  { company: 'BlancLink', period: '2016-17', logo: '/images/blanclabsLogo.png' },
  { company: 'Teravision', period: '2015-16', logo: '/images/teravisionLogo.png' },
  { company: 'Cantv', period: '2012-15', logo: '/images/cantvlogo.png' },
]

export const EXPERIENCE_DETAILED: ExperienceItem[] = [
  {
    company: 'Gala Games',
    year: '2024',
    period: '2024 - Present',
    logo: '/images/gala.png',
    role: 'Backend Engineer',
    hintKey: 'galaGames',
    responsibilities: [
      'Leading frontend development team building Telegram WebApps using TypeScript, Node.js (Express), and MongoDB',
      'Developed a domain-specific language (DSL) in Golang to define and generate metadata schemas dynamically',
      'Maintain metadata distribution system in Python',
    ],
  },
  {
    company: 'Forte Inc',
    year: '2020',
    period: '2020 - 2024',
    logo: '/images/forte.jpeg',
    role: 'Software Engineer',
    hintKey: 'forte',
    responsibilities: [
      'Designed, implemented and maintained tools and protocols for a console platform enhancing team collaboration',
      'Designed custom Micro-frontend architecture using Module Federation',
      'Used GitHub Actions and AWS Terraform to optimize development workflows',
      'Developed custom JavaScript libraries and UI component libraries',
    ],
  },
  {
    company: 'Networks',
    year: '2020',
    period: '2020 - 2022',
    logo: '/images/n3twork.jpeg',
    role: 'Software Engineer',
    hintKey: 'networks',
    responsibilities: [
      'Contributed to platform for managing mobile video game operations (React, Redux, RxJS, Thrift, Material UI)',
      'Built strategies for in-app notifications and targeted advertising',
      'Implemented Nx Micro-frontend architecture to unify multiple clients into one Console Platform',
    ],
  },
  {
    company: 'SOSAFE',
    year: '2017',
    period: '2017 - 2020',
    logo: '/images/sosafe.jpeg',
    role: 'Frontend Developer',
    hintKey: 'sosafe',
    responsibilities: [
      'Led frontend development of real-time event monitoring platform (PWA, React, Redux)',
      'Developed SOSAFE GO (React Native hybrid mobile app)',
      'Built static sites, embedded JS widgets, and in-app notification templates',
    ],
  },
  {
    company: 'BlancLink',
    year: '2016',
    period: '2016 - 2017',
    logo: '/images/blanclabsLogo.png',
    role: 'Fullstack Developer',
    hintKey: 'blanclink',
    responsibilities: [
      'Worked with remote team in Oregon',
      'Created embedded JS widgets',
      'Built car sales web app using MEAN stack',
    ],
  },
  {
    company: 'Teravision',
    year: '2015',
    period: '2015 - 2016',
    logo: '/images/teravisionLogo.png',
    role: 'Fullstack Developer',
    hintKey: 'teravision',
    responsibilities: [
      'Worked on projects using AngularJS, PHP + Drupal, and Node + Express',
      'Built CMS-based websites with Drupal',
    ],
  },
  {
    company: 'Cantv',
    year: '2012',
    period: '2012 - 2015',
    logo: '/images/cantvlogo.png',
    role: 'Fullstack Developer',
    hintKey: 'cantv',
    responsibilities: [
      'Technical lead for HR internal system (MEAN stack)',
      'Developed information feed and appointment management system',
      'Maintained internal PHP (Yii) products',
    ],
  },
]

export const WHATSAPP_URL = 'https://wa.me/+56940866411?text=Hola%2C%20encontr%C3%A9%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20productos/servicios.%20Tengo%20algunas%20preguntas%20y%20estoy%20interesado%28a%29%20en%20saber%20m%C3%A1s.%20%C2%A1Gracias%21'

/** Tech item with name, URL and logo (Simple Icons slug or custom path) */
export interface TechItem {
  name: string
  url: string
  logo: string // Simple Icons slug for CDN: https://cdn.simpleicons.org/{slug}
}

export interface TechStack {
  programming_languages: TechItem[]
  frameworks_frontend: TechItem[]
  frameworks_backend: TechItem[]
  libraries_frontend: TechItem[]
  libraries_backend: TechItem[]
  databases: TechItem[]
  other: TechItem[]
}

/** Technologies and tools from CV experience - with logos and links */
export const TECH_STACK: TechStack = {
  programming_languages: [
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logo: 'javascript' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/', logo: 'typescript' },
    { name: 'Python', url: 'https://www.python.org/', logo: 'python' },
    { name: 'PHP', url: 'https://www.php.net/', logo: 'php' },
    { name: 'Rust', url: 'https://www.rust-lang.org/', logo: 'rust' },
    { name: 'Go', url: 'https://go.dev/', logo: 'go' },
    { name: 'Java', url: 'https://www.java.com/', logo: 'openjdk' },
    { name: 'Bash', url: 'https://www.gnu.org/software/bash/', logo: 'gnubash' },
  ],
  frameworks_frontend: [
    { name: 'React', url: 'https://react.dev/', logo: 'react' },
    { name: 'Angular', url: 'https://angular.io/', logo: 'angular' },
    { name: 'Next.js', url: 'https://nextjs.org/', logo: 'nextdotjs' },
    { name: 'React Native', url: 'https://reactnative.dev/', logo: 'react' },
    { name: 'Expo', url: 'https://expo.dev/', logo: 'expo' },
    { name: 'Electron', url: 'https://www.electronjs.org/', logo: 'electron' },
  ],
  frameworks_backend: [
    { name: 'Node.js', url: 'https://nodejs.org/', logo: 'nodedotjs' },
    { name: 'Express', url: 'https://expressjs.com/', logo: 'express' },
    { name: 'Bun', url: 'https://bun.sh/', logo: 'bun' },
    { name: 'Yii', url: 'https://www.yiiframework.com/', logo: 'yii' },
    { name: 'Drupal', url: 'https://www.drupal.org/', logo: 'drupal' },
  ],
  libraries_frontend: [
    { name: 'Redux', url: 'https://redux.js.org/', logo: 'redux' },
    { name: 'MobX', url: 'https://mobx.js.org/', logo: 'mobx' },
    { name: 'Webpack', url: 'https://webpack.js.org/', logo: 'webpack' },
    { name: 'Less', url: 'https://lesscss.org/', logo: 'less' },
    { name: 'Sass', url: 'https://sass-lang.com/', logo: 'sass' },
    { name: 'PostCSS', url: 'https://postcss.org/', logo: 'postcss' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com/', logo: 'bootstrap' },
    { name: 'Material UI', url: 'https://mui.com/', logo: 'mui' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', logo: 'tailwindcss' },
  ],
  libraries_backend: [
    { name: 'Thrift', url: 'https://thrift.apache.org/', logo: 'apache' },
    { name: 'gRPC', url: 'https://grpc.io/', logo: 'https://grpc.io/favicons/apple-touch-icon.png' },
    { name: 'REST', url: 'https://restfulapi.net/', logo: 'json' },
    { name: 'GraphQL', url: 'https://graphql.org/', logo: 'graphql' },
  ],
  databases: [
    { name: 'MongoDB', url: 'https://www.mongodb.com/', logo: 'mongodb' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/', logo: 'postgresql' },
    { name: 'MySQL', url: 'https://www.mysql.com/', logo: 'mysql' },
    { name: 'DynamoDB', url: 'https://aws.amazon.com/dynamodb/', logo: 'amazondynamodb' },
    { name: 'Supabase', url: 'https://supabase.com/', logo: 'supabase' },
  ],
  other: [
    { name: 'AWS', url: 'https://aws.amazon.com/', logo: 'https://images.icon-icons.com/2407/PNG/512/aws_icon_146237.png' },
    { name: 'GCP', url: 'https://cloud.google.com/', logo: 'googlecloud' },
    { name: 'Serverless', url: 'https://www.serverless.com/', logo: 'serverless' },
    { name: 'Firebase', url: 'https://firebase.google.com/', logo: 'firebase' },
    { name: 'GitHub Actions', url: 'https://github.com/features/actions', logo: 'githubactions' },
    { name: 'WebRTC', url: 'https://webrtc.org/', logo: 'webrtc' },
    { name: 'WebAssembly', url: 'https://webassembly.org/', logo: 'webassembly' },
    { name: 'Pentaho', url: 'https://www.hitachivantara.com/en-us/products/data-management-analytics/pentaho-platform.html', logo: 'https://pentaho.com/wp-content/uploads/2024/04/favicon.png' },
  ],
}

/** Map tech name -> { url, logo } for items in CV.technical_skills */
export const TECH_META: Record<string, { url: string; logo: string }> = {
  JavaScript: { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logo: 'javascript' },
  TypeScript: { url: 'https://www.typescriptlang.org/', logo: 'typescript' },
  Python: { url: 'https://www.python.org/', logo: 'python' },
  Go: { url: 'https://go.dev/', logo: 'go' },
  PHP: { url: 'https://www.php.net/', logo: 'php' },
  Rust: { url: 'https://www.rust-lang.org/', logo: 'rust' },
  Java: { url: 'https://www.java.com/', logo: 'openjdk' },
  Bash: { url: 'https://www.gnu.org/software/bash/', logo: 'gnubash' },
  React: { url: 'https://react.dev/', logo: 'react' },
  Redux: { url: 'https://redux.js.org/', logo: 'redux' },
  NextJS: { url: 'https://nextjs.org/', logo: 'nextdotjs' },
  'React Native': { url: 'https://reactnative.dev/', logo: 'react' },
  Angular: { url: 'https://angular.io/', logo: 'angular' },
  AngularJS: { url: 'https://angular.io/', logo: 'angular' },
  Electron: { url: 'https://www.electronjs.org/', logo: 'electron' },
  MobX: { url: 'https://mobx.js.org/', logo: 'mobx' },
  Expo: { url: 'https://expo.dev/', logo: 'expo' },
  Webpack: { url: 'https://webpack.js.org/', logo: 'webpack' },
  'Module Federation': { url: 'https://module-federation.github.io/', logo: 'webpack' },
  Nx: { url: 'https://nx.dev/', logo: 'nx' },
  'Material UI': { url: 'https://mui.com/', logo: 'mui' },
  Tailwind: { url: 'https://tailwindcss.com/', logo: 'tailwindcss' },
  Bootstrap: { url: 'https://getbootstrap.com/', logo: 'bootstrap' },
  Sass: { url: 'https://sass-lang.com/', logo: 'sass' },
  Less: { url: 'https://lesscss.org/', logo: 'less' },
  PostCSS: { url: 'https://postcss.org/', logo: 'postcss' },
  'Node.js': { url: 'https://nodejs.org/', logo: 'nodedotjs' },
  Express: { url: 'https://expressjs.com/', logo: 'express' },
  Bun: { url: 'https://bun.sh/', logo: 'bun' },
  Yii: { url: 'https://www.yiiframework.com/', logo: 'yii' },
  Drupal: { url: 'https://www.drupal.org/', logo: 'drupal' },
  Thrift: { url: 'https://thrift.apache.org/', logo: 'apache' },
  gRPC: { url: 'https://grpc.io/', logo: 'https://grpc.io/favicons/apple-touch-icon.png' },
  'REST APIs': { url: 'https://restfulapi.net/', logo: 'json' },
  GraphQL: { url: 'https://graphql.org/', logo: 'graphql' },
  MongoDB: { url: 'https://www.mongodb.com/', logo: 'mongodb' },
  PostgreSQL: { url: 'https://www.postgresql.org/', logo: 'postgresql' },
  MySQL: { url: 'https://www.mysql.com/', logo: 'mysql' },
  DynamoDB: { url: 'https://aws.amazon.com/dynamodb/', logo: 'amazondynamodb' },
  AWS: { url: 'https://aws.amazon.com/', logo: 'https://images.icon-icons.com/2407/PNG/512/aws_icon_146237.png' },
  Serverless: { url: 'https://www.serverless.com/', logo: 'serverless' },
  'Serverless Framework': { url: 'https://www.serverless.com/', logo: 'serverless' },
  Terraform: { url: 'https://www.terraform.io/', logo: 'terraform' },
  'GitHub Actions': { url: 'https://github.com/features/actions', logo: 'githubactions' },
  Firebase: { url: 'https://firebase.google.com/', logo: 'firebase' },
  WebAssembly: { url: 'https://webassembly.org/', logo: 'webassembly' },
  WebRTC: { url: 'https://webrtc.org/', logo: 'webrtc' },
  Pentaho: { url: 'https://www.hitachivantara.com/en-us/products/data-management-analytics/pentaho-platform.html', logo: 'https://pentaho.com/wp-content/uploads/2024/04/favicon.png' },
  GCP: { url: 'https://cloud.google.com/', logo: 'googlecloud' },
  Scrum: { url: 'https://www.scrum.org/', logo: 'jira' },
  Kanban: { url: 'https://kanbanize.com/kanban-resources/getting-started/what-is-kanban', logo: 'trello' },
  XP: { url: 'https://www.extremeprogramming.org/', logo: 'jira' },
  TDD: { url: 'https://testdriven.io/', logo: 'jest' },
}

export const CV = {
  "personal_info": {
    "name": "Alexis Moreno",
    "title": "Software Engineer",
    "phone": "+56 940 866 411",
    "email": "aljomori@gmail.com",
    "website": "https://aljomori.github.io",
    "location": "Santiago, Chile"
  },
  "profile": {
    "summary": "Software Engineer with more than 10 years of experience focused on web product development. Experienced in defining project requirements, orchestrating development processes, managing deployments, and maintaining web platforms including websites, web applications, hybrid mobile apps, and APIs. Skilled in scalable, user-centered solutions and cross-functional collaboration."
  },
  "experience": [
    {
      "role": "Backend Engineer",
      "company": "Gala",
      "period": "2024 - Present",
      "responsibilities": [
        "Leading frontend development team building Telegram WebApps using TypeScript, Node.js (Express), and MongoDB",
        "Developed a domain-specific language (DSL) in Golang to define and generate metadata schemas dynamically",
        "Maintain metadata distribution system in Python"
      ]
    },
    {
      "role": "Software Engineer",
      "company": "Forte",
      "period": "2022 - 2024",
      "responsibilities": [
        "Designed, implemented and maintained tools and protocols for a console platform enhancing team collaboration",
        "Designed custom Micro-frontend architecture using Module Federation",
        "Used GitHub Actions and AWS Terraform to optimize development workflows",
        "Developed custom JavaScript libraries and UI component libraries"
      ]
    },
    {
      "role": "Software Engineer",
      "company": "N3twork Inc",
      "period": "2020 - 2022",
      "responsibilities": [
        "Contributed to platform for managing mobile video game operations (React, Redux, RxJS, Thrift, Material UI)",
        "Built strategies for in-app notifications and targeted advertising",
        "Implemented Nx Micro-frontend architecture to unify multiple clients into one Console Platform"
      ]
    },
    {
      "role": "Frontend Developer",
      "company": "SOSAFE",
      "period": "2017 - 2020",
      "responsibilities": [
        "Led frontend development of real-time event monitoring platform (PWA, React, Redux)",
        "Developed SOSAFE GO (React Native hybrid mobile app)",
        "Built static sites, embedded JS widgets, and in-app notification templates"
      ]
    },
    {
      "role": "Fullstack Developer",
      "company": "BlancLabs",
      "period": "2016 - 2017",
      "responsibilities": [
        "Worked with remote team in Oregon",
        "Created embedded JS widgets",
        "Built car sales web app using MEAN stack"
      ]
    },
    {
      "role": "Fullstack Developer",
      "company": "Teravision",
      "period": "2015 - 2016",
      "responsibilities": [
        "Worked on projects using AngularJS, PHP + Drupal, and Node + Express",
        "Built CMS-based websites with Drupal"
      ]
    },
    {
      "role": "Fullstack Developer",
      "company": "CANTV",
      "period": "2014 - 2015",
      "responsibilities": [
        "Technical lead for HR internal system (MEAN stack)",
        "Developed information feed and appointment management system",
        "Maintained internal PHP (Yii) products"
      ]
    },
    {
      "role": "Full Stack Developer",
      "company": "Fundabit",
      "period": "2012 - 2014",
      "responsibilities": [
        "Developed educational management system for Ministry of Education",
        "Used PHP, Yii, PostgreSQL, and Pentaho"
      ]
    }
  ],
  "startup_experience": [
    {
      "role": "Co-Founder",
      "company": "SIMPLIDECO",
      "period": "2022 - 2023",
      "responsibilities": [
        "Part of Startup Chile acceleration program",
        "Led team of 4 developers",
        "Built microservices platform using Serverless on AWS",
        "Used DynamoDB and Elasticsearch",
        "Backend mainly Node.js and Python",
        "Frontend in React, Hooks, TypeScript",
        "Developed custom 2D moodboard editor"
      ]
    }
  ],
  "technical_skills": [
    { "name": "JavaScript", "level": 4, "tags": ["programming language", "web", "scripting"] },
    { "name": "TypeScript", "level": 4, "tags": ["programming language", "web", "scripting"] },
    { "name": "Python", "level": 2, "tags": ["programming language", "scripting"] },
    { "name": "PHP", "level": 2, "tags": ["programming language", "web"] },
    { "name": "Rust", "level": 1, "tags": ["programming language"] },
    { "name": "Go", "level": 2, "tags": ["programming language"] },
    { "name": "Java", "level": 2, "tags": ["programming language"] },
    { "name": "Bash", "level": 2, "tags": ["programming language", "scripting"] },
    { "name": "React", "level": 4, "tags": ["frontend", "web"] },
    { "name": "Angular", "level": 2, "tags": ["frontend", "web"] },
    { "name": "Electron", "level": 3, "tags": ["frontend", "Desktop"] },
    { "name": "React Native", "level": 3, "tags": ["frontend", "mobile"] },
    { "name": "MobX", "level": 2, "tags": ["frontend", "State management"] },
    { "name": "Redux", "level": 4, "tags": ["frontend", "State management"] },
    { "name": "NextJS", "level": 3, "tags": ["frontend", "web"] },
    { "name": "Expo", "level": 2, "tags": ["frontend", "mobile"] },
    { "name": "Webpack", "level": 4, "tags": ["frontend", "web"] },
    { "name": "Less", "level": 4, "tags": ["frontend", "css"] },
    { "name": "Sass", "level": 4, "tags": ["frontend", "css"] },
    { "name": "PostCSS", "level": 3, "tags": ["frontend", "css"] },
    { "name": "Bootstrap", "level": 4, "tags": ["frontend", "css", "Design"] },
    { "name": "Material UI", "level": 4, "tags": ["frontend", "css", "Design"] },
    { "name": "Tailwind", "level": 4, "tags": ["frontend", "css", "Design"] },
    { "name": "Node.js", "level": 4, "tags": ["backend", "web"] },
    { "name": "Express", "level": 4, "tags": ["backend", "web", "api"] },
    { "name": "Bun", "level": 3, "tags": ["backend", "web"] },
    { "name": "Yii", "level": 2, "tags": ["backend", "web"] },
    { "name": "Drupal", "level": 2, "tags": ["backend", "web"] },
    { "name": "Thrift", "level": 3, "tags": ["backend", "api"] },
    { "name": "gRPC", "level": 3, "tags": ["backend", "api"] },
    { "name": "REST APIs", "level": 4, "tags": ["backend", "api"] },
    { "name": "GraphQL", "level": 2, "tags": ["backend", "api"] },
    { "name": "MongoDB", "level": 2, "tags": ["database"] },
    { "name": "PostgreSQL", "level": 3, "tags": ["database"] },
    { "name": "MySQL", "level": 2, "tags": ["database"] },
    { "name": "AWS", "level": 3, "tags": ["cloud"] },
    { "name": "GCP", "level": 2, "tags": ["cloud"] },
    { "name": "Serverless", "level": 1, "tags": ["cloud", "backend"] },
    { "name": "Firebase", "level": 2, "tags": ["cloud", "backend"] },
    { "name": "Pentaho", "level": 1, "tags": [] },
    { "name": "WebRTC", "level": 1, "tags": ["web"] },
    { "name": "WebAssembly", "level": 1, "tags": ["web"] },
    { "name": "Scrum", "level": 3, "tags": ["methodology"] },
    { "name": "Kanban", "level": 3, "tags": ["methodology"] },
    { "name": "XP", "level": 4, "tags": ["methodology"] },
    { "name": "TDD", "level": 2, "tags": ["methodology"] }
  ],
  "education": {
    "degree": "BA in Informatic",
    "institution": "Cecilio Acosta College",
    "location": "Los Teques, Miranda, Venezuela",
    "period": "2009 - 2012"
  },
  "references": [
    {
      "name": "Akshay Vyas",
      "company": "Gala Games",
      "location": "San Bruno, USA",
      "role": "VP Engineering",
      "linkedIn": "https://www.linkedin.com/in/akshayvyas21/"
    },
    {
      "name": "Joaquin Del Prado",
      "company": "Gala Games",
      "location": "Concepcion, Chile",
      "role": "Backend Engineer",
      "linkedIn": "https://www.linkedin.com/in/joaquin-del-prado/"
    },
    {
      "name": "Simon Paredes",
      "company": "Forte Inc.",
      "location": "Santiago, Chile",
      "role": "CEO/CTO at Southern Labs SpA",
      "linkedIn": "https://www.linkedin.com/in/simonparedes/"
    },
    {
      "name": "Julio Espinoza",
      "company": "N3twork Inc.",
      "location": "Santiago, Chile",
      "role": "Software Engineer",
      "linkedIn": "https://www.linkedin.com/in/julio-espinoza-19441185/"
    },
    {
      "name": "Jean Carlos Garcia Castro",
      "company": "SOSAFE",
      "location": "Santiago, Chile",
      "role": "Co-founder",
      "linkedIn": "https://www.linkedin.com/in/jean-carlos-garcia-castro/"
    },
    {
      "name": "Cristian Cabrera",
      "company": "SOSAFE",
      "location": "Santiago, Chile",
      "role": "Co-founder",
      "linkedIn": "https://www.linkedin.com/in/criscabrera/"
    },
    {
      "name": "Sayuj Nambiar",
      "company": "BlancLabs",
      "location": "Toronto, Canada",
      "role": "Product Manager",
      "linkedIn": "https://www.linkedin.com/in/sayujnambiar/"
    },
    {
      "name": "Juorder Gonzalez",
      "company": "Teravision Technologies",
      "location": "Santiago, Chile",
      "role": "Senior Frontend Engineer",
      "linkedIn": "https://www.linkedin.com/in/juordergonzalez/"
    },
    {
      "name": "Servando Reyes",
      "company": "CANTV",
      "location": "Argentina, Chile",
      "role": "Software Engineer",
      "linkedIn": "https://www.linkedin.com/in/servandoreyes/"
    },
  ]
}
