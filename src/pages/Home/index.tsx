import { Hero } from '@/components/sections/Hero';
import { InfoBar } from '@/components/sections/InfoBar';
import { Projects } from '@/components/sections/Projects';
import { WorkExperience } from '@/components/sections/WorkExperience';
import { Footer } from '@/components/layout/Footer';

export function HomePage() {
  return (
    <main>
      <Hero />
      <InfoBar />
      <Projects />
      <WorkExperience />
      <Footer />
    </main>
  );
}

export default HomePage;
