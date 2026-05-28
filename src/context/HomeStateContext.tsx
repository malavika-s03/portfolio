import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface HomeStateContextType {
  projectsExpanded: boolean;
  setProjectsExpanded: (expanded: boolean) => void;
  toggleProjectsExpanded: () => void;
  hasVisitedHome: boolean;
  markHomeVisited: () => void;
  skipAnimation: (props: Record<string, unknown>) => Record<string, unknown>;
}

const HomeStateContext = createContext<HomeStateContextType | undefined>(undefined);

export function HomeStateProvider({ children }: { children: ReactNode }) {
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [hasVisitedHome, setHasVisitedHome] = useState(false);

  const toggleProjectsExpanded = useCallback(() => {
    setProjectsExpanded(prev => !prev);
  }, []);

  const markHomeVisited = useCallback(() => {
    setHasVisitedHome(true);
  }, []);

  const skipAnimation = useCallback(
    (props: Record<string, unknown>) => hasVisitedHome ? {} : props,
    [hasVisitedHome],
  );

  return (
    <HomeStateContext.Provider value={{ projectsExpanded, setProjectsExpanded, toggleProjectsExpanded, hasVisitedHome, markHomeVisited, skipAnimation }}>
      {children}
    </HomeStateContext.Provider>
  );
}

export function useHomeState() {
  const context = useContext(HomeStateContext);
  if (context === undefined) {
    throw new Error('useHomeState must be used within a HomeStateProvider');
  }
  return context;
}
