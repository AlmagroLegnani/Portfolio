import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
  // Navigation
  selectLanguage: 'Seleccionar idioma',
  darkMode: 'Modo oscuro',
  lightMode: 'Modo claro',
  about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    
    // Hero Section
    heroTitle: 'Desarrollador Full Stack',
    heroSubtitle: 'Especializado en tecnologías web modernas y desarrollo de aplicaciones',
    downloadCV: 'Descargar CV',
    contactMe: 'Contáctame',
    
    // About Section
    aboutTitle: 'Sobre mí',
    aboutDescription: 'Profesional orientado a resultados, perseverante y comprometido con la mejora continua. Disfruto enfrentar desafíos tecnológicos y aportar soluciones innovadoras en cada proyecto. Valoro el trabajo en equipo, la comunicación efectiva y la responsabilidad en cada entrega. Mi objetivo es crecer profesionalmente y contribuir con soluciones eficientes y de calidad, manteniendo siempre una actitud proactiva y ética.',
    skillsTitle: 'Habilidades',
    skillsList: [
      'C#',
      '.NET',
      'Node.js',
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'SQL Server',
      'MongoDB Compass',
      'Git',
      'GitHub'
    ],
    strengthsTitle: 'Fortalezas principales:',
    strengthsList: [
      'Desarrollo de aplicaciones web modernas (Frontend y Backend)',
      'Integración de APIs y servicios externos',
      'Diseño de bases de datos relacionales y NoSQL',
      'Implementación de soluciones escalables y seguras'
    ],
    objectivesTitle: 'Objetivos a corto plazo:',
    objectivesList: [
      'Tener mi primera experiencia como desarrollador en una empresa de software',
      'Seguir mejorando mis prácticas profesionales y técnicas',
      'Formarme en buenas prácticas de seguridad informática y aplicarlas en el desarrollo de software'
    ],
    
    // Experience Section
    experienceTitle: 'Experiencia',
    experienceList: [
      {
        title: 'Desarrollador de aplicaciones web',
        period: '03/2025 - Actual',
        company: 'Particular',
        location: 'Montevideo',
        description: 'Desarrollo de un e-commerce de fotografías, implementando el backend en C#, frontend en React y base de datos en SQL Server. Participé en todo el ciclo de vida del proyecto, desde el análisis y diseño hasta la implementación, integración de APIs y despliegue, asegurando la calidad y el correcto funcionamiento de la aplicación.',
        technologies: ['C#', 'React', 'SQL Server']
      },
      {
        title: 'Desarrollador de aplicaciones web',
        period: '02/2025 - Actual',
        company: 'Particular',
        location: 'Montevideo',
        description: 'Desarrollo de un e-commerce de libros, implementando el backend con Node.js y Express.js, frontend en React y JavaScript, y base de datos en MongoDB. Participé en el diseño, desarrollo y optimización de la aplicación, colaborando en equipos ágiles y asegurando la escalabilidad, seguridad y calidad del producto.',
        technologies: ['Node.js', 'Express.js', 'React', 'JavaScript', 'MongoDB']
      },
      {
        title: 'Desarrollador web',
        period: '07/2025 - 08/2025',
        company: 'Particular',
        location: 'Montevideo',
        description: 'Desarrollo y despliegue de la página web para Nacho Diez MMA/Box, utilizando Node.js con TypeScript y React, y publicación en Vercel. Enfocado en la creación de una experiencia de usuario funcional, intuitiva y fácil de mantener.',
        technologies: ['Node.js', 'TypeScript', 'React', 'Vercel']
      },
      {
        title: 'Desarrollador web',
        period: '02/2025 - 03/2025',
        company: 'Particular',
        location: 'Montevideo',
        description: 'Desarrollo y despliegue de la página web para una empresa de Limpieza de Tapizados, utilizando HTML, CSS y JavaScript, con publicación en Vercel. Enfocado en la creación de un sitio funcional, intuitivo y fácil de mantener para el cliente.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel']
      },
      {
  title: 'Desarrollo de aplicación móvil',
  period: '02/2025 - 02/2025',
  company: 'Proyecto académico',
  location: 'Montevideo',
  description: 'Aplicación móvil con Ionic – Full Stack. Desarrollo de una app móvil utilizando JavaScript conectada a una API REST, con interfaz en HTML mediante Ionic y generación de APK para Android.',
  technologies: ['JavaScript', 'Ionic', 'HTML', 'API REST', 'Android']
      },
      {
        title: 'Desarrollador de aplicaciones web',
        period: '08/2024 - 11/2024',
        company: 'Proyecto académico',
        location: 'Montevideo',
        description: 'Proyecto Juegos Olímpicos – App Web C#/SQL. Sistema web en MVC (.NET) con API propia y base de datos en SQL Server para gestionar atletas, disciplinas y eventos. En este proyecto apliqué inyección de dependencias y los principios SOLID para lograr un código más mantenible, escalable y desacoplado.',
        technologies: ['C#', '.NET', 'SQL Server', 'MVC']
      }
    ],
    
    // Projects Section
  projectsTitle: 'Proyectos',
    viewProject: 'Ver Proyecto',
    sourceCode: 'Código Fuente',
    
  // Contact Section
  contactTitle: 'Contacto',
  contactDescription: 'Estoy siempre abierto a nuevas oportunidades y colaboraciones.',
  contactEmail: 'Email',
  contactEmailValue: 'almagrolegnani@gmail.com',
  contactPhone: 'Teléfono',
  contactPhoneValue: '+59892922172',
  contactLocation: 'Ubicación',
  contactLocationValue: 'Montevideo, Uruguay',
  contactFollow: 'Sígueme en:',
  contactSendMeMessage: 'Envíame un mensaje',
  contactYourName: 'Tu nombre',
  contactYourEmail: 'Tu email',
  contactYourMessage: 'Tu mensaje',
  contactSendMessage: 'Enviar Mensaje',
    
    // Skills
    skills: 'Habilidades',
    
  // Footer
  madeWith: 'Hecho con',
  by: 'por',
  footerRights: '© {year} Almagro dev. Todos los derechos reservados.',

  // Hero Floating Buttons
  languages: 'Idiomas',
  // skills, projects y downloadCV solo definidos aquí para floating buttons
  linkedin: 'LinkedIn',
  github: 'GitHub',
  nachoMmaDiez: 'Nacho MMA Diez',
  tapizadosFull: 'Tapizados Full',
  // downloadCV solo aquí
    profileTitle: 'Leandro Almagro Legnani',
    profileSubtitle: 'Desarrollador Full-Stack',
    profileDescription: 'Desarrollador Full-Stack con formación avanzada en Tecnologías de la Información y experiencia freelance en el desarrollo de aplicaciones web y móviles. He participado en proyectos de páginas web y e-commerce, gestionando desde el análisis de requerimientos hasta la implementación y despliegue. Trabajo con tecnologías como ASP.NET (C#), Node.js, React y bases de datos SQL/NoSQL, aplicando metodologías ágiles para entregar soluciones de calidad, funcionales y adaptadas a las necesidades del cliente.',
  aptitudesTitle: 'Aptitudes',
    aptitudesList: [
      'Trabajo en equipo',
      'Resolución de problemas',
      'Creatividad',
      'Soporte técnico',
      'Identificación de problemas',
      'Gestión de tareas'
    ],
    languagesList: [
      'Español: Nativo',
      'Portugués: Experto',
      'Inglés: Intermedio'
    ],
    // Próximos Lanzamientos
  nextProjectsTitle: 'Próximos Lanzamientos',
    nextProjectBooksTitle: 'E-commerce de libros',
    nextProjectBooksCompany: 'Freelance',
    nextProjectBooksLocation: 'Montevidéu',
    nextProjectBooksDescription: 'Actualmente desarrollo un e-commerce de libros, implementando el backend con Node.js y Express.js, el frontend en React y JavaScript, y la base de datos en MongoDB. Me encargo del diseño, desarrollo y optimización de la aplicación, asegurando la escalabilidad, seguridad y calidad del producto.',
    nextProjectBooksTechnologies: ['Node.js', 'Express.js', 'React', 'JavaScript', 'MongoDB'],
    nextProjectBooksStatus: 'En desarrollo',
    nextProjectPhotosTitle: 'E-commerce de fotografías',
    nextProjectPhotosCompany: 'Freelance',
    nextProjectPhotosLocation: 'Colombia',
    nextProjectPhotosDescription: 'Desarrollo de un e-commerce de fotografías, implementando el backend en C#, frontend en React y base de datos en SQL Server. Participo en todo el ciclo de vida del proyecto, desde el análisis y diseño hasta la implementación, integración de APIs y despliegue, asegurando la calidad y el correcto funcionamiento de la aplicación.',
    nextProjectPhotosTechnologies: ['C#', 'React', 'SQL Server'],
    nextProjectPhotosStatus: 'En desarrollo',
    escolaridad: 'Escolaridad',
  },
  pt: {
  // Navigation
  selectLanguage: 'Selecionar idioma',
  darkMode: 'Modo escuro',
  lightMode: 'Modo claro',
  about: 'Sobre mim',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contato',
    
    // Hero Section
    heroTitle: 'Desenvolvedor Full Stack',
    heroSubtitle: 'Especializado em tecnologias web modernas e desenvolvimento de aplicações',
    downloadCV: 'Baixar CV',
    contactMe: 'Entre em Contato',
    
    // About Section
    aboutTitle: 'Sobre mim',
    aboutDescription: 'Profissional orientado a resultados, perseverante e comprometido com a melhoria contínua. Gosto de enfrentar desafios tecnológicos e trazer soluções inovadoras para cada projeto. Valorizo o trabalho em equipe, a comunicação eficaz e a responsabilidade em cada entrega. Meu objetivo é crescer profissionalmente e contribuir com soluções eficientes e de qualidade, mantendo sempre uma atitude proativa e ética.',
    skillsTitle: 'Habilidades',
    skillsList: [
      'C#',
      '.NET',
      'Node.js',
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'SQL Server',
      'MongoDB Compass',
      'Git',
      'GitHub'
    ],
    strengthsTitle: 'Principais fortalezas:',
    strengthsList: [
      'Desenvolvimento de aplicações web modernas (Frontend e Backend)',
      'Integração de APIs e serviços externos',
      'Design de bancos de dados relacionais e NoSQL',
      'Implementação de soluções escaláveis e seguras'
    ],
    objectivesTitle: 'Objetivos de curto prazo:',
    objectivesList: [
      'Ter minha primeira experiência como desenvolvedor em uma empresa de software',
      'Continuar aprimorando minhas práticas profissionais e técnicas',
      'Me formar em boas práticas de segurança da informação e aplicá-las no desenvolvimento de software'
    ],
    
    // Experience Section
    experienceTitle: 'Experiência',
    experienceList: [
      {
        title: 'Desenvolvedor de aplicações web',
        period: '03/2025 - Atual',
        company: 'Particular',
        location: 'Montevidéu',
        description: 'Desenvolvimento de um e-commerce de fotografias, implementando o backend em C#, frontend em React e banco de dados em SQL Server. Participei de todo o ciclo de vida do projeto, desde a análise e design até a implementação, integração de APIs e implantação, garantindo a qualidade e o correto funcionamento da aplicação.',
        technologies: ['C#', 'React', 'SQL Server']
      },
      {
        title: 'Desenvolvedor de aplicações web',
        period: '02/2025 - Atual',
        company: 'Particular',
        location: 'Montevidéu',
        description: 'Desenvolvimento de um e-commerce de livros, implementando o backend com Node.js e Express.js, frontend em React e JavaScript, e banco de dados em MongoDB. Participei do design, desenvolvimento e otimização da aplicação, colaborando em equipes ágeis e garantindo a escalabilidade, segurança e qualidade do produto.',
        technologies: ['Node.js', 'Express.js', 'React', 'JavaScript', 'MongoDB']
      },
      {
        title: 'Desenvolvedor web',
        period: '07/2025 - 08/2025',
        company: 'Particular',
        location: 'Montevidéu',
        description: 'Desenvolvimento e implantação do site para Nacho Diez MMA/Box, utilizando Node.js com TypeScript e React, e publicação na Vercel. Focado na criação de uma experiência de usuário funcional, intuitiva e fácil de manter.',
        technologies: ['Node.js', 'TypeScript', 'React', 'Vercel']
      },
      {
        title: 'Desenvolvedor web',
        period: '02/2025 - 03/2025',
        company: 'Particular',
        location: 'Montevidéu',
        description: 'Desenvolvimento e implantação do site para uma empresa de Limpeza de Estofados, utilizando HTML, CSS e JavaScript, com publicação na Vercel. Focado na criação de um site funcional, intuitivo e fácil de manter para o cliente.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel']
      },
      {
        title: 'Desenvolvimento de aplicativo móvel',
        period: '02/2025 - 02/2025',
        company: 'Projeto acadêmico',
        location: 'Montevidéu',
        description: 'Aplicativo móvel com Ionic – Full Stack. Desenvolvimento de um app móvel utilizando JavaScript conectado a uma API REST, com interface em HTML via Ionic e geração de APK para Android.',
        technologies: ['JavaScript', 'Ionic', 'HTML', 'API REST', 'Android']
      },
      {
        title: 'Desenvolvedor de aplicações web',
        period: '08/2024 - 11/2024',
        company: 'Projeto acadêmico',
        location: 'Montevidéu',
        description: 'Projeto Jogos Olímpicos – App Web C#/SQL. Sistema web em MVC (.NET) com API própria e banco de dados em SQL Server para gerenciar atletas, disciplinas e eventos. Neste projeto utilizei injeção de dependências e os princípios SOLID para garantir um código mais sustentável, escalável e desacoplado.',
        technologies: ['C#', '.NET', 'SQL Server', 'MVC']
      }
    ],
    
    // Projects Section
  projectsTitle: 'Projetos',
    viewProject: 'Ver Projeto',
    sourceCode: 'Código Fonte',
    
  // Contact Section
  contactTitle: 'Contato',
  contactDescription: 'Estou sempre aberto a novas oportunidades e colaborações interessantes.',
  contactEmail: 'Email',
  contactEmailValue: 'almagrolegnani@gmail.com',
  contactPhone: 'Telefone',
  contactPhoneValue: '+59892922172',
  contactLocation: 'Localização',
  contactLocationValue: 'Montevidéu, Uruguai',
  contactFollow: 'Siga-me em:',
  contactSendMeMessage: 'Envie-me uma mensagem',
  contactYourName: 'Seu nome',
  contactYourEmail: 'Seu email',
  contactYourMessage: 'Sua mensagem',
  contactSendMessage: 'Enviar Mensagem',
    
    // Skills
    skills: 'Habilidades',
    
  // Footer
  madeWith: 'Feito com',
  by: 'por',
  footerRights: '© {year} Almagro dev. Todos os direitos reservados.',

  // Hero Floating Buttons
  languages: 'Idiomas',
  // skills, projects y downloadCV solo definidos una vez por idioma
  linkedin: 'LinkedIn',
  github: 'GitHub',
  nachoMmaDiez: 'Nacho MMA Diez',
  tapizadosFull: 'Tapizados Full',
    profileTitle: 'Leandro Almagro Legnani',
    profileSubtitle: 'Desenvolvedor Full-Stack',
    profileDescription: 'Desenvolvedor Full-Stack com formação avançada em Tecnologias da Informação e experiência freelance no desenvolvimento de aplicações web e móveis. Participei de projetos de sites e e-commerce, gerenciando desde a análise de requisitos até a implementação e implantação. Trabalho com tecnologias como ASP.NET (C#), Node.js, React e bancos de dados SQL/NoSQL, aplicando metodologias ágeis para entregar soluções de qualidade, funcionais e adaptadas às necessidades do cliente.',
  aptitudesTitle: 'Aptidões',
    aptitudesList: [
      'Trabalho em equipe',
      'Resolução de problemas',
      'Criatividade',
      'Suporte técnico',
      'Identificação de problemas',
      'Gestão de tarefas'
    ],
    languagesList: [
      'Espanhol: Nativo',
      'Português: Fluente',
      'Inglês: Intermediário'
    ],
  // Próximos Lançamentos
  nextProjectsTitle: 'Próximos Lançamentos',
    nextProjectBooksTitle: 'E-commerce de livros',
    nextProjectBooksCompany: 'Freelance',
    nextProjectBooksLocation: 'Montevidéu',
    nextProjectBooksDescription: 'Atualmente desenvolvo um e-commerce de livros, implementando o backend com Node.js e Express.js, o frontend em React e JavaScript, e o banco de dados em MongoDB. Sou responsável pelo design, desenvolvimento e otimização da aplicação, garantindo escalabilidade, segurança e qualidade do produto.',
    nextProjectBooksTechnologies: ['Node.js', 'Express.js', 'React', 'JavaScript', 'MongoDB'],
    nextProjectBooksStatus: 'Em desenvolvimento',
    nextProjectPhotosTitle: 'E-commerce de fotografias',
    nextProjectPhotosCompany: 'Freelance',
    nextProjectPhotosLocation: 'Colômbia',
    nextProjectPhotosDescription: 'Desenvolvimento de um e-commerce de fotografias, implementando o backend em C#, frontend em React e banco de dados em SQL Server. Participo em todo o ciclo de vida do projeto, desde a análise e design até a implementação, integração de APIs e implantação, garantindo a qualidade e o correto funcionamento da aplicação.',
    nextProjectPhotosTechnologies: ['C#', 'React', 'SQL Server'],
    nextProjectPhotosStatus: 'Em desenvolvimento',
    escolaridad: 'Escolaridade',
  },
  en: {
  // Navigation
  selectLanguage: 'Select language',
  darkMode: 'Dark mode',
  lightMode: 'Light mode',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Full Stack Developer',
    heroSubtitle: 'Specialized in modern web technologies and application development',
    downloadCV: 'Download CV',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutDescription: 'Results-oriented professional, perseverant and committed to continuous improvement. I enjoy facing technological challenges and providing innovative solutions in every project. I value teamwork, effective communication, and responsibility in every delivery. My goal is to grow professionally and contribute with efficient and quality solutions, always maintaining a proactive and ethical attitude.',
    skillsTitle: 'Skills',
    skillsList: [
      'C#',
      '.NET',
      'Node.js',
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'SQL Server',
      'MongoDB Compass',
      'Git',
      'GitHub'
    ],
    strengthsTitle: 'Main strengths:',
    strengthsList: [
      'Development of modern web applications (Frontend and Backend)',
      'Integration of APIs and external services',
      'Design of relational and NoSQL databases',
      'Implementation of scalable and secure solutions'
    ],
    objectivesTitle: 'Short-term objectives:',
    objectivesList: [
      'Have my first experience as a developer in a software company',
      'Continue improving my professional and technical practices',
      'Train in good information security practices and apply them in software development'
    ],
    
    // Experience Section
    experienceTitle: 'Experience',
    experienceList: [
      {
        title: 'Web Application Developer',
        period: '03/2025 - Present',
        company: 'Freelance',
        location: 'Montevideo',
        description: 'Development of a photography e-commerce, implementing the backend in C#, frontend in React, and database in SQL Server. I participated in the entire project lifecycle, from analysis and design to implementation, API integration, and deployment, ensuring quality and proper operation.',
        technologies: ['C#', 'React', 'SQL Server']
      },
      {
        title: 'Web Application Developer',
        period: '02/2025 - Present',
        company: 'Freelance',
        location: 'Montevideo',
        description: 'Development of a book e-commerce, implementing the backend with Node.js and Express.js, frontend in React and JavaScript, and database in MongoDB. I participated in the design, development, and optimization of the application, collaborating in agile teams and ensuring scalability, security, and product quality.',
        technologies: ['Node.js', 'Express.js', 'React', 'JavaScript', 'MongoDB']
      },
      {
        title: 'Web Developer',
        period: '07/2025 - 08/2025',
        company: 'Freelance',
        location: 'Montevideo',
        description: 'Development and deployment of the website for Nacho Diez MMA/Box, using Node.js with TypeScript and React, and publishing on Vercel. Focused on creating a functional, intuitive, and easy-to-maintain user experience.',
        technologies: ['Node.js', 'TypeScript', 'React', 'Vercel']
      },
      {
        title: 'Web Developer',
        period: '02/2025 - 03/2025',
        company: 'Freelance',
        location: 'Montevideo',
        description: 'Development and deployment of the website for a Upholstery Cleaning company, using HTML, CSS, and JavaScript, with publishing on Vercel. Focused on creating a functional, intuitive, and easy-to-maintain site for the client.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel']
      },
      {
        title: 'Mobile App Development',
        period: '02/2025 - 02/2025',
        company: 'Academic Project',
        location: 'Montevideo',
        description: 'Mobile app with Ionic – Full Stack. Development of a mobile app using JavaScript connected to a REST API, with interface in HTML via Ionic and APK generation for Android.',
        technologies: ['JavaScript', 'Ionic', 'HTML', 'API REST', 'Android']
      },
      {
        title: 'Web Application Developer',
        period: '08/2024 - 11/2024',
        company: 'Academic Project',
        location: 'Montevideo',
        description: 'Olympic Games Project – C#/SQL Web App. Web system in MVC (.NET) with its own API and SQL Server database to manage athletes, disciplines, and events. In this project, I used dependency injection and SOLID principles to achieve more maintainable, scalable, and decoupled code.',
        technologies: ['C#', '.NET', 'SQL Server', 'MVC']
      }
    ],
    
    // Projects Section
  projectsTitle: 'Projects',
    viewProject: 'View Project',
    sourceCode: 'Source Code',
    
  // Contact Section
  contactTitle: 'Contact',
  contactDescription: 'I am always open to new opportunities and interesting collaborations.',
  contactEmail: 'Email',
  contactEmailValue: 'almagrolegnani@gmail.com',
  contactPhone: 'Phone',
  contactPhoneValue: '+59892922172',
  contactLocation: 'Location',
  contactLocationValue: 'Montevideo, Uruguay',
  contactFollow: 'Follow me on:',
  contactSendMeMessage: 'Send me a message',
  contactYourName: 'Your name',
  contactYourEmail: 'Your email',
  contactYourMessage: 'Your message',
  contactSendMessage: 'Send Message',
    
    // Skills
    skills: 'Skills',
    
  // Footer
  madeWith: 'Made with',
  by: 'by',
  footerRights: '© {year} Almagro dev. All rights reserved.',

  // Hero Floating Buttons
  languages: 'Languages',
  // skills, projects y downloadCV solo definidos una vez por idioma
  linkedin: 'LinkedIn',
  github: 'GitHub',
  nachoMmaDiez: 'Nacho MMA Diez',
  tapizadosFull: 'Tapizados Full',
    profileTitle: 'Leandro Almagro Legnani',
    profileSubtitle: 'Full-Stack Developer',
    profileDescription: 'Full-Stack Developer with advanced training in Information Technologies and freelance experience in web and mobile application development. I have participated in website and e-commerce projects, managing everything from requirements analysis to implementation and deployment. I work with technologies such as ASP.NET (C#), Node.js, React, and SQL/NoSQL databases, applying agile methodologies to deliver quality, functional, and client-adapted solutions.',
  aptitudesTitle: 'Skills',
    aptitudesList: [
      'Teamwork',
      'Problem solving',
      'Creativity',
      'Technical support',
      'Problem identification',
      'Task management'
    ],
    languagesList: [
      'Spanish: Native',
      'Portuguese: Fluent',
      'English: Intermediate'
    ],
    // Next Launches
    nextProjectsTitle: 'Upcoming Launches',
    nextProjectBooksTitle: 'Books E-commerce',
    nextProjectBooksCompany: 'Freelance',
    nextProjectBooksLocation: 'Montevideo',
    nextProjectBooksDescription: 'I am currently developing a books e-commerce, implementing the backend with Node.js and Express.js, the frontend in React and JavaScript, and the database in MongoDB. I am in charge of the design, development, and optimization of the application, ensuring scalability, security, and product quality.',
    nextProjectBooksTechnologies: ['Node.js', 'Express.js', 'React', 'JavaScript', 'MongoDB'],
    nextProjectBooksStatus: 'In development',
    nextProjectPhotosTitle: 'Photography E-commerce',
    nextProjectPhotosCompany: 'Freelance',
    nextProjectPhotosLocation: 'Colombia',
    nextProjectPhotosDescription: 'Development of a photography e-commerce, implementing the backend in C#, frontend in React, and database in SQL Server. I am involved in the entire project lifecycle, from analysis and design to implementation, API integration, and deployment, ensuring quality and proper operation.',
    nextProjectPhotosTechnologies: ['C#', 'React', 'SQL Server'],
    nextProjectPhotosStatus: 'In development',
    escolaridad: 'Schooling',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  // Permite devolver string, string[] u objeto (para listas y textos)
  const t = (key: string): any => {
    const value = translations[language][key as keyof typeof translations[Language]];
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};