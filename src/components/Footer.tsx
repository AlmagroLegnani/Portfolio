import { Linkedin, Github, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  // Log temporal para depuración
  // eslint-disable-next-line no-console
  console.log('Idioma actual:', language, 'footerRights:', t('footerRights'));

  return (
  <footer className="bg-gradient-to-t from-primary/80 to-background border-t py-4">
      <div className="container mx-auto px-4">
  <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full gap-4">
          {/* Logo y texto juntos a la izquierda */}
          <div className="flex items-center w-full md:w-auto justify-center md:justify-start gap-4">
            <a href="#" aria-label="Inicio">
              <img src="/img/Logo_Official.png" alt="Logo" className="h-16 w-16 object-contain rounded-full shadow-lg border-2 border-white/40 cursor-pointer" />
            </a>
            <p className="text-sm md:text-base text-[#17223b] font-semibold tracking-wide whitespace-nowrap">
              {t('footerRights').replace('{year}', new Date().getFullYear().toString())}
            </p>
          </div>
          {/* Redes a la derecha */}
          <div className="flex gap-5 w-full md:w-auto justify-center md:justify-end">
            <a href="https://www.linkedin.com/in/leandroalmagro/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/leandroalmagro" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:leandroalmagro@gmail.com" aria-label="Email" className="hover:text-accent transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;