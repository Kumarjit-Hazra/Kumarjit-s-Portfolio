import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onViewReadme?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewReadme }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const isPortfolioWebsite = project.title === "Portfolio Website";

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.readmePath && onViewReadme) {
      onViewReadme(project);
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsImageModalOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsImageModalOpen(false);
  };

  return (
    <>
    <div 
      className="group flex flex-col justify-between h-full w-full bg-white dark:bg-zinc-900 rounded-[24px] border border-zinc-200 dark:border-zinc-800 p-6 hover:border-nothing-red/50 dark:hover:border-nothing-red/50 transition-all duration-300 relative overflow-hidden"
    >
      <div className="flex flex-col gap-5 relative z-10">
         {/* Top Row: Image beside Title + Arrow */}
         <div className="flex justify-between items-start gap-4">
             <div className="flex items-center gap-4 flex-1">
                <div 
                  onClick={handleImageClick}
                  className="w-28 h-28 rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden border border-zinc-100 dark:border-zinc-700 group-hover:scale-105 transition-transform duration-500 flex-shrink-0 cursor-pointer"
                >
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    />
                </div>
                
                {/* Text Content beside image */}
                <div className="flex-1 min-w-0">
                    <h3 className="font-sans font-semibold text-lg text-zinc-900 dark:text-zinc-100 leading-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                        {project.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                </div>
             </div>
             
             <div className="w-8 h-8 rounded-full bg-transparent group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 flex items-center justify-center transition-colors flex-shrink-0">
                 <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-nothing-red transition-colors" />
             </div>
         </div>
      </div>

      {/* Footer with Tags and Button */}
      <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/50 space-y-3 relative z-10">
         <div className="flex flex-wrap gap-2">
           {project.tags.map((tag) => (
               <span key={tag} className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                   #{tag}
               </span>
           ))}
         </div>
         
         {/* View Details Button */}
         {project.readmePath && (
           <button
             onClick={handleViewDetails}
             className="w-full py-2 px-4 bg-zinc-100 dark:bg-zinc-800 hover:bg-nothing-red hover:dark:bg-nothing-red text-zinc-700 dark:text-zinc-300 hover:text-white text-xs font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
           >
             <span>View Details</span>
             <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
           </button>
         )}
      </div>
      
      {/* Hover Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-transparent dark:from-zinc-800/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>

    {/* Image Modal */}
    <AnimatePresence>
      {isImageModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          {isPortfolioWebsite ? (
            // Portfolio Website Message Modal
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white dark:bg-zinc-900 rounded-2xl p-8 max-w-md mx-4 border-2 border-nothing-red"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-nothing-red hover:text-white transition-colors flex items-center justify-center"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              
              {/* Message Content */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-nothing-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👀</span>
                </div>
                <h3 className="text-2xl font-dot font-bold text-zinc-900 dark:text-white">
                  You're Already Here!
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                  You're exploring it live right now! This is the portfolio website you're viewing.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-2 bg-nothing-red text-white rounded-lg hover:bg-nothing-red/90 transition-colors font-medium"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            // Regular Image Modal
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-nothing-red hover:text-white transition-colors flex items-center justify-center z-10"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              
              {/* Full Size Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                <h3 className="text-white font-semibold text-xl mb-1">{project.title}</h3>
                <p className="text-zinc-300 text-sm">{project.description}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};