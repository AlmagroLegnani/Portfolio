import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Moon, Sun, Menu, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'nextProjects', href: '#next-projects' },
    { key: 'contact', href: '#contact' }
  ];

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'en', name: 'English' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-blue-900 dark:border-blue-900">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center gap-3 flex-1 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/img/Logo_Official.png" alt="Logo" className="h-16 w-16 object-contain rounded-full border-4 border-blue-950 dark:border-white shadow-lg transition-transform duration-300 hover:scale-110" />
          <span className="text-2xl font-extrabold text-blue-950 dark:text-white drop-shadow-lg tracking-wide">Almagro Dev</span>
        </div>

        {/* Idioma y modo nocturno/diurno al centro */}
  <TooltipProvider delayDuration={0}>
    <div className="hidden md:flex items-center gap-6 flex-1 md:justify-start lg:justify-center">
      <DropdownMenu>
        <Tooltip>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="text-blue-950 dark:text-white flex items-center justify-center hover:text-sky-400" aria-label={t('languages')}>
                <Globe className="h-7 w-7" />
              </Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <TooltipContent side="bottom">{t('selectLanguage')}</TooltipContent>
        </Tooltip>
        <DropdownMenuContent>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code as 'es' | 'pt' | 'en')}
              className={language === lang.code ? 'bg-accent' : ''}
            >
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-blue-950 dark:text-white flex items-center justify-center hover:text-sky-400" aria-label={theme === 'light' ? t('darkMode') : t('lightMode')}>
            {theme === 'light' ? <Moon className="h-7 w-7" /> : <Sun className="h-7 w-7" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{theme === 'light' ? t('darkMode') : t('lightMode')}</TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>

        {/* Navegación a la derecha */}
  <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-end">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.href)}
              className={
                `text-blue-950/90 dark:text-white hover:text-sky-400 dark:hover:text-sky-400 transition-colors font-semibold ` +
                (item.key === 'about' && (language === 'es' || language === 'pt') ? 'whitespace-nowrap' : '')
              }
            >
              {item.key === 'nextProjects' ? t('nextProjectsTitle') : t(item.key)}
            </button>
          ))}
        </nav>

        {/* Mobile Controls */}
  <div className="flex lg:hidden items-center">
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="flex items-center justify-center">
          <Menu className="h-10 w-10" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-4 mt-8">
          <div className="flex flex-row items-center gap-4 mb-8 justify-center">
            {/* Selector de idioma con tooltip */}
            <TooltipProvider delayDuration={0}>
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-blue-950 dark:text-white flex items-center justify-center hover:text-sky-400" aria-label={t('languages')}>
                        <Globe className="h-7 w-7" />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">{t('selectLanguage')}</TooltipContent>
                </Tooltip>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as 'es' | 'pt' | 'en')}
                      className={language === lang.code ? 'bg-accent' : ''}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Botón modo oscuro/claro con tooltip */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-blue-950 dark:text-white flex items-center justify-center hover:text-sky-400" aria-label={theme === 'light' ? t('darkMode') : t('lightMode')}>
                    {theme === 'light' ? <Moon className="h-7 w-7" /> : <Sun className="h-7 w-7" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">{theme === 'light' ? t('darkMode') : t('lightMode')}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-foreground/70 hover:text-sky-400 transition-colors py-2"
              >
                {item.key === 'nextProjects' ? t('nextProjectsTitle') : t(item.key)}
              </button>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  </div>
      </div>
    </header>
  );
};

export default Header;