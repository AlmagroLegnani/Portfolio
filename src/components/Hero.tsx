import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github, Globe, Lightbulb, Folder } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  // Cerrar menús al hacer click fuera o al abrir otro
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Si el click es dentro de un menú, no cerrar
      const target = e.target as HTMLElement;
      if (target.closest('.floating-menu')) return;
      setShowLanguages(false);
      setShowSkills(false);
      setShowProjects(false);
    };
    if (showLanguages || showSkills || showProjects) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [showLanguages, showSkills, showProjects]);
  const { t } = useLanguage();
  // Asegura que los datos sean arrays para evitar errores de tipado
  const languagesList = Array.isArray(t('languagesList')) ? (t('languagesList') as unknown as any[]) : [];
  const aptitudesList = Array.isArray(t('aptitudesList')) ? (t('aptitudesList') as unknown as any[]) : [];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 via-background to-secondary/20 pt-20 relative mt-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        {/* ...eliminados círculos decorativos de fondo... */}
        <div className="max-w-5xl mx-auto relative z-10 px-2">
          {/* Botones flotantes: horizontal en móvil (solo iconos sobrios), columna en desktop (icono + texto) */}
          <TooltipProvider delayDuration={0}>
          <div className="fixed top-32 left-1/2 -translate-x-1/2 flex flex-row gap-2 px-2 mb-10 sm:mb-1 justify-center w-full mx-auto lg:left-4 lg:top-[40%] lg:bottom-auto lg:-translate-x-0 lg:-translate-y-1/2 lg:flex-col lg:w-auto lg:overflow-visible z-50">
            {/* Botón Idiomas */}
            <div className="relative floating-menu">
              <Tooltip>
                <TooltipTrigger asChild>
                    <button
                      onClick={() => {
                        setShowLanguages((v) => !v);
                        setShowSkills(false);
                        setShowProjects(false);
                      }}
                      className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs lg:w-36 lg:h-16 lg:text-base px-0 lg:px-3 py-0.5"
                    aria-label={t('languages')}
                  >
                    <span className="block lg:hidden"><Globe className="w-5 h-5" /></span>
                    <span className="hidden lg:inline">{t('languages')}</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">{t('languages')}</TooltipContent>
              </Tooltip>
              {showLanguages && (
                <div className="absolute left-0 top-full mt-2 bg-background border rounded-lg shadow-lg p-4 min-w-[180px] text-left z-50">
                  <div className="font-semibold mb-2">{t('languages')}</div>
                  <ul className="space-y-1 text-sm">
                    {languagesList.map((lang: string, i: number) => (
                      <li key={i}>{lang}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* Botón Aptitudes */}
            <div className="relative floating-menu">
              <Tooltip>
                <TooltipTrigger asChild>
                    <button
                      onClick={() => {
                        setShowSkills((v) => !v);
                        setShowLanguages(false);
                        setShowProjects(false);
                      }}
                      className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs lg:w-36 lg:h-16 lg:text-base px-0 lg:px-3 py-0.5"
                    aria-label={t('aptitudesTitle')}
                  >
                    <span className="block lg:hidden"><Lightbulb className="w-5 h-5" /></span>
                    <span className="hidden lg:inline">{t('aptitudesTitle')}</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">{t('aptitudesTitle')}</TooltipContent>
              </Tooltip>
              {showSkills && (
                <div className="absolute left-0 top-full mt-2 bg-background border rounded-lg shadow-lg p-4 min-w-[200px] text-left z-50">
                  <div className="font-semibold mb-2 tracking-wide">{t('aptitudesTitle')}</div>
                  <ul className="space-y-1 text-sm text-left">
                    {aptitudesList.map((apt: string, i: number) => (
                      <li key={i}>• {apt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* Botón Proyectos */}
            <div className="relative floating-menu">
              <Tooltip>
                <TooltipTrigger asChild>
                    <button
                      onClick={() => {
                        setShowProjects((v) => !v);
                        setShowLanguages(false);
                        setShowSkills(false);
                      }}
                      className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs lg:w-36 lg:h-16 lg:text-base px-0 lg:px-3 py-0.5"
                    type="button"
                    aria-label={t('projects')}
                  >
                    <span className="block lg:hidden"><Folder className="w-5 h-5" /></span>
                    <span className="hidden lg:inline">{t('projects')}</span>
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
            {/* Botón LinkedIn */}
            <div className="relative">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/leandroalmagrolegnani/"
                    target="_blank"
                    rel="noopener noreferrer"
                      className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs gap-2 lg:w-36 lg:h-16 lg:text-base px-0 lg:px-3 py-0.5"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="hidden lg:inline">{t('linkedin')}</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="right">LinkedIn</TooltipContent>
              </Tooltip>
            </div>
            {/* Botón GitHub */}
            <div className="relative">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/AlmagroLegnani"
                    target="_blank"
                    rel="noopener noreferrer"
                      className="bg-blue-950 text-white rounded-full shadow-md hover:bg-sky-400 hover:text-white dark:bg-white dark:text-blue-950 dark:hover:bg-sky-400/80 transition-colors font-semibold flex items-center justify-center w-12 h-12 text-xs gap-2 lg:w-36 lg:h-16 lg:text-base px-0 lg:px-3 py-0.5"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                    <span className="hidden lg:inline">{t('github')}</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="right">GitHub</TooltipContent>
              </Tooltip>
            </div>
          </div>
          </TooltipProvider>
          <div className="mb-8 mt-16 sm:mt-0 md:mt-16 lg:mt-4">
            <img
              src="/img/cv_photo.png"
              alt="Foto de perfil de Leandro Almagro Legnani"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto mb-8 mt-16 sm:mt-0 md:mt-16 lg:mt-4 rounded-full object-cover border-4 border-blue-950 dark:border-white shadow-2xl ring-4 ring-accent/40 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-6 text-blue-950 dark:text-white drop-shadow-lg whitespace-pre-line text-balance">
            {t('profileTitle')}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-8 drop-shadow text-blue-950 dark:text-white">
            {t('profileSubtitle')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('profileDescription')}
          </p>
          {/* Botón Contáctame solo en mobile, debajo del texto y arriba de los botones de CV */}
          <div className="flex sm:hidden justify-center mb-4 w-full">
            <button
              onClick={scrollToContact}
              className="w-full max-w-xs bg-sky-400 text-white text-base font-bold py-2 rounded-full shadow-md hover:bg-sky-500 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t('contactMe') || 'Contáctame'}
            </button>
          </div>
          {/* Botón Contáctame en desktop, arriba de los botones de CV */}
          <div className="hidden sm:flex flex-col gap-4 justify-center items-center mb-8">
            <button
              onClick={scrollToContact}
              className="bg-sky-400 text-white text-lg font-bold py-2 px-6 rounded-full shadow-md hover:bg-sky-500 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t('contactMe') || 'Contáctame'}
            </button>
            <div className="flex flex-row gap-4 justify-center items-center w-full">
              <a href="/AlmagroLegnani_CV.pdf" download target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-blue-950 text-white hover:bg-blue-900 dark:bg-white dark:text-blue-950 dark:hover:bg-blue-200">
                  <Download className="w-5 h-5" />
                  {t('downloadCV')}
                </Button>
              </a>
              <a href="/Escolaridad_AlmagroLegnani.pdf" download target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="w-5 h-5" />
                  {t('escolaridad')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;