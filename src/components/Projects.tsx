import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: {
        es: 'Plataforma de comercio electrónico completa con sistema de pagos, inventario y panel de administración.',
        pt: 'Plataforma de comércio eletrônico completa com sistema de pagamentos, inventário e painel administrativo.',
        en: 'Complete e-commerce platform with payment system, inventory management and admin panel.'
      },
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      date: '2023',
      featured: true
    },
    {
      title: 'Task Management App',
      description: {
        es: 'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.',
        pt: 'Aplicação de gerenciamento de tarefas com colaboração em tempo real e notificações push.',
        en: 'Task management application with real-time collaboration and push notifications.'
      },
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'MongoDB', 'PWA'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      date: '2023',
      featured: true
    },
    {
      title: 'Weather Analytics Dashboard',
      description: {
        es: 'Dashboard de análisis meteorológico con visualizaciones interactivas y predicciones.',
        pt: 'Dashboard de análise meteorológica com visualizações interativas e previsões.',
        en: 'Weather analytics dashboard with interactive visualizations and predictions.'
      },
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      date: '2022',
      featured: false
    },
    {
      title: 'Social Media Platform',
      description: {
        es: 'Red social con sistema de posts, likes, comentarios y chat en tiempo real.',
        pt: 'Rede social com sistema de posts, likes, comentários e chat em tempo real.',
        en: 'Social media platform with posts system, likes, comments and real-time chat.'
      },
      technologies: ['Next.js', 'Prisma', 'WebRTC', 'Redis', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      date: '2022',
      featured: false
    },
    {
      title: 'Learning Management System',
      description: {
        es: 'Sistema de gestión de aprendizaje con cursos, evaluaciones y seguimiento de progreso.',
        pt: 'Sistema de gerenciamento de aprendizagem com cursos, avaliações e acompanhamento de progresso.',
        en: 'Learning management system with courses, assessments and progress tracking.'
      },
      technologies: ['Angular', 'NestJS', 'TypeORM', 'MySQL', 'JWT'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      date: '2021',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: {
        es: 'Sitio web personal con blog, portfolio y sistema de contacto.',
        pt: 'Site pessoal com blog, portfólio e sistema de contato.',
        en: 'Personal website with blog, portfolio and contact system.'
      },
      technologies: ['Gatsby', 'GraphQL', 'Netlify CMS', 'Sass'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      date: '2021',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 w-full">{t('projectsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, idx) => (
            <Card key={idx} className="flex flex-col h-full items-center w-full">
              <CardHeader className="w-full flex flex-col items-center">
                <CardTitle className="text-center w-full">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2 justify-center w-full">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-between items-center w-full">
                <p className="mb-4 text-center w-full">{project.description[language]}</p>
                <div className="flex flex-col sm:flex-row items-center justify-between mt-auto w-full gap-2">
                  <div className="flex gap-2 justify-center w-full">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver online" className="hover:text-sky-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-sky-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 justify-center w-full">
                    <Calendar className="w-4 h-4" /> {project.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;