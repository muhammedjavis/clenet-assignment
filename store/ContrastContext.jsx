/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isHighContrast, toggleContrast }}>
      {children}
    </ThemeContext.Provider>
  );
};
