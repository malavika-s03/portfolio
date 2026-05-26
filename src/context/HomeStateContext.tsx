import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface HomeStateContextType {
  projectsExpanded: boolean;
  setProjectsExpanded: (expanded: boolean) => void;
  toggleProjectsExpanded: () => void;
}

const HomeStateContext = createContext<HomeStateContextType | undefined>(undefined);

export function HomeStateProvider({ children }: { children: ReactNode }) {
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  const toggleProjectsExpanded = useCallback(() => {
    setProjectsExpanded(prev => !prev);
  }, []);

  return (
    <HomeStateContext.Provider value={{ projectsExpanded, setProjectsExpanded, toggleProjectsExpanded }}>
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
