import { Project, SocialLink, TechStackItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Mobile Banking",
    description: "Fast UPI payments with biometric auth.",
    tags: ["Flutter", "Dart"],
    imageUrl: "/assets/images/mobilebanking.png",
    link: "#",
    size: 'small',
    readmePath: '/PROJECT_MOBILE_BANKING.md'
  },
  {
    id: 2,
    title: "Field Agent System",
    description: "Financial operations & loan management.",
    tags: ["Flutter", "Firebase"],
    imageUrl: "/assets/images/agentapp.png",
    link: "#",
    size: 'small',
    readmePath: '/PROJECT_FIELD_AGENT_MANAGEMENT.md'
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "Video streaming & progress tracking.",
    tags: ["Flutter", "API"],
    imageUrl: "/assets/images/e-learning.png",
    link: "#",
    size: 'small',
    readmePath: '/PROJECT_ELEARNING_PLATFORM.md'
  },
  {
    id: 4,
    title: "E-Commerce Distribution",
    description: "Multi-role B2B distribution network.",
    tags: ["Flutter", "QR Scanner"],
    imageUrl: "/assets/images/ecommerce.png",
    link: "#",
    size: 'small',
    readmePath: '/PROJECT_ECOMMERCE_DISTRIBUTION.md'
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Material Design meets Nothing aesthetics.",
    tags: ["React", "TypeScript"],
    imageUrl: "/assets/images/image.png",
    link: "#",
    size: 'small'
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "X", username: "@hazra16104", url: "https://x.com/hazra16104", icon: "X" },
  { platform: "Instagram", username: "@https.kumarjit", url: "https://www.instagram.com/https.kumarjit/", icon: "Instagram" },
  { platform: "GitHub", username: "Kumarjit-Hazra", url: "https://github.com/Kumarjit-Hazra", icon: "Github" },
  { platform: "LinkedIn", username: "Kumarjit Hazra", url: "https://www.linkedin.com/in/kumarjit-hazra-51880627a/", icon: "Linkedin" },
];

export const TECH_STACK: TechStackItem[] = [
  { name: "Flutter", category: "frontend" },
  { name: "Dart", category: "frontend" },
  { name: "Firebase", category: "backend" },
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Android Studio", category: "tool" },
  { name: "VS Code", category: "tool" },
  { name: "REST APIs", category: "backend" },
  { name: "UI/UX Basics", category: "design" },
  { name: "Linux/Terminal", category: "tool" },
  { name: "Riverpod", category: "frontend" },
  { name: "Provider", category: "frontend" },
  { name: "BLoC", category: "frontend" },
];

export const MAP_COORDS = { lat: 22.5726, lng: 88.3639 }; // Kolkata, India
export const LOCATION_NAME = "Kolkata, IN";
export const TIMEZONE = "Asia/Kolkata";