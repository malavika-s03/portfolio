import { Hero } from '@/components/sections/Hero';
import { InfoBar } from '@/components/sections/InfoBar';
import { Projects } from '@/components/sections/Projects';
import { Footer } from '@/components/layout/Footer';

export function HomePage() {
  return (
    <main>
      <Hero />
      <InfoBar />
      <Projects />
      <Footer />
    </main>
  );
}

export default HomePage;
