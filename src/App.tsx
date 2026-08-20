import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { HomeStateProvider } from '@/context/HomeStateContext';
import { SmoothScroll } from '@/components/shared/SmoothScroll';
import { Header } from '@/components/layout/Header';
import { HomePage } from '@/pages/Home';
import { ProjectPage } from '@/pages/Project';
import { YuluCaseStudyPage } from '@/pages/YuluCaseStudy';
import { ArtiumCaseStudyPage } from '@/pages/ArtiumCaseStudy';
import { VectorVaultCaseStudyPage } from '@/pages/VectorVaultCaseStudy';
import { DistrictCaseStudyPage } from '@/pages/DistrictCaseStudy';
import { ZohoCaseStudyPage } from '@/pages/ZohoCaseStudy';
import { PeakmindCaseStudyPage } from '@/pages/PeakmindCaseStudy';
import { PeakmindCmsStudyPage } from '@/pages/PeakmindCmsStudy';
import { NotFoundPage } from '@/pages/NotFound';

// job-tracker dashboard — lazily loaded, fully isolated (see job-tracker/docs/03-dashboard.md).
// Nothing in src/pages/Tracker/ is statically imported, so it never enters the main bundle.
// To remove the tracker: delete src/pages/Tracker/ + this lazy line + the /tracker <Route> below.
const TrackerPage = lazy(() => import('@/pages/Tracker'));
const TrackerFallback = () => (
  <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#141418', color: '#6f6f7d', fontSize: 14 }}>
    Loading…
  </div>
);

// The portfolio shell: providers + Lenis smooth-scroll + Header, with routes rendered via <Outlet/>.
// HomePage stays mounted across navigation — hidden, not unmounted — so its DOM and already-decoded
// images are preserved and returning is instant (no image reload/flash); other routes render on top.
function PortfolioLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <ThemeProvider>
      <HomeStateProvider>
        <SmoothScroll>
          <Header />
          <div style={{ display: isHome ? undefined : 'none' }}>
            <HomePage />
          </div>
          <Outlet />
        </SmoothScroll>
      </HomeStateProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone tool — outside the portfolio shell (no Header, no Lenis). */}
        <Route
          path="/tracker"
          element={
            <Suspense fallback={<TrackerFallback />}>
              <TrackerPage />
            </Suspense>
          }
        />

        {/* Portfolio — wrapped in the shell layout route. */}
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={null} />
          <Route path="/project/artium" element={<ArtiumCaseStudyPage />} />
          <Route path="/project/yulu" element={<YuluCaseStudyPage />} />
          <Route path="/project/vector-vault" element={<VectorVaultCaseStudyPage />} />
          <Route path="/project/district" element={<DistrictCaseStudyPage />} />
          <Route path="/project/zoho" element={<ZohoCaseStudyPage />} />
          <Route path="/work/peakmind-student" element={<PeakmindCaseStudyPage />} />
          <Route path="/work/peakmind-cms" element={<PeakmindCmsStudyPage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
