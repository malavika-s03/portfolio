import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { SmoothScroll } from '@/components/shared/SmoothScroll';
import { Header } from '@/components/layout/Header';
import { PageTransition } from '@/components/layout/PageTransition';
import { CustomCursor } from '@/components/shared/CustomCursor';
import { HomePage } from '@/pages/Home';
import { ProjectPage } from '@/pages/Project';
import { NotFoundPage } from '@/pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:slug" element={<ProjectPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageTransition>
        </SmoothScroll>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
