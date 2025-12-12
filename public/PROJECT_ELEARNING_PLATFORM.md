# E-Learning Platform - Student App

**Project Type:** Interactive Video Learning Platform

A comprehensive Flutter-based e-learning mobile application with advanced video streaming, real-time progress tracking, and interactive assessment features.

---

## 🎯 Core Features

### 🎥 Advanced Video Learning Platform
- **Custom Video Player Implementation** with Chewie integration for seamless playback
- **HLS Streaming Support** for adaptive bitrate video delivery
- **Picture-in-Picture Mode** (Mini Player) for multitasking while learning
- **Orientation-aware Controls** with auto-rotation support for landscape/portrait modes
- **Wakelock Integration** prevents screen timeout during video playback
- **Dual Video Player Architecture** (V1 & V2) for enhanced user experience
- **Video Progress Tracking** with automatic resume from last position

### 📊 Progress Tracking & Analytics
- **Real-time Progress Synchronization** with backend API
- **Lesson Completion Tracking** with percentage-based progress metrics
- **Course Progress Calculation** across multiple lectures and modules
- **Auto-save Progress** at 5% intervals during video playback
- **Persistent Local Storage** using Shared Preferences

### 📝 Interactive Assessment System
- **MCQ Test Engine** with timer functionality
- **Animated Question Transitions** using Flutter animation controllers
- **Progress Indicators** showing test completion percentage
- **Timed Assessments** with countdown timer
- **Result Screens** with detailed score analysis
- **Question Navigation** with answer review capability

### 🔐 Authentication & User Management
- **JWT-based Authentication** with token validation
- **Secure Login/Registration** system
- **Access Token Management** with automatic refresh
- **Role-based Access Control** (Student/Instructor)
- **Session Persistence** across app launches

### 🎨 Modern UI/UX Design
- **Dynamic Theme System** with Light/Dark mode support
- **Theme Manager Service** for persistent theme preferences
- **Custom Material Design** components
- **Responsive Layouts** for various screen sizes
- **Smooth Animations** for enhanced user experience
- **Custom Navigation** with bottom navigation bar

### 🌐 REST API Integration
- **Comprehensive API Service Layer** with error handling
- **HTTP Client Configuration** with custom SSL certificate handling
- **Course Management APIs** (Browse, Enroll, Details)
- **User Profile Management**
- **Progress Update APIs**
- **Authentication Services**

### 📚 Course Management
- **Course Browsing & Discovery** with search functionality
- **Course Enrollment System**
- **Detailed Course Information** with syllabus display
- **Video Lecture Lists** with organized content structure
- **Continue Learning** feature for quick access to in-progress courses
- **Enrolled Courses** dashboard

### 🏗️ Architecture & Best Practices
- **Singleton Pattern** for service management (UserManager, ThemeManager)
- **State Management** using StatefulWidgets and AnimationControllers
- **Modular Code Structure** with separation of concerns
- **Clean Architecture** with models, services, and screens layers
- **Error Handling** with try-catch blocks and user feedback
- **Custom HTTP Overrides** for domain-specific SSL configuration

---

## 📱 Platform Support

- **Cross-platform Development** (iOS, Android, Web, Desktop)
- **Platform-specific Configurations**
  - Android: Custom Gradle configuration with ProGuard rules
  - iOS: Podfile integration with Swift support
  - Web: Progressive Web App capabilities
  - Desktop: Linux, macOS, Windows support

---

## 🔧 Technical Stack

### Framework & Language
- **Flutter SDK**: ^3.8.1
- **Dart Language**: Modern async/await patterns

### Core Dependencies
- **Video Processing**: video_player ^2.8.1, chewie ^1.7.4
- **HTTP Networking**: http ^1.1.0
- **Local Storage**: shared_preferences ^2.2.2
- **Device Features**: wakelock_plus ^1.1.4
- **SVG Support**: flutter_svg ^2.0.10

---

## 🛡️ Security Features

- **Custom SSL Certificate Handling** for specific domains
- **Secure Token Storage** with encryption
- **BadCertificate Callback** for controlled SSL bypass
- **Protected API Endpoints** with authentication headers

---

## 📈 Performance Optimizations

- **Lazy Loading** of course content
- **Efficient Video Buffering** with HLS protocol
- **Memory Management** with proper widget disposal
- **Orientation Lock** management for video players
- **Optimized Asset Loading**

---

## 💡 Key Achievements

- Implemented a **complete video streaming solution** with custom controls and PiP mode
- Built a **scalable progress tracking system** syncing with backend in real-time
- Developed an **interactive assessment module** with animations and timers
- Created a **robust authentication system** with JWT token management
- Designed a **flexible theme system** supporting multiple color schemes

---

## 🎨 Design Highlights

- Clean, modern Material Design interface
- Intuitive course navigation
- Smooth video transitions
- Visual progress indicators
- Responsive layout for all devices
- Custom animations for engaging UX

---

## 👨‍💻 Developer

**Kumarjit Hazra**
- Email: kumarjithazra43@gmail.com
- GitHub: [@Kumarjit-Hazra](https://github.com/Kumarjit-Hazra)
- LinkedIn: [Kumarjit Hazra](https://www.linkedin.com/in/kumarjit-hazra-51880627a/)
- X/Twitter: [@hazra16104](https://x.com/hazra16104)

---

## 🚀 Development Practices

- Clean code architecture
- Reusable component library
- Comprehensive error handling
- Responsive and adaptive design
- Code documentation
- Version control with Git

---

**Technologies**: Flutter · Dart · REST APIs · JWT Authentication · Video Streaming · HLS · Material Design · State Management · Cross-platform Development

---

*Built with ❤️ using Flutter & Dart*
