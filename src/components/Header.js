import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed currentColor', paddingBottom: '10px' }}>
      <h2>Mini Task Manager</h2>
      <button onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        {isDark ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}