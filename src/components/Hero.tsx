import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github, Globe, Lightbulb, Folder } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
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
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 via-background to-secondary/20 pt-20 relative mt-16">
      <div className="container mx-auto px-4 text-center relative">
        {/* ...eliminados círculos decorativos de fondo... */}
        <div className="max-w-5xl mx-auto relative z-10 px-2">
          {/* Botones flotantes eliminados como se solicitó */}
          <div className="mb-8 mt-16 sm:mt-0 md:mt-16 lg:mt-4">
            <img
              src="/img/cv_photo.png"
              alt="Foto de perfil de Leandro Almagro Legnani"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto mb-8 mt-16 rounded-full object-cover border-4 border-blue-950 dark:border-white shadow-2xl ring-4 ring-accent/40 hover:scale-105 transition-transform duration-300"
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
          {/* Botones de descarga siempre visibles, prolijos arriba del botón Contáctame */}
          <div className="flex flex-col gap-4 justify-center items-center mb-8 w-full">
            <div className="flex flex-row gap-4 justify-center items-center w-full mb-2">
              <a href="/cv/Leandro_Almagro_CV.pdf" download target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-blue-950 text-white hover:bg-blue-900 dark:bg-white dark:text-blue-950 dark:hover:bg-blue-200 w-full max-w-xs sm:max-w-none">
                  <Download className="w-5 h-5" />
                  {t('downloadCV')}
                </Button>
              </a>
              <a href="/cv/Escolaridad.pdf" download target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 w-full max-w-xs sm:max-w-none">
                  <Download className="w-5 h-5" />
                  {t('escolaridad')}
                </Button>
              </a>
            </div>
            <button
              onClick={scrollToContact}
              className="w-full max-w-[190px] sm:max-w-xs lg:max-w-xs bg-sky-400 text-white text-base sm:text-lg font-bold py-2 px-6 rounded-full shadow-md hover:bg-sky-500 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t('contactMe') || 'Contáctame'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;