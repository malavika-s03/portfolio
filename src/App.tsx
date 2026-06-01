import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { HomeStateProvider } from '@/context/HomeStateContext';
import { SmoothScroll } from '@/components/shared/SmoothScroll';
import { Header } from '@/components/layout/Header';
import { HomePage } from '@/pages/Home';
import { ProjectPage } from '@/pages/Project';
import { YuluCaseStudyPage } from '@/pages/YuluCaseStudy';
import { VectorVaultCaseStudyPage } from '@/pages/VectorVaultCaseStudy';
import { DistrictCaseStudyPage } from '@/pages/DistrictCaseStudy';
import { ZohoCaseStudyPage } from '@/pages/ZohoCaseStudy';
import { PeakmindCaseStudyPage } from '@/pages/PeakmindCaseStudy';
import { PeakmindCmsStudyPage } from '@/pages/PeakmindCmsStudy';
import { NotFoundPage } from '@/pages/NotFound';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header />

      {/* HomePage stays mounted across navigation — hidden, not unmounted — so its
          DOM and already-decoded images are preserved and returning is instant
          (no image reload/flash). Other routes render on top via <Routes>. */}
      <div style={{ display: isHome ? undefined : 'none' }}>
        <HomePage />
      </div>

      <Routes>
        <Route path="/" element={null} />
        <Route path="/project/yulu" element={<YuluCaseStudyPage />} />
        <Route path="/project/vector-vault" element={<VectorVaultCaseStudyPage />} />
        <Route path="/project/district" element={<DistrictCaseStudyPage />} />
        <Route path="/project/zoho" element={<ZohoCaseStudyPage />} />
        <Route path="/work/peakmind-student" element={<PeakmindCaseStudyPage />} />
        <Route path="/work/peakmind-cms" element={<PeakmindCmsStudyPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <HomeStateProvider>
        <BrowserRouter>
          <SmoothScroll>
            <AppContent />
          </SmoothScroll>
        </BrowserRouter>
      </HomeStateProvider>
    </ThemeProvider>
  );
}

export default App;
