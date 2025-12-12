import React from 'react';
import { TECH_STACK } from '../constants';
import { Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const StackCard: React.FC = () => {
  // Duplicate array for seamless loop
  const marqueeStack = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="h-full w-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-[32px] p-6 border border-zinc-200 dark:border-white/10 flex flex-col overflow-hidden relative group">
       <div className="flex items-center justify-between mb-4 text-zinc-900 dark:text-zinc-100 z-10">
         <span className="text-lg font-dot font-bold uppercase tracking-wide">Tech_Stack</span>
         <div className="p-2 bg-zinc-100 dark:bg-white/10 rounded-full">
            <Cpu size={16} className="text-zinc-500 dark:text-zinc-400" />
         </div>
       </div>

       {/* Fades for marquee */}
       <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-black/80 to-transparent z-10 pointer-events-none" />
       <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-black/80 to-transparent z-10 pointer-events-none" />
       
       <div className="flex-1 flex flex-col justify-center gap-3 -mx-6">
         {/* Row 1 - Left - M3 Chips */}
         <motion.div 
           className="flex gap-3 whitespace-nowrap pl-6"
           animate={{ x: [0, -400] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
         >
           {marqueeStack.map((tech, i) => (
             <span 
               key={`${tech.name}-1-${i}`} 
               className="px-4 py-2 bg-transparent rounded-full text-xs font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 hover:border-nothing-red dark:hover:border-nothing-red transition-colors cursor-default select-none shadow-sm"
             >
               {tech.name}
             </span>
           ))}
         </motion.div>

         {/* Row 2 - Right - M3 Chips */}
         <motion.div 
           className="flex gap-3 whitespace-nowrap pl-6"
           animate={{ x: [-400, 0] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
         >
           {marqueeStack.reverse().map((tech, i) => (
             <span 
               key={`${tech.name}-2-${i}`} 
               className="px-4 py-2 bg-transparent rounded-full text-xs font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 hover:border-nothing-red dark:hover:border-nothing-red transition-colors cursor-default select-none shadow-sm"
             >
               {tech.name}
             </span>
           ))}
         </motion.div>
       </div>
    </div>
  );
};