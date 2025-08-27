import { Linkedin, Github, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  // Log temporal para depuración
  // eslint-disable-next-line no-console
  console.log('Idioma actual:', language, 'footerRights:', t('footerRights'));

  return (
  <footer className="bg-gradient-to-t from-primary/80 to-background border-t py-4">
    <div className="container mx-auto px-4 flex flex-col gap-4">
      <div className="flex flex-col items-center md:flex-row md:items-center w-full md:w-auto justify-center md:justify-start gap-2 md:gap-4">
        <a href="#" aria-label="Inicio">
          <img src="/img/Logo_Official.png" alt="Logo" className="h-20 w-20 md:h-16 md:w-16 object-contain rounded-full shadow-lg border-2 border-white/40 cursor-pointer" />
        </a>
        <p className="text-sm md:text-base text-[#17223b] font-semibold tracking-wide whitespace-nowrap text-center md:text-left">
          {t('footerRights').replace('{year}', new Date().getFullYear().toString())}
        </p>
      </div>
      {/* Redes sociales siempre abajo en mobile, a la derecha en desktop */}
      <div className="flex gap-5 w-full md:w-auto justify-center md:justify-end mt-2 md:mt-0">
        <a href="https://www.linkedin.com/in/leandroalmagro/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://github.com/leandroalmagro" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="mailto:leandroalmagro@gmail.com" aria-label="Email" className="hover:text-accent transition-colors">
          <Mail className="w-6 h-6" />
        </a>
        <a href="https://wa.me/59892922172" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.421h-.001a8.933 8.933 0 0 1-4.548-1.252l-.326-.194-3.377.893.902-3.292-.213-.338a8.922 8.922 0 0 1-1.37-4.725c.001-4.936 4.011-8.946 8.949-8.946 2.389 0 4.637.933 6.324 2.623a8.842 8.842 0 0 1 2.624 6.321c-.003 4.938-4.013 8.948-8.949 8.948m7.437-16.366A10.92 10.92 0 0 0 12.05 0C5.495 0 .003 5.491 0 12.244c0 2.159.566 4.268 1.637 6.115L.057 24l6.313-1.654a11.93 11.93 0 0 0 5.683 1.447h.005c6.555 0 11.847-5.491 11.85-12.244a11.9 11.9 0 0 0-3.487-8.485"/></svg>
        </a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;