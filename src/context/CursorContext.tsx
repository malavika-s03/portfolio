import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CursorVariant, CursorState } from '@/types';

interface CursorContextType {
  cursorState: CursorState;
  setCursorVariant: (variant: CursorVariant) => void;
  setCursorText: (text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorState, setCursorState] = useState<CursorState>({
    variant: 'default',
    text: undefined,
  });

  const setCursorVariant = (variant: CursorVariant) => {
    setCursorState(prev => ({ ...prev, variant }));
  };

  const setCursorText = (text?: string) => {
    setCursorState(prev => ({ ...prev, text, variant: text ? 'text' : prev.variant }));
  };

  const resetCursor = () => {
    setCursorState({ variant: 'default', text: undefined });
  };

  return (
    <CursorContext.Provider value={{ cursorState, setCursorVariant, setCursorText, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}
