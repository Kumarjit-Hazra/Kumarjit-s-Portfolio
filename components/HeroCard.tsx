import React from 'react';
import { MoveRight, Smartphone, Layers, Code2, ScanLine } from 'lucide-react';
import { motion } from 'framer-motion';
import { MiniEyes } from './MiniEyes';

export const HeroCard: React.FC = () => {
  return (
    <div className="h-full w-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-2xl rounded-[32px] p-8 flex flex-col border border-white/20 dark:border-white/10 shadow-sm relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-nothing-red/10">
      
      {/* Background Mesh Gradient */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-zinc-200/50 to-transparent dark:from-zinc-800/50 dark:to-transparent rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      {/* Header Section */}
      <div className="flex justify-between items-start mb-6 md:mb-8 z-10 relative">
          {/* System Status Icon */}
          <motion.div 
            className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center overflow-hidden group/avatar shadow-inner flex-shrink-0"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [0.5, 1.1, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              times: [0, 0.6, 1],
            }}
          >
            <div className="absolute inset-0 bg-dots opacity-20"></div>
            <div className="relative z-10">
              <MiniEyes />
            </div>
          </motion.div>
          
          <div className="flex flex-col items-end gap-1">
              <span className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-white/50 dark:bg-black/20 backdrop-blur-md">
                  Status: Online
              </span>
              <span className="text-4xl font-dot font-bold text-zinc-200 dark:text-zinc-800 select-none">ID:03</span>
          </div>
      </div>

      {/* Main Content Layout - Flex Column on Mobile, Row on Desktop */}
      <div className="flex-1 flex flex-col md:flex-row md:items-end gap-8 relative z-10">
        
        {/* Left Column: Text & Buttons */}
        <div className="flex-1 flex flex-col justify-between h-full min-w-0">
            <div>
              <div className="overflow-visible mb-6 relative mix-blend-hard-light dark:mix-blend-normal">
                  <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight leading-[0.95] text-zinc-900 dark:text-white drop-shadow-sm">
                    <span className="block">App</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white animate-gradient bg-300%">Developer</span>
                    <span className="block font-dot text-nothing-red mt-2 text-3xl md:text-5xl uppercase tracking-wider">UI Enthusiast.</span>
                  </h2>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium max-w-md leading-relaxed backdrop-blur-md bg-white/40 dark:bg-black/40 p-3 rounded-2xl border border-white/20 dark:border-white/5 shadow-sm">
                <span className="text-zinc-900 dark:text-white font-bold">App Developer</span> from India. Crafting fluid, native apps with the industrial rawness .
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 hover:border-nothing-red/50 transition-colors cursor-default backdrop-blur-md">
                  <Code2 size={14} />
                  <span className="text-xs font-mono uppercase">Dart</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 hover:border-nothing-red/50 transition-colors cursor-default backdrop-blur-md">
                  <Layers size={14} />
                  <span className="text-xs font-mono uppercase">Material 3</span>
               </div>
               <button 
                 onClick={() => {
                   const projectsSection = document.getElementById('projects');
                   projectsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                 }}
                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-lg"
               >
                 Work <MoveRight size={14} />
               </button>
            </div>
        </div>

        {/* Right Column: ID Card (Prevent Overlap via Flexbox) */}
        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
          <motion.div
              initial={{ rotateY: 15, rotateX: 5, opacity: 0, y: 50 }}
              animate={{ rotateY: -10, rotateX: 5, opacity: 1, y: 0 }}
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative w-[180px] bg-zinc-200 dark:bg-zinc-800 rounded-xl p-2 border border-white/40 dark:border-white/10 shadow-2xl overflow-hidden group/card"
          >
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 z-30 pointer-events-none rounded-xl"></div>
              
              {/* Photo Container */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-900 mb-2 group-hover/card:ring-2 ring-nothing-red/50 transition-all">
                   <img 
                      src="/assets/images/myimage.png" 
                      alt="ID Photo" 
                      className="w-full h-full object-cover grayscale contrast-125 group-hover/card:grayscale-0 transition-all duration-500"
                   />
                   
                   {/* Nothing OS Dot Matrix Overlay */}
                   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDAsMCwwLDAuMikiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz48L3N2Zz4=')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                   
                   {/* Scanning Animation line */}
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-nothing-red shadow-[0_0_10px_rgba(215,25,33,0.8)] opacity-0 group-hover/card:opacity-100 animate-scan"></div>
              </div>

              {/* ID Card Details */}
              <div className="flex justify-between items-end px-1 pb-1">
                  <div className="flex flex-col">
                      <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Dev</span>
                      <span className="text-[10px] font-bold font-dot text-zinc-900 dark:text-zinc-100 leading-none">KUMARJIT</span>
                  </div>
                  <ScanLine size={14} className="text-zinc-400 dark:text-zinc-600 mb-0.5" />
              </div>
              
              {/* Decorative Barcode Strip */}
              <div className="flex gap-[2px] mt-1 opacity-30">
                  {[...Array(12)].map((_, i) => (
                      <div key={i} className={`h-1.5 w-${i % 2 === 0 ? '1' : '2'} bg-black dark:bg-white rounded-full`}></div>
                  ))}
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};