<div align="center">

# 🚀 Kumarjit.Dev - Material Nothing Portfolio

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

*A modern, interactive portfolio website blending Material 3 Expressive motion, Nothing OS aesthetics, and Apple-inspired frosted glass physics.*

[Live Demo](#) • [Features](#-core-features) • [Tech Stack](#️-tech-stack) • [Installation](#-installation)

</div>

---

## 📋 Overview

An innovative portfolio website that showcases modern web development capabilities through a unique blend of design systems. Built with performance and user experience in mind, featuring AI-powered interactions, smooth animations, and responsive design patterns.

## ✨ Core Features

### 🎨 **Hybrid Design System**
- **Material 3 Expressive**: Implements Google's latest Material Design principles with dynamic color adaptation and expressive motion patterns
- **Nothing OS Aesthetic**: Minimal, clean interface with dot matrix typography and signature red accent color (#FF3030)
- **Apple Physics**: Smooth, natural animations using spring physics and frosted glass morphism effects

### 🤖 **AI-Powered Portfolio Assistant**
- **Gemini 2.5 Flash Integration**: Real-time AI chat interface powered by Google's Gemini API
- **Context-Aware Responses**: AI assistant trained on portfolio owner's profile, skills, and projects
- **Terminal-Style UI**: Developer-friendly chat interface with typing animations and command-line aesthetics
- **Error Handling**: Graceful fallback mechanisms with user-friendly error messages

### 🎭 **Interactive UI Components**

#### Custom Cursor System
- Physics-based cursor with spring animations (damping: 20, stiffness: 100)
- Dynamic state changes: hover detection, click feedback, and context-aware sizing
- Smooth tracking using Framer Motion's `useMotionValue` and `useSpring` hooks

#### Bento Grid Layout
- **Responsive Grid**: 1/3/4 column layout adapting to screen sizes (mobile/tablet/desktop)
- **Smart Card Distribution**: Dynamic project shuffling on mount for fresh experiences
- **Staggered Animations**: Sequential reveal with 100ms delays using Framer Motion variants
- **Mixed Content Types**: Hero section, interactive map, social links, tech stack, contact card

#### Eyes Tracker Card
- Real-time cursor-following animation
- Multiple eye components synchronized with mouse movement
- Smooth tracking using trigonometric calculations

### 🎬 **Advanced Animations**

#### Splash Screen
- Typewriter animation: "WELCOME TO MY PROFILE" with 80ms character intervals
- 3-second splash sequence with fade-out transition
- Coordinated timing with main content reveal

#### Page Load Animation
- Cinematic entrance: `scaleY` transform from 0.005 to 1
- `scaleX` delayed expansion (0.2s offset)
- Brightness fade effect (5 to 1) for dramatic reveal
- Easing curve: cubic-bezier(0.22, 1, 0.36, 1) for smooth acceleration

#### Component Animations
- Container-level stagger: 100ms children delay with 200ms initial offset
- Item-level spring physics: stiffness 100, damping 20
- Hover states with color transitions (300ms duration)
- Micro-interactions on all interactive elements

### 🗺️ **Interactive Map Component**
- Real-time location display (Kolkata, India: 22.5726°N, 88.3639°E)
- Timezone integration (Asia/Kolkata)
- Visual coordinates presentation

### 📱 **Dock Navigation**
- macOS-inspired dock interface
- Smooth icon animations
- Quick access to key sections

### 🌓 **Theme System**
- Dark/Light mode toggle with system preference detection
- Smooth color transitions across all components
- Consistent color palette management

### 🎯 **Project Showcase**
- **Dynamic Project Cards**: Randomized display for variety
- **Featured Projects**:
  - Desi UPI (Flutter UPI payment system with biometric auth)
  - CricLive 24 (Real-time IPL scores with SwiftUI Live Activities)
  - RailYatra (Offline PNR status and train tracking)
  - Nothing Notes (Minimal note-taking with dot matrix typography)
  - Campus Connect (Community platform for engineers)
- Technology tags, descriptions, and external links

### 🔗 **Social Integration**
- Multi-platform links: X/Twitter, Instagram, GitHub, LinkedIn
- Hover animations and external link indicators
- Contact card with pre-formatted email template

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.3**: Latest React with concurrent features
- **TypeScript 5.8.2**: Type-safe development with strict mode
- **Vite 6.2.0**: Lightning-fast build tool with HMR

### Animation & Interaction
- **Framer Motion 12.23.26**: Production-ready animation library
  - Spring physics animations
  - Gesture handling
  - Motion values and springs
  - Layout animations and variants

### AI & APIs
- **@google/genai 1.33.0**: Google Gemini API integration
- Custom service layer for AI interactions
- Environment-based API key management

### UI & Icons
- **Lucide React 0.560.0**: Beautiful, consistent icon system
- Custom SVG components
- Responsive icon sizing

### Styling
- **Tailwind CSS**: Utility-first styling (via Vite config)
- Custom color palette with Nothing OS red (#FF3030)
- Dark mode support with CSS variables
- Noise texture overlay for depth

### Development Tools
- **@vitejs/plugin-react**: Fast refresh and JSX optimization
- **@types/node**: Node.js type definitions
- ES Modules support

## 🏗️ Project Structure

```
.
├── App.tsx                      # Main application component with splash screen
├── index.tsx                    # React entry point
├── constants.ts                 # Configuration: projects, socials, tech stack
├── types.ts                     # TypeScript interfaces and types
│
├── components/
│   ├── BentoGrid.tsx           # Main layout grid with stagger animations
│   ├── CustomCursor.tsx        # Physics-based cursor component
│   ├── DockNav.tsx             # macOS-style navigation dock
│   ├── EyesCard.tsx            # Cursor-tracking interactive element
│   ├── GeminiCard.tsx          # AI chat interface
│   ├── HeroCard.tsx            # Introduction and profile card
│   ├── MapCard.tsx             # Location display component
│   ├── MiniEyes.tsx            # Individual eye tracking component
│   ├── ProjectCard.tsx         # Individual project showcase
│   ├── SocialCard.tsx          # Social media links
│   ├── StackCard.tsx           # Tech stack visualization
│   └── ThemeToggle.tsx         # Dark/Light mode switcher
│
├── services/
│   └── geminiService.ts        # Gemini API integration and prompt engineering
│
└── assets/
    ├── fonts/                   # Custom dot matrix fonts
    └── images/                  # Project screenshots and visuals
```



### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Gemini API Key** (from [Google AI Studio](https://ai.google.dev/))

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alex.dev-(material-nothing)
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   API_KEY=your_gemini_api_key_here
   ```
   *Get your API key from [Google AI Studio](https://ai.google.dev/)*

4. **Run development server**
   ```bash
   npm run dev
   ```
   Application will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```
   Optimized build will be in the `dist/` directory

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Key Technical Implementations

### Animation Performance
- Uses `transform` properties for GPU acceleration
- Implements `will-change` for animation hints
- Leverages Framer Motion's optimized rendering
- Stagger animations calculated with optimal delays

### AI Integration
- System prompt engineering for context-aware responses
- Error boundary implementation for API failures
- Real-time streaming responses (50-word limit for speed)
- Secure API key management via environment variables

### Responsive Design
- Mobile-first approach with progressive enhancement
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Adaptive grid: 1 → 3 → 4 columns
- Touch-friendly interface elements

### Type Safety
- Comprehensive TypeScript interfaces
- Strict null checks enabled
- Type-safe component props
- API response typing

## 📊 Performance Metrics

- **Lighthouse Score**: Optimized for 90+ scores across all categories
- **Bundle Size**: Efficient code splitting with Vite
- **Animation FPS**: Smooth 60fps animations using GPU acceleration
- **Load Time**: Fast initial load with optimized assets

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- ✅ Modern React patterns (hooks, context, lazy loading)
- ✅ TypeScript for type-safe development
- ✅ AI API integration and prompt engineering
- ✅ Advanced animation techniques with Framer Motion
- ✅ Responsive design and accessibility
- ✅ Build optimization and performance tuning
- ✅ Component architecture and code organization
- ✅ Version control and project management

## 📝 License

This project is part of a personal portfolio. Feel free to use as reference for learning purposes.

## 👤 Author

**Kumarjit Hazra**
- Email: kumarjithazra43@gmail.com
- GitHub: [@Kumarjit-Hazra](https://github.com/Kumarjit-Hazra)
- LinkedIn: [Kumarjit Hazra](https://www.linkedin.com/in/kumarjit-hazra-51880627a/)
- X/Twitter: [@hazra16104](https://x.com/hazra16104)

---

<div align="center">

**Built with ❤️ using React, TypeScript, and Google Gemini AI**

*Showcasing the intersection of design, development, and artificial intelligence*

</div>
