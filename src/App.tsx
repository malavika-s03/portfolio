import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { HomeStateProvider } from '@/context/HomeStateContext';
import { SmoothScroll } from '@/components/shared/SmoothScroll';
import { Header } from '@/components/layout/Header';
import { PageTransition } from '@/components/layout/PageTransition';
import { HomePage } from '@/pages/Home';
import { ProjectPage } from '@/pages/Project';
import { YuluCaseStudyPage } from '@/pages/YuluCaseStudy';
import { VectorVaultCaseStudyPage } from '@/pages/VectorVaultCaseStudy';
import { DistrictCaseStudyPage } from '@/pages/DistrictCaseStudy';
import { ZohoCaseStudyPage } from '@/pages/ZohoCaseStudy';
import { PeakmindCaseStudyPage } from '@/pages/PeakmindCaseStudy';
import { PeakmindCmsStudyPage } from '@/pages/PeakmindCmsStudy';
import { NotFoundPage } from '@/pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <HomeStateProvider>
      <BrowserRouter>
        <SmoothScroll>
          <Header />
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/yulu" element={<YuluCaseStudyPage />} />
              <Route path="/project/vector-vault" element={<VectorVaultCaseStudyPage />} />
              <Route path="/project/district" element={<DistrictCaseStudyPage />} />
              <Route path="/project/zoho" element={<ZohoCaseStudyPage />} />
              <Route path="/work/peakmind-student" element={<PeakmindCaseStudyPage />} />
              <Route path="/work/peakmind-cms" element={<PeakmindCmsStudyPage />} />
              <Route path="/project/:slug" element={<ProjectPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageTransition>
        </SmoothScroll>
      </BrowserRouter>
      </HomeStateProvider>
    </ThemeProvider>
  );
}

export default App;
