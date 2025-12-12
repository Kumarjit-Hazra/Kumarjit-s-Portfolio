import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { Home, Github, Linkedin, Instagram, Sun, Moon } from 'lucide-react';
import { Theme } from '../types';
import { SOCIALS } from '../constants';

// Custom X Logo Component
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Icon mapping
const IconMap: Record<string, any> = {
  Github,
  X: XLogo,
  Linkedin,
  Instagram
};

// Link configuration: Home + Social Links from constants
const DATA = [
  { id: 1, icon: Home, label: 'Home', action: 'scroll-top' },
  ...SOCIALS.map((social, index) => ({
    id: index + 2,
    icon: IconMap[social.icon] || Github,
    label: social.platform,
    href: social.url
  }))
];

interface DockIconProps {
  mouseX: MotionValue;
  item: any;
  onClick?: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({ 
    mouseX, 
    item, 
    onClick 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Apple-style magnification curve
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [45, 90, 45]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="group relative flex aspect-square cursor-none items-center justify-center rounded-2xl bg-zinc-50/50 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-sm hover:bg-white dark:hover:bg-white/20 transition-colors"
      onClick={() => {
        if (item.action === 'scroll-top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (onClick) onClick();
      }}
    >
      <a 
        href={item.href} 
        target={item.href?.startsWith('http') ? '_blank' : undefined}
        rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="flex h-full w-full items-center justify-center"
        onClick={(e) => {
             if (!item.href) e.preventDefault();
        }}
      >
        {/* Render Icon (Component or Lucide Icon) */}
        {typeof item.icon === 'function' ? (
           // Check if it's a component like XLogo or Lucide Icon
           <item.icon className="w-1/2 h-1/2 text-zinc-800 dark:text-zinc-200 group-hover:text-nothing-red transition-colors duration-200" strokeWidth={1.5} />
        ) : (
           <item.icon className="w-1/2 h-1/2 text-zinc-800 dark:text-zinc-200 group-hover:text-nothing-red transition-colors duration-200" strokeWidth={1.5} />
        )}
      </a>
      
      {/* Tooltip - Apple Style */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none scale-0 group-hover:scale-100 origin-bottom">
          <div className="bg-zinc-900/80 dark:bg-white/90 backdrop-blur-md text-white dark:text-black text-[10px] px-3 py-1.5 rounded-lg font-medium shadow-lg whitespace-nowrap">
            {item.label}
          </div>
          <div className="w-2 h-2 bg-zinc-900/80 dark:bg-white/90 backdrop-blur-md rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
      </div>
      
      {/* Active Dot - Nothing Style (Red Square) */}
      {item.label === 'Home' && (
          <div className="absolute -bottom-1.5 w-1 h-1 bg-nothing-red rounded-none"></div>
      )}
    </motion.div>
  );
};

export const DockNav: React.FC = () => {
  const mouseX = useMotionValue(Infinity);
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setTheme(Theme.LIGHT);
    } else {
      setTheme(Theme.DARK);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      setTheme(Theme.DARK);
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90vw]">
      {/* Glass Container - Apple Style */}
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-20 items-end gap-3 rounded-[32px] bg-white/70 dark:bg-black/40 px-4 pb-4 border border-white/20 dark:border-white/10 backdrop-blur-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/5"
      >
        {DATA.map((item) => (
          <DockIcon 
            key={item.id} 
            mouseX={mouseX} 
            item={item} 
          />
        ))}
        
        {/* Vertical Divider */}
        <div className="h-8 w-[1px] bg-zinc-300 dark:bg-zinc-700 mx-1 mb-4 rounded-full" />
        
        {/* Theme Toggle */}
        <DockIcon 
            key="theme-toggle" 
            mouseX={mouseX} 
            item={{ 
                id: 99, 
                icon: theme === Theme.DARK ? Sun : Moon, 
                label: theme === Theme.DARK ? 'Light Mode' : 'Dark Mode',
                action: 'theme'
            }} 
            onClick={toggleTheme}
        />
      </motion.div>
    </div>
  );
};