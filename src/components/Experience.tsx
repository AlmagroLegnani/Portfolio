import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Globe, Lightbulb, Folder, Linkedin, Github, MessageCircle } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';
import React, { useState } from 'react';

const Experience = () => {
  const { t, language } = useLanguage();
  const [showLanguages, setShowLanguages] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showLinkedin, setShowLinkedin] = useState(false);
  const [showGithub, setShowGithub] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  // Cerrar menús al hacer click fuera o al abrir otro
  React.useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target.closest('.floating-menu')) return;
      setShowLanguages(false);
      setShowSkills(false);
      setShowProjects(false);
      setShowLinkedin(false);
      setShowGithub(false);
      setShowWhatsapp(false);
    };
    if (showLanguages || showSkills || showProjects || showLinkedin || showGithub || showWhatsapp) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [showLanguages, showSkills, showProjects, showLinkedin, showGithub, showWhatsapp]);

  // Usar la lista internacionalizada desde el contexto
  // Ordenar por fecha de inicio (más reciente primero)
  const experiences = [
    {
      title: {
        es: 'Desarrollador web',
        en: 'Web Developer'
      },
  company: 'Freelance',
      location: {
        es: 'Montevideo',
        en: 'Montevideo'
      },
      period: '07/2025 - 08/2025',
      description: {
        es: 'Desarrollo y despliegue de la página web para Nacho Diez MMA/Box, utilizando Node.js con TypeScript y React, y publicación en Vercel. Enfocado en la creación de una experiencia de usuario funcional, intuitiva y fácil de mantener.',
        pt: 'Desenvolvimento e implantação do site para Nacho Diez MMA/Box, utilizando Node.js com TypeScript e React, e publicação na Vercel. Focado na criação de uma experiência de usuário funcional, intuitiva e fácil de manter.',
        en: 'Development and deployment of the website for Nacho Diez MMA/Box, using Node.js with TypeScript and React, and publishing on Vercel. Focused on creating a functional, intuitive, and easy-to-maintain user experience.'
      },
      technologies: ['Node.js', 'TypeScript', 'React', 'Vercel']
    },
    {
      title: {
        es: 'Desarrollador web',
        en: 'Web Developer'
      },
  company: 'Freelance',
      location: {
        es: 'Montevideo',
        en: 'Montevideo'
      },
      period: '02/2025 - 03/2025',
      description: {
        es: 'Desarrollo y despliegue de la página web para una empresa de Limpieza de Tapizados, utilizando HTML, CSS y JavaScript, con publicación en Vercel. Enfocado en la creación de un sitio funcional, intuitivo y fácil de mantener para el cliente.',
        pt: 'Desenvolvimento e implantação do site para uma empresa de Limpeza de Estofados, utilizando HTML, CSS e JavaScript, com publicação na Vercel. Focado na criação de um site funcional, intuitivo e fácil de manter para o cliente.',
        en: 'Development and deployment of the website for a Upholstery Cleaning company, using HTML, CSS, and JavaScript, with publishing on Vercel. Focused on creating a functional, intuitive, and easy-to-maintain site for the client.'
      },
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel']
    },
    {
      title: {
        es: 'Desarrollo de aplicación móvil',
        en: 'Mobile App Development'
      },
      company: 'Proyecto académico',
      location: {
        es: 'Montevideo',
        en: 'Montevideo'
      },
      period: '02/2025 - 02/2025',
      description: {
        es: 'Aplicación móvil con Ionic – Full Stack. Desarrollo de una app móvil utilizando JavaScript conectada a una API REST, con interfaz en HTML mediante Ionic y generación de APK para Android.',
        pt: 'Aplicativo móvel com Ionic – Full Stack. Desenvolvimento de um app móvel utilizando JavaScript conectado a uma API REST, com interface em HTML via Ionic e geração de APK para Android.',
        en: 'Mobile app with Ionic – Full Stack. Development of a mobile app using JavaScript connected to a REST API, with interface in HTML via Ionic and APK generation for Android.'
      },
      technologies: ['JavaScript', 'Ionic', 'HTML', 'API REST', 'Android']
    },
    {
      title: {
        es: 'Desarrollador de aplicaciones web',
        en: 'Web Application Developer'
      },
      company: 'Proyecto académico',
      location: {
        es: 'Montevideo',
        en: 'Montevideo'
      },
      period: '08/2024 - 11/2024',
      description: {
        es: 'Proyecto Juegos Olímpicos – App Web C#/SQL. Sistema web en MVC (.NET) con API propia y base de datos en SQL Server para gestionar atletas, disciplinas y eventos.',
        pt: 'Projeto Jogos Olímpicos – App Web C#/SQL. Sistema web em MVC (.NET) com API própria e banco de dados em SQL Server para gerenciar atletas, disciplinas e eventos.',
        en: 'Olympic Games Project – C#/SQL Web App. Web system in MVC (.NET) with its own API and SQL Server database to manage athletes, disciplines, and events.'
      },
      technologies: ['C#', '.NET', 'SQL Server', 'MVC']
    },
  ];

  // Traducción dinámica para los próximos lanzamientos, pero manteniendo la estructura visual original
  const nextProjects = [
    {
      title: t('nextProjectBooksTitle') || 'E-commerce de libros',
      company: t('nextProjectBooksCompany') || 'Freelance',
      location: t('nextProjectBooksLocation') || 'Montevideo',
      description: t('nextProjectBooksDescription') || 'Actualmente desarrollo un e-commerce de libros, implementando el backend con Node.js y Express.js, el frontend en React y JavaScript, y la base de datos en MongoDB. Me encargo del diseño, desarrollo y optimización de la aplicación, asegurando la escalabilidad, seguridad y calidad del producto.',
      technologies: t('nextProjectBooksTechnologies') || ['Node.js', 'Express.js', 'React', 'JavaScript', 'MongoDB'],
      progress: '70%',
      status: t('nextProjectBooksStatus') || t('inDevelopment') || 'En desarrollo',
    },
    {
      title: t('nextProjectPhotosTitle') || 'E-commerce de fotografías',
      company: t('nextProjectPhotosCompany') || 'Freelance',
      location: t('nextProjectPhotosLocation') || 'Colombia',
      description: t('nextProjectPhotosDescription') || 'Desarrollo de un e-commerce de fotografías, implementando el backend en C#, frontend en React y base de datos en SQL Server. Participé en todo el ciclo de vida del proyecto, desde el análisis y diseño hasta la implementación, integración de APIs y despliegue, asegurando la calidad y el correcto funcionamiento de la aplicación.',
      technologies: t('nextProjectPhotosTechnologies') || ['C#', 'React', 'SQL Server'],
      progress: '40%',
      status: t('nextProjectPhotosStatus') || t('inDevelopment') || 'En desarrollo',
    },
  ];

  return (
    <>

      <section id="experience" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 w-full text-blue-950 dark:text-white">
              {t('experienceTitle')}
            </h2>
            {/* Floating Action Buttons (icon-only, con menús desplegables) */}
            <div className="fixed top-32 left-1/2 -translate-x-1/2 flex flex-row gap-2 px-2 mb-10 sm:mb-1 justify-center w-full mx-auto lg:left-4 lg:top-[40%] lg:bottom-auto lg:-translate-x-0 lg:-translate-y-1/2 lg:flex-col lg:w-auto lg:overflow-visible z-50 lg:mt-24">
              <TooltipProvider delayDuration={0}>
                {/* Idiomas */}
                <div className="relative floating-menu">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => setShowLanguages((v) => !v)}
                        className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs px-0 py-0.5"
                        aria-label={t('languages')}
                        type="button"
                      >
                        <Globe className="w-5 h-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">{t('languages')}</TooltipContent>
                  </Tooltip>
                  {showLanguages && (
                    <div className="absolute left-0 top-full mt-2 bg-background border rounded-lg shadow-lg p-4 min-w-[180px] text-left z-50">
                      <div className="font-semibold mb-2">{t('languages')}</div>
                      <ul className="space-y-1 text-sm">
                        {Array.isArray(t('languagesList')) && t('languagesList').map((lang: string, i: number) => (
                          <li key={i}>{lang}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* Aptitudes */}
                <div className="relative floating-menu">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => {
                          setShowSkills((v) => !v);
                          setShowLanguages(false);
                          setShowProjects(false);
                          setShowLinkedin(false);
                          setShowGithub(false);
                          setShowWhatsapp(false);
                        }}
                        className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs px-0 py-0.5"
                        aria-label={t('aptitudesTitle')}
                        type="button"
                      >
                        <Lightbulb className="w-5 h-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">{t('aptitudesTitle')}</TooltipContent>
                  </Tooltip>
                  {showSkills && (
                    <div className="absolute left-0 top-full mt-2 bg-background border rounded-lg shadow-lg p-4 min-w-[200px] text-left z-50">
                      <div className="font-semibold mb-2 tracking-wide">{t('aptitudesTitle')}</div>
                      <ul className="space-y-1 text-sm text-left">
                        {Array.isArray(t('aptitudesList')) && t('aptitudesList').map((apt: string, i: number) => (
                          <li key={i}>• {apt}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* Proyectos */}
                <div className="relative floating-menu">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => {
                          setShowProjects((v) => !v);
                          setShowLanguages(false);
                          setShowSkills(false);
                          setShowLinkedin(false);
                          setShowGithub(false);
                          setShowWhatsapp(false);
                        }}
                        className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs px-0 py-0.5"
                        aria-label={t('projects')}
                        type="button"
                      >
                        <Folder className="w-5 h-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">{t('projects')}</TooltipContent>
                  </Tooltip>
                  {showProjects && (
                    <div className="absolute left-0 top-full mt-2 w-40 bg-background border rounded-lg shadow-lg z-50 flex flex-col">
                      <a
                        href="https://nacho-diez-mma.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm text-foreground hover:bg-primary/10 rounded-t-lg transition-colors"
                      >
                        {t('nachoMmaDiez')}
                      </a>
                      <a
                        href="https://tapizados-full.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm text-foreground hover:bg-primary/10 rounded-b-lg transition-colors"
                      >
                        {t('tapizadosFull')}
                      </a>
                    </div>
                  )}
                </div>
                {/* LinkedIn */}
                <div className="relative floating-menu">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => {
                          setShowLinkedin((v) => !v);
                          setShowLanguages(false);
                          setShowSkills(false);
                          setShowProjects(false);
                          setShowGithub(false);
                          setShowWhatsapp(false);
                        }}
                        className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs gap-2 px-0 py-0.5"
                        aria-label="LinkedIn"
                        type="button"
                      >
                        <Linkedin className="w-5 h-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">LinkedIn</TooltipContent>
                  </Tooltip>
                  {showLinkedin && (
                    <div className="absolute left-0 top-full mt-2 bg-background border rounded-lg shadow-lg p-4 min-w-[180px] text-left z-50">
                      <a
                        href="https://www.linkedin.com/in/leandroalmagrolegnani/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:underline block"
                      >
                        {t('linkedin')}
                      </a>
                    </div>
                  )}
                </div>
                {/* GitHub */}
                <div className="relative floating-menu">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => {
                          setShowGithub((v) => !v);
                          setShowLanguages(false);
                          setShowSkills(false);
                          setShowProjects(false);
                          setShowLinkedin(false);
                          setShowWhatsapp(false);
                        }}
                        className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs gap-2 px-0 py-0.5"
                        aria-label="GitHub"
                        type="button"
                      >
                        <Github className="w-5 h-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">GitHub</TooltipContent>
                  </Tooltip>
                  {showGithub && (
                    <div className="absolute left-0 top-full mt-2 bg-background border rounded-lg shadow-lg p-4 min-w-[180px] text-left z-50">
                      <a
                        href="https://github.com/AlmagroLegnani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:underline block"
                      >
                        {t('github')}
                      </a>
                    </div>
                  )}
                </div>
                {/* WhatsApp */}
                <div className="relative floating-menu">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => {
                          setShowWhatsapp((v) => !v);
                          setShowLanguages(false);
                          setShowSkills(false);
                          setShowProjects(false);
                          setShowLinkedin(false);
                          setShowGithub(false);
                        }}
                        className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs gap-2 px-0 py-0.5"
                        aria-label="WhatsApp"
                        type="button"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">WhatsApp</TooltipContent>
                  </Tooltip>
                  {showWhatsapp && (
                    <div className="absolute left-0 top-full mt-2 bg-background border rounded-lg shadow-lg p-4 min-w-[180px] text-left z-50">
                      <a
                        href="https://wa.me/59892922172"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:underline block"
                      >
                        WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </TooltipProvider>
            </div>
            {/* Timeline and cards */}
            <div className="relative w-full flex flex-col items-center justify-center">
              {/* Timeline line */}
              <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-neutral-300 dark:bg-border"></div>
              <div className="space-y-8 w-full flex flex-col items-center">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex flex-col items-center md:flex-row md:items-center w-full">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>
                    {/* Content */}
                    <div className={`w-full md:w-5/12 flex flex-col items-center ${index % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}`}> 
                      <Card className="hover:shadow-md transition-shadow text-blue-900 bg-gradient-to-br from-primary to-blue-900 dark:bg-white dark:text-blue-900 dark:bg-none dark:border dark:border-blue-900/10 w-full flex flex-col items-center">
                        <CardHeader className="w-full flex flex-col items-center p-4">
                          <div className="flex flex-col items-center w-full">
                            <CardTitle className="text-lg font-bold text-blue-100 dark:text-blue-900 text-center w-full">{exp.title[language]}</CardTitle>
                            <div className="flex items-center gap-2 text-sm text-blue-100 dark:text-blue-900 justify-center w-full mt-2">
                              <Calendar className="w-4 h-4 text-blue-100 dark:text-blue-900" />
                              {exp.period}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-blue-100 dark:text-blue-900 mt-1 justify-center w-full">
                            <MapPin className="w-4 h-4 text-blue-100 dark:text-blue-900" />
                            {exp.company} - {exp.location[language]}
                          </div>
                        </CardHeader>
                        <CardContent className="w-full flex flex-col items-center p-4 pt-0">
                          <p className="text-blue-100 dark:text-blue-900 mb-4 text-sm leading-relaxed text-center w-full">
                            {exp.description[language]}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-2 justify-center w-full">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs bg-blue-900/20 border-blue-100 text-blue-100 dark:bg-blue-900/10 dark:border-blue-900 dark:text-blue-900">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Divisor entre experiencia y próximos lanzamientos */}
  <hr className="my-12 border-t-2 border-border w-full opacity-70" />
      {/* Próximos lanzamientos */}
      <section id="next-projects" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-950 dark:text-white">{t('nextProjectsTitle') || 'Próximos Lanzamientos'}</h2>
            <div className="relative">
              {/* Línea de tiempo vertical */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-neutral-300 dark:bg-border z-0"></div>
              <div className="space-y-16 relative z-10">
                {/* E-commerce de libros (izquierda, barra de progreso a la derecha cruzando la línea) */}
                <div className="flex flex-col md:flex-row items-center md:items-stretch w-full">
                  <div className="relative md:w-1/2 md:pr-2 w-full flex flex-col items-center justify-center">
                    <Card className="bg-gradient-to-br from-primary to-blue-900 text-blue-900 dark:bg-white dark:text-blue-900 dark:bg-none dark:border dark:border-blue-900/10 w-full flex flex-col items-center justify-center">
                      <CardHeader className="w-full flex flex-col items-center justify-center p-4">
                        <div className="flex flex-col gap-1 items-center w-full justify-center">
                          <CardTitle className="text-lg font-bold text-blue-100 dark:text-blue-900 text-center w-full">{nextProjects[0].title}</CardTitle>
                          <span className="text-xs font-semibold text-blue-100 dark:text-blue-900 flex items-center gap-1 justify-center w-full"><MapPin className="w-3 h-3 inline-block mr-1" />{nextProjects[0].company} - {nextProjects[0].location}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="w-full flex flex-col items-center justify-center p-4 pt-0">
                        <p className="mb-2 text-center w-full text-blue-100 dark:text-blue-900">{nextProjects[0].description}</p>
                        <div className="flex flex-wrap gap-1 mb-2 justify-center w-full">
                          {(Array.isArray(nextProjects[0].technologies) ? nextProjects[0].technologies : [nextProjects[0].technologies]).map((tech: string) => (
                            <Badge key={tech} variant="outline" className="text-xs bg-blue-900/20 border-blue-100 text-blue-100 dark:bg-blue-900/10 dark:border-blue-900 dark:text-blue-900">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Barra de progreso verde aún más cerca de la card */}
                  <div className="hidden md:flex flex-col items-center md:w-1/2 md:pl-0 md:justify-center md:mt-0 mt-4">
                    <div className="w-full md:w-1/2 bg-green-100 rounded-full h-3 overflow-hidden">
                      <div className="h-3 bg-green-500 animate-pulse rounded-full transition-all duration-1000" style={{ width: nextProjects[0].progress }}></div>
                    </div>
                    <div className="text-xs mt-1 text-green-700 font-semibold">{nextProjects[0].status}</div>
                  </div>
                </div>
                {/* E-commerce de fotografías (derecha, barra verde a la izquierda alineada a la card) */}
                <div className="flex flex-col md:flex-row items-center md:items-stretch w-full">
                  {/* Barra de progreso verde a la izquierda, alineada a la altura de la card */}
                  <div className="hidden md:flex flex-col items-center md:w-1/2 md:pr-0 md:justify-center md:mt-0 mt-4">
                    <div className="w-full md:w-1/2 bg-green-100 rounded-full h-3 overflow-hidden">
                      <div className="h-3 bg-green-500 animate-pulse rounded-full transition-all duration-1000" style={{ width: nextProjects[1].progress }}></div>
                    </div>
                    <div className="text-xs mt-1 text-green-700 font-semibold">{nextProjects[1].status}</div>
                  </div>
                  <div className="relative md:w-1/2 md:pl-2 w-full flex flex-col items-center justify-center">
                    <Card className="bg-gradient-to-br from-primary to-blue-900 text-blue-900 dark:bg-white dark:text-blue-900 dark:bg-none dark:border dark:border-blue-900/10 w-full flex flex-col items-center justify-center">
                      <CardHeader className="w-full flex flex-col items-center justify-center p-4">
                        <div className="flex flex-col gap-1 items-center w-full justify-center">
                          <CardTitle className="text-lg font-bold text-blue-100 dark:text-blue-900 text-center w-full">{nextProjects[1].title}</CardTitle>
                          <span className="text-xs font-semibold text-blue-100 dark:text-blue-900 flex items-center gap-1 justify-center w-full"><MapPin className="w-3 h-3 inline-block mr-1" />{nextProjects[1].company} - {nextProjects[1].location}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="w-full flex flex-col items-center justify-center p-4 pt-0">
                        <p className="mb-2 text-center w-full text-blue-100 dark:text-blue-900">{nextProjects[1].description}</p>
                        <div className="flex flex-wrap gap-1 mb-2 justify-center w-full">
                          {(Array.isArray(nextProjects[1].technologies) ? nextProjects[1].technologies : [nextProjects[1].technologies]).map((tech: string) => (
                            <Badge key={tech} variant="outline" className="text-xs bg-blue-900/20 border-blue-100 text-blue-100 dark:bg-blue-900/10 dark:border-blue-900 dark:text-blue-900">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;