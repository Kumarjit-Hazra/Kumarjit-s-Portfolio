import React, { useEffect, useState } from 'react';
import { Theme } from '../types';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize state from localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        return Theme.LIGHT;
      } else if (savedTheme === 'dark') {
        return Theme.DARK;
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return Theme.LIGHT;
      }
    }
    return Theme.DARK;
  });

  useEffect(() => {
    // Apply the theme to the DOM on mount and when theme changes
    const root = document.documentElement;
    
    if (theme === Theme.LIGHT) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <button
      onClick={toggleTheme}
      className="group flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle Theme"
    >
      <span className="font-mono text-[10px] uppercase text-zinc-400 group-hover:text-nothing-red transition-colors">
        Theme
      </span>
      
      {/* Toggle Switch */}
      <div className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
        theme === Theme.DARK 
          ? 'bg-nothing-red' 
          : 'bg-zinc-300'
      }`}>
        {/* Toggle Circle */}
        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
          theme === Theme.DARK 
            ? 'translate-x-5' 
            : 'translate-x-0'
        }`} />
      </div>
    </button>
  );
};