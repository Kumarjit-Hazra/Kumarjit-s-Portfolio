export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  size: 'small' | 'medium' | 'large';
  readmePath?: string;
}

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'tool' | 'design';
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
