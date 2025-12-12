# Field Agent Management System

**Project Type:** Enterprise Financial Operations Platform

<div align="center">


**A comprehensive mobile application for field agents to manage financial operations including loans, deposits, and customer onboarding**

</div>

---

## 📱 Overview

A feature-rich Flutter application designed for field agents to streamline their daily operations. The app enables agents to manage customer relationships, process loan EMIs, handle deposit collections, and perform various financial calculations—all while working offline with seamless cloud synchronization.

---

## ✨ Core Features

### 🔐 Authentication & Security
- **Firebase Authentication** - Secure login with email/password
- **App Check Integration** - Play Integrity protection for Android
- **Session Management** - Automatic session handling with secure token storage
- **Password Recovery** - Forgot password functionality with email verification

### 👥 Customer Management
- **Customer Onboarding** - Complete digital KYC with document capture
- **Member Database** - Searchable customer directory with detailed profiles
- **KYC Updates** - Real-time customer information updates
- **Multi-member Support** - Manage multiple customers under single accounts
- **Geolocation Tracking** - Location-based customer verification

### 💰 Loan Management
- **Active Loan Tracking** - Real-time monitoring of all active loans
- **EMI Collection** - Process loan repayments with receipt generation
- **Loan Applications** - Submit new loan applications with documentation
- **Bulk Loan Creation** - Efficient batch processing of multiple loans
- **Loan History** - Complete transaction history and payment records
- **Offline EMI Collection** - Record payments without internet connectivity

### 🏦 Deposit Management  
- **Deposit Accounts** - Create and manage recurring/fixed deposit accounts
- **Collection Processing** - Record daily/weekly/monthly deposit collections
- **Deposit Tracking** - Monitor active deposits with maturity tracking
- **Receipt Generation** - Automatic receipt creation for all transactions
- **Withdrawal Processing** - Handle deposit withdrawals and closures

### 🖨️ Printing & Documentation
- **Bluetooth Thermal Printing** - Print receipts via portable thermal printers
- **PDF Generation** - Create professional PDF documents
- **Receipt Templates** - Pre-formatted receipt layouts for all transactions
- **Document Sharing** - Share receipts via WhatsApp, email, or other apps
- **Multi-format Support** - ESC/POS thermal printing compatibility

### 🧮 Financial Calculators
- **EMI Calculator** - Calculate loan installments with interest
- **Basic Calculator** - Standard calculator for quick calculations
- **Interest Calculators** - Various interest computation tools
- **Loan Planning Tools** - Comprehensive financial planning utilities

### 📊 Dashboard & Analytics
- **Real-time Dashboard** - Live overview of all financial metrics
- **Collection Summary** - Daily/weekly/monthly collection reports
- **Performance Metrics** - Agent performance tracking and analytics
- **Target Tracking** - Monitor collection targets and achievements
- **Visual Charts** - Graphical representation of financial data

### 📷 Media & Documentation
- **Image Capture** - Take photos of documents and KYC materials
- **Image Compression** - Optimize images for faster uploads
- **Document Storage** - Cloud-based document management via Firebase Storage
- **Gallery Integration** - Import images from device gallery

### 🌐 Cloud & Synchronization
- **Firebase Firestore** - Real-time cloud database synchronization
- **Firebase Realtime Database** - Instant data updates across devices
- **Cloud Storage** - Secure document and image storage
- **Offline Support** - Local data caching with automatic sync
- **Multi-device Support** - Access data across multiple devices

### 🔧 Additional Features
- **Profile Management** - Agent profile with contact information
- **Notification System** - Toast notifications for all operations
- **Type-ahead Search** - Fast searching across customers and accounts
- **URL Launcher** - Direct calls and email from app
- **Permission Handling** - Smooth permission requests for camera, location, storage
- **Material Design UI** - Modern, intuitive user interface with Google Fonts
- **Custom Theming** - Branded color schemes with hex color support

---

## 🏗️ Technical Architecture

### Frontend
- **Framework:** Flutter 3.8.1 with Dart SDK
- **State Management:** StatefulWidget with Provider pattern
- **UI Components:** Material Design with custom widgets
- **Animations:** Custom animation controllers for smooth UX

### Backend & Services
- **Authentication:** Firebase Authentication
- **Database:** Firebase Firestore + Realtime Database
- **Storage:** Firebase Cloud Storage
- **Security:** Firebase App Check with Play Integrity

### Key Dependencies
```yaml
# Core Firebase
firebase_core, firebase_auth, cloud_firestore
firebase_database, firebase_storage, firebase_app_check

# Networking & API
http, http_parser

# UI & Styling
google_fonts, hexcolor, flutter_svg

# Device Features
image_picker, geolocator, permission_handler

# Printing & Documents
print_bluetooth_thermal, printing, pdf, share_plus

# Utilities
intl, path_provider, shared_preferences
url_launcher, fluttertoast, flutter_typeahead
```

---

## 📱 Screens & Navigation

```
├── Authentication
│   ├── Splash Screen
│   ├── Login Screen
│   └── Forgot Password Screen
├── Home Dashboard
│   ├── Active Loans Summary
│   ├── Active Deposits Summary
│   ├── Quick Actions
│   └── Collection Statistics
├── Customer Management
│   ├── Customer List
│   ├── Customer Details
│   ├── New Member Onboarding
│   └── KYC Update
├── Loan Section
│   ├── Active Loans List
│   ├── Loan Details
│   ├── EMI Collection
│   ├── Loan Application
│   └── Bulk Loan Creation
├── Deposit Section
│   ├── Active Deposits List
│   ├── Deposit Details
│   ├── Deposit Collection
│   └── Create Deposit Account
├── More
│   ├── Calculators (EMI, Basic)
│   └── Settings & Preferences
└── Profile
    └── Agent Profile & Settings
```

---

## 🎯 Use Cases

### For Field Agents
- Collect EMIs and deposits from customers at their doorstep
- Onboard new customers with complete KYC documentation
- Print receipts instantly using portable thermal printers
- Access customer data and loan details offline
- Track daily collection targets and performance

### For Organizations
- Real-time monitoring of all field operations
- Centralized customer and loan database
- Automated receipt generation and documentation
- Reduced paperwork with digital processes
- Enhanced data accuracy and audit trails

---

## 🔒 Security Features

- **Firebase App Check** - Prevent unauthorized access and abuse
- **Secure Authentication** - Industry-standard Firebase Auth
- **Data Encryption** - Encrypted data transmission
- **Permission Controls** - Granular device permission management
- **Session Management** - Automatic session timeout and renewal

---

## 🚀 Performance Optimizations

- **Image Compression** - Reduce bandwidth usage for document uploads
- **Lazy Loading** - Load data on-demand for better performance
- **Caching Strategy** - Smart local caching with SharedPreferences
- **Efficient Queries** - Optimized Firestore queries for faster data retrieval
- **Background Sync** - Automatic data synchronization when online

---

## 📈 Project Statistics

- **Platform:** Android (iOS-ready architecture)
- **Lines of Code:** 10,000+ across Dart files
- **Screens:** 20+ unique screens
- **Services:** 15+ backend services
- **Widget Library:** 30+ custom reusable widgets
- **Firebase Collections:** Multiple structured collections for data organization

---

## 🎨 UI/UX Highlights

- Clean, modern Material Design interface
- Smooth animations and transitions
- Intuitive navigation with bottom navigation bar
- Responsive layouts for various screen sizes
- Custom fonts with Google Fonts integration
- Branded color scheme throughout the app
- Toast notifications for user feedback
- Loading states and error handling

---

## 👨‍💻 Developer

**Kumarjit Hazra**
- Email: kumarjithazra43@gmail.com
- GitHub: [@Kumarjit-Hazra](https://github.com/Kumarjit-Hazra)
- LinkedIn: [Kumarjit Hazra](https://www.linkedin.com/in/kumarjit-hazra-51880627a/)
- X/Twitter: [@hazra16104](https://x.com/hazra16104)

---

This project demonstrates expertise in:
- Cross-platform mobile development with Flutter
- Firebase backend integration and cloud services
- Complex state management and data synchronization
- Real-time data handling and offline-first architecture
- Hardware integration (Bluetooth printers, camera, GPS)
- Secure authentication and data protection
- Material Design principles and custom UI development

---

*Built with ❤️ using Flutter, Firebase & Dart*
