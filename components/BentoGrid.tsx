import React, { useMemo, useState } from 'react';
import { HeroCard } from './HeroCard';
import { MapCard } from './MapCard';
import { SocialCard } from './SocialCard';
import { ProjectCard } from './ProjectCard';
import { StackCard } from './StackCard';
import { GeminiCard } from './GeminiCard';
import { EyesCard } from './EyesCard';
import { ReadmeViewer } from './ReadmeViewer';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Mail, ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const BentoGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isReadmeOpen, setIsReadmeOpen] = useState(false);

  const handleViewReadme = (project: Project) => {
    console.log('Opening README for:', project.title, project.readmePath);
    setSelectedProject(project);
    setIsReadmeOpen(true);
  };

  const handleCloseReadme = () => {
    setIsReadmeOpen(false);
  };
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { 
        opacity: 1, 
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  // Randomize projects on mount to keep the grid fresh
  const shuffledProjects = useMemo(() => {
    const shuffled = [...PROJECTS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  return (
    <>
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
    >
      {/* Hero Section */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-2">
        <HeroCard />
      </motion.div>

      {/* Map Section */}
      <motion.div variants={item} className="col-span-1 row-span-1">
        <MapCard />
      </motion.div>

      {/* Social Links */}
      <motion.div variants={item} className="col-span-1 row-span-1">
        <SocialCard />
      </motion.div>

      {/* Gemini AI Chat */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
         <GeminiCard />
      </motion.div>

       {/* Tech Stack */}
       <motion.div variants={item} className="col-span-1 row-span-1">
        <StackCard />
      </motion.div>

      {/* Eyes Tracker */}
      <motion.div variants={item} className="col-span-1 row-span-1">
        <EyesCard />
      </motion.div>
      
      {/* Image Card - Under AI Chat - Wider and Horizontal */}
      <motion.div 
        variants={item} 
        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white dark:bg-black rounded-3xl overflow-hidden relative border border-zinc-200 dark:border-zinc-800"
      >
        <img 
          src="/assets/images/white_bg_work.png" 
          alt="Work" 
          className="w-full h-full object-contain dark:hidden p-4"
        />
        <img 
          src="/assets/images/black_bg_work.png" 
          alt="Work" 
          className="w-full h-full object-contain hidden dark:block p-4"
        />
      </motion.div>

      {/* Contact Card - Beside Image Card - Wider and Horizontal */}
      <motion.a 
        href="mailto:kumarjithazra43@gmail.com?subject=Hello%20Kumarjit&body=Hi%20Kumarjit,%0D%0A%0D%0A"
        target="_blank"
        rel="noopener noreferrer"
        variants={item} 
        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-black dark:bg-white text-white dark:text-black rounded-3xl p-6 flex flex-col justify-between group cursor-pointer hover:bg-nothing-red dark:hover:bg-nothing-red dark:hover:text-white transition-colors duration-300 relative overflow-hidden"
      >
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={20} />
        </div>
        <div>
            <Mail className="mb-4" size={28} />
            <h3 className="font-dot text-2xl uppercase leading-none">Contact Me</h3>
        </div>
        <p className="text-zinc-400 group-hover:text-white/80 text-xs font-mono mt-2">kumarjithazra43@gmail.com</p>
      </motion.a>

      {/* Projects Section - Full Width Wrapper for Custom Layout */}
      {/* Layout: 2 Left, 1 Middle, 2 Right */}
      <motion.div 
        id="projects"
        variants={item} 
        className="col-span-1 md:col-span-3 lg:col-span-4 mt-8"
      >
          {/* Projects Header */}
          <div className="flex items-center gap-3 mb-6 px-2">
            <h2 className="text-2xl font-dot font-bold uppercase text-zinc-900 dark:text-white">Projects</h2>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-nothing-red to-transparent"></div>
          </div>
          
          {/* We use a nested grid here to enforce the specific 2-1-2 structure irrespective of the outer bento flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
             {/* Row 1: Left & Right */}
             {shuffledProjects[0] && (
                 <ProjectCard project={shuffledProjects[0]} onViewReadme={handleViewReadme} />
             )}
             {shuffledProjects[1] && (
                 <ProjectCard project={shuffledProjects[1]} onViewReadme={handleViewReadme} />
             )}

             {/* Row 2: Middle (Centered) */}
             {/* We simulate 'small' size in a wide slot by constraining width */}
             {shuffledProjects[2] && (
                 <div className="md:col-span-2 flex justify-center w-full">
                     <div className="w-full md:w-[calc(50%-0.5rem)]">
                        <ProjectCard project={shuffledProjects[2]} onViewReadme={handleViewReadme} />
                     </div>
                 </div>
             )}

             {/* Row 3: Left & Right */}
             {shuffledProjects[3] && (
                 <ProjectCard project={shuffledProjects[3]} onViewReadme={handleViewReadme} />
             )}
             {shuffledProjects[4] && (
                 <ProjectCard project={shuffledProjects[4]} onViewReadme={handleViewReadme} />
             )}
          </div>
      </motion.div>

      {/* About Section - Full Width */}
      <motion.div 
        variants={item} 
        className="col-span-1 md:col-span-3 lg:col-span-4 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-[32px] p-8 border border-zinc-200 dark:border-white/10 mt-4"
      >
        <div className="space-y-6">
          {/* About Header */}
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-dot font-bold uppercase text-zinc-900 dark:text-white">About_Me</h2>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-nothing-red to-transparent"></div>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <p className="text-base leading-relaxed">
              An University Student Fascinated With <span className="font-semibold text-nothing-red">Native Android Development</span> — and Flutter on the side.
            </p>
            <p className="text-base leading-relaxed">
              I specialize in crafting high-usable Android apps, and I'm passionate about building software that genuinely makes a difference.
            </p>
            <p className="text-base leading-relaxed">
              Whether I'm designing a sleek user interface, coding a complex application, or building smooth cross-platform UI with Flutter, I'm always striving to create something unique and innovative.
            </p>
            <p className="text-base leading-relaxed">
              I love experimenting with new technologies and staying up-to-date with the latest trends in the Android and Flutter tech world.
            </p>
            <p className="text-base leading-relaxed">
              I'm currently working on some exciting projects that I can't wait to share with you 👀.<br/>
              But I'm always open to new opportunities and collaborations.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Frontend Tools */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-nothing-red font-semibold">Frontend Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Jetpack Compose', 'Android Studio', 'Kotlin', 'Coroutines', 'Dagger-Hilt', 'Navigation', 'Retrofit', 'OkHttp', 'Room', 'HLS', 'Media3', 'Flutter', 'Dart'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* UI Libraries */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-nothing-red font-semibold">UI Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['Material 3', 'Material Design', 'Jetpack Compose Material', 'Compose Icons', 'Compose Canvas', 'Flutter Material', 'Cupertino'].map((lib) => (
                  <span key={lib} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    {lib}
                  </span>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-nothing-red font-semibold">Design Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe XD'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Tools */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-nothing-red font-semibold">Backend Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Firebase'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Card - After About Section */}
      <motion.a 
        href="mailto:kumarjithazra43@gmail.com?subject=Hello%20Kumarjit&body=Hi%20Kumarjit,%0D%0A%0D%0A"
        target="_blank"
        rel="noopener noreferrer"
        variants={item} 
        className="col-span-1 md:col-span-3 lg:col-span-4 bg-black dark:bg-white text-white dark:text-black rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-nothing-red dark:hover:bg-nothing-red dark:hover:text-white transition-colors duration-300 relative overflow-hidden mt-4"
      >
        <div className="flex items-center gap-6">
          <Mail className="" size={48} />
          <div>
            <h3 className="font-dot text-3xl uppercase leading-none mb-2">Let's Work Together</h3>
            <p className="text-zinc-400 group-hover:text-white/80 text-sm font-mono">kumarjithazra43@gmail.com</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 opacity-60 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={32} />
        </div>
      </motion.a>

    </motion.div>

      {/* Readme Viewer Modal - Outside of grid for proper rendering */}
      {selectedProject && selectedProject.readmePath && (
        <ReadmeViewer
          isOpen={isReadmeOpen}
          onClose={handleCloseReadme}
          readmePath={selectedProject.readmePath}
          projectTitle={selectedProject.title}
        />
      )}
    </>
  );
};