import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '59892922172';
    const text = `Hola, soy ${formData.name}. Mi email es ${formData.email}. ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900 dark:text-white">
            {t('contactTitle')}
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-blue-900 dark:text-white">
            {t('contactDescription')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 flex flex-col items-center justify-center text-center sm:items-start sm:justify-start sm:text-left">
              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 text-center sm:text-left mx-auto sm:w-full">
                <div className="w-12 min-w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto sm:mx-0 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-y-0.5 w-full sm:text-left">
                  <h3 className="font-semibold text-center sm:text-left w-full text-blue-900 dark:text-white">{t('contactEmail')}</h3>
                  <a
                    href={`mailto:${t('contactEmailValue')}`}
                    className="text-muted-foreground hover:text-sky-400 transition-colors text-center sm:text-left w-full"
                  >
                    {t('contactEmailValue')}
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 text-center sm:text-left mx-auto sm:w-full">
                <div className="w-12 min-w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto sm:mx-0 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-y-0.5 w-full sm:text-left">
                  <h3 className="font-semibold text-center sm:text-left w-full text-blue-900 dark:text-white">{t('contactPhone')}</h3>
                  <a
                    href={`tel:${t('contactPhoneValue')}`}
                    className="text-muted-foreground hover:text-sky-400 transition-colors text-center sm:text-left w-full"
                  >
                    {t('contactPhoneValue')}
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 text-center sm:text-left mx-auto sm:w-full">
                <div className="w-12 min-w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto sm:mx-0 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-y-0.5 w-full sm:text-left">
                  <h3 className="font-semibold text-center sm:text-left w-full text-blue-900 dark:text-white">{t('contactLocation')}</h3>
                  <p className="text-muted-foreground text-center sm:text-left w-full">
                    {t('contactLocationValue')}
                  </p>
                </div>
              </div>
              
              <div className="pt-6 flex flex-col items-center w-full">
                <h3 className="font-semibold mb-4 text-center w-full text-blue-900 dark:text-white">{t('contactFollow')}</h3>
                <div className="flex space-x-4 justify-center w-full">
                  <a href="https://www.linkedin.com/in/leandroalmagrolegnani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:border-sky-400 hover:bg-sky-50 group">
                    <Linkedin className="w-5 h-5 text-primary group-hover:text-sky-400 transition-colors" />
                  </a>
                  <a href="https://github.com/leandroalmagro" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:border-sky-400 hover:bg-sky-50 group">
                    <Github className="w-5 h-5 text-primary group-hover:text-sky-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <Card className="flex flex-col items-center justify-center w-full">
              <CardHeader className="w-full flex flex-col items-center justify-center">
                <CardTitle className="text-center w-full">{t('contactSendMeMessage')}</CardTitle>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col items-center justify-center">
                  <div className="w-full">
                    <Input
                      name="name"
                      placeholder={t('contactYourName')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full text-center"
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      name="email"
                      type="email"
                      placeholder={t('contactYourEmail')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full text-center"
                    />
                  </div>
                  <div className="w-full">
                    <Textarea
                      name="message"
                      placeholder={t('contactYourMessage')}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full text-center"
                    />
                  </div>
                  <Button type="submit" className="w-full flex items-center justify-center bg-blue-950 text-white font-bold text-base py-2 rounded-full shadow-md transition-colors hover:bg-blue-900 dark:bg-white dark:text-blue-950 dark:hover:bg-blue-200">
                    <Send className="w-4 h-4 mr-2" />
                    {t('contactSendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;