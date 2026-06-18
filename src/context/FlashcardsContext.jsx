import { createContext, useContext } from "react";
import { useFlashcardsData } from "../hooks/useFlashcardsData";

const FlashcardsContext = createContext(null);

export function FlashcardsProvider({ children }) {
  const data = useFlashcardsData();
  return (
    <FlashcardsContext.Provider value={data}>
      {children}
    </FlashcardsContext.Provider>
  );
}

export function useFlashcards() {
  const context = useContext(FlashcardsContext);
  if (!context) {
    throw new Error("useFlashcards deve ser usado dentro de um FlashcardsProvider");
  }
  return context;
}
