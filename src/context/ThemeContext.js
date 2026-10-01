import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div style={{
        background: isDark ? '#222' : '#fff',
        color: isDark ? '#fff' : '#000',
        minHeight: '100vh',
        fontFamily: 'monospace',
        padding: '20px'
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}