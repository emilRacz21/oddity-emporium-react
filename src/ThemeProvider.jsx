import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ThemeContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </ThemeContext.Provider>
  );
}
