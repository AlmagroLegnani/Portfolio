
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Separator className="my-12 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-80" />
        <About />
        <Separator className="my-12 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-80" />
        <Experience />
        <Separator className="my-12 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-80" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
