export const CAREER_START_YEAR = 2012

export const getYearsOfExperience = () =>
  Math.floor(new Date().getFullYear() - CAREER_START_YEAR)

export const EXPERIENCE = [
  { company: 'Gala Games', period: '2024 - Present', logo: '/images/gala.png' },
  { company: 'Forte Inc', period: '2020 - 2024', logo: '/images/forte.jpeg' },
  { company: 'Networks', period: '2020 - 2022', logo: '/images/n3twork.jpeg' },
  { company: 'SOSAFE', period: '2017 - 2020', logo: '/images/sosafe.jpeg' },
  { company: 'BlancLink', period: '2016 - 2017', logo: '/images/blanclabsLogo.png' },
  { company: 'Teravision', period: '2015 - 2016', logo: '/images/teravisionLogo.png' },
  { company: 'Cantv', period: '2012 - 2015', logo: '/images/cantvlogo.png' },
]

export const WHATSAPP_URL = 'https://wa.me/+56940866411?text=Hola%2C%20encontr%C3%A9%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20productos/servicios.%20Tengo%20algunas%20preguntas%20y%20estoy%20interesado%28a%29%20en%20saber%20m%C3%A1s.%20%C2%A1Gracias%21'

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
  "technical_skills": {
    "languages": [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Rust",
      "Go",
      "Java",
      "Bash"
    ],
    "frameworks_libraries": [
      "ReactJS",
      "Angular",
      "Electron",
      "React Native",
      "MobX",
      "Redux",
      "NextJS",
      "Expo",
      "Webpack",
      "Less",
      "Sass",
      "PostCSS",
      "Bootstrap",
      "Material UI",
      "Tailwind"
    ],
    "backend_tools": [
      "Node.js",
      "Express",
      "Bun",
      "Yii",
      "Drupal",
      "Thrift",
      "gRPC",
      "REST",
      "GraphQL"
    ],
    "databases": [
      "Supabase",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "DynamoDB"
    ],
    "cloud_devops": [
      "AWS",
      "GCP",
      "Serverless",
      "Firebase",
      "GitHub Actions"
    ],
    "other": [
      "Pentaho",
      "WebRTC",
      "WebAssembly"
    ]
  },
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
