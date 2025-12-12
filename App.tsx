import React, { useState, useEffect } from 'react';
import { BentoGrid } from './components/BentoGrid';
import { CustomCursor } from './components/CustomCursor';
import { DockNav } from './components/DockNav';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'WELCOME TO MY PORTFOLIO';

  useEffect(() => {
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    // Show splash screen first
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    // Then load the main content
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 3500);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(splashTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 overflow-x-hidden relative">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-50 mix-blend-overlay"></div>
      
      <CustomCursor />
      <DockNav />
      
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ scaleY: 0.005, scaleX: 0, opacity: 0, filter: 'brightness(5)' }}
            animate={{ scaleY: 1, scaleX: 1, opacity: 1, filter: 'brightness(1)' }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              scaleX: { delay: 0.2, duration: 0.4 },
              filter: { duration: 0.8, delay: 0.2 }
            }}
            className="w-full max-w-7xl mx-auto z-10 relative pb-32" 
          >
            {/* Header */}
            <header className="flex justify-between items-end mb-3 px-2 border-b-2 border-zinc-900 dark:border-zinc-800 pb-4 relative">
              <div className="flex flex-col w-full">
                 <motion.div
                   initial={{ x: -20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.6 }}
                   className="flex justify-between items-start w-full"
                 >
                    <h1 className="text-4xl sm:text-6xl font-dot font-bold uppercase tracking-tighter leading-none hover:text-nothing-red transition-colors cursor-default selection:bg-black selection:text-nothing-red">
                      K u m a r j i t <span className="text-zinc-400 dark:text-zinc-600"></span>
                    </h1>
                 </motion.div>
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.8 }}
                   className="flex items-center gap-2 mt-2"
                >
                  <div className="w-2 h-2 bg-nothing-red animate-pulse"></div>
                  <p className="text-zinc-500 dark:text-zinc-500 text-xs font-mono uppercase tracking-widest">
                    System.Online /// Ready to Build
                  </p>
                </motion.div>
              </div>
              
              {/* Decorative Corner marks */}
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-black dark:bg-white"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black dark:bg-white"></div>
            </header>

            <main className="mt-8 sm:mt-12">
              <BentoGrid />
            </main>

            <footer className="mt-16 flex flex-col items-center gap-6 py-8 border-t-2 border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-col sm:flex-row justify-between items-center text-zinc-400 text-[10px] font-mono uppercase tracking-wider gap-4 w-full">
                <div className="flex gap-4">
                  {/* <span>Latency: 12ms</span>
                  <span>Region: US-WEST</span> */}
                </div>
                <p>&copy; {new Date().getFullYear()} Kumarjit</p>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-zinc-500 dark:text-zinc-400 text-sm font-mono"
              >
                Built with ❤️ by Kumarjit
              </motion.p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center z-[100]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-center gap-4"
            >
              {/* Typing Text */}
              <h1 className="font-dot text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1 w-3 h-8 md:h-12 bg-nothing-red"
                />
              </h1>
              
              {/* Red accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="h-1 bg-nothing-red"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;