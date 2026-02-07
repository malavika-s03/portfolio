import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { About } from '@/components/sections/About';
import { Footer } from '@/components/layout/Footer';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Footer />
    </main>
  );
}

export default HomePage;
