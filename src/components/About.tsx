import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    'C#', '.NET', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'React', 'SQL Server', 'MongoDB Compass', 'Git', 'GitHub'
  ];
  const strengths = t('strengthsList') || [];
  const objectives = t('objectivesList') || [];

  return (
  <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 dark:text-white">
            {t('aboutTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="flex flex-col items-center w-full">
              <p className="text-lg mb-6 leading-relaxed text-center w-full text-blue-900 dark:text-white">
                {t('aboutDescription')}
              </p>
              <div className="space-y-4 w-full flex flex-col items-center">
                <h3 className="text-xl font-semibold text-center w-full text-blue-900 dark:text-white">{t('skillsTitle')}</h3>
                <div className="flex flex-wrap gap-2 justify-center w-full">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-primary to-blue-900 text-blue-900 dark:bg-white dark:text-blue-900 dark:bg-none dark:border dark:border-blue-900/10 flex flex-col items-center w-full">
              <CardContent className="p-6 text-blue-900 dark:text-blue-900 flex flex-col items-center w-full">
                <div className="space-y-4 w-full flex flex-col items-center">
                  <div className="w-full flex flex-col items-center">
                    <span className="text-xl font-bold text-blue-100 dark:text-blue-900 text-center w-full">{t('strengthsTitle')}</span>
                    <ul className="list-disc list-inside text-blue-100 dark:text-blue-900 mt-2 text-center w-full">
                      {Array.isArray(strengths) && strengths.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <span className="text-xl font-bold text-blue-100 dark:text-blue-900 text-center w-full">{t('objectivesTitle')}</span>
                    <ul className="list-disc list-inside text-blue-100 dark:text-blue-900 mt-2 text-center w-full">
                      {Array.isArray(objectives) && objectives.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;