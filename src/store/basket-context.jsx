import { createContext, useState } from "react";
export const BasketContext = createContext();
export default function BasketProvider({ children }) {
  const [value, setValue] = useState({
    value: 0.0,
    items: 0,
  });
  return (
    <BasketContext.Provider value={{ value, setValue }}>
      {children}
    </BasketContext.Provider>
  );
}
