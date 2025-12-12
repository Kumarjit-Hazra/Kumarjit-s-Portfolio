import React from 'react';
import { SOCIALS } from '../constants';
import { Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

// Custom X Logo Component (reused here)
const XLogo = ({ className, size = 18 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconMap: Record<string, any> = {
  Github,
  X: XLogo,
  Linkedin,
  Instagram
};

export const SocialCard: React.FC = () => {
  return (
    <div className="h-full w-full bg-white dark:bg-nothing-panel rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-center">
      <div className="flex flex-col gap-3">
        {SOCIALS.map((social) => {
          const Icon = IconMap[social.icon] || Github;
          return (
            <a 
              key={social.platform} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group p-2 -mx-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-zinc-900 dark:text-zinc-100">
                  <Icon size={18} />
                </div>
                <span className="font-dot text-sm uppercase tracking-wide">{social.platform}</span>
              </div>
              <ArrowUpRight size={14} className="text-nothing-red opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          );
        })}
      </div>
    </div>
  );
};