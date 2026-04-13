# Realdev - Professional Full-Stack E-Commerce Platform

🚀 A scalable e-commerce frontend application built with  React 19 and Typescript , real API integration, automated testing using Jest, CI/CD pipelines with GitHub Actions, and deployment on AWS.

## 🎯 Project Overview

Realdev is a complete e-commerce solution with:
- **Professional Backend API** - RESTful TypeScript/Express.js backend with clean architecture
- **Modern Frontend** - React 19 with TypeScript and TanStack
- **Type Safety** - Full TypeScript implementation across the entire stack
- **Automated Testing** - Comprehensive unit and integration tests
- **CI/CD Pipeline** - GitHub Actions + AWS deployment automation
- **Production Ready** - Error handling, logging, validation, and security best practices

Perfect for demonstrating full-stack development expertise to employers.

---

## 🛠️ Technology Stack


- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Sequelize
- **Database**: PostgreSQL / SQLite
- **Architecture**: Controllers → Routes → Models (Clean Code Pattern)

### Frontend
- **Framework**: React 19
- **Language**: TypeScript
- **Bundler**: Vite
- **State Management**: React Query (@tanstack)
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Testing**: Jest (Unit test and Integration test)
- **UI Icons**: React Icons

### DevOps & Tools
- **Version Control**: Git/GitHub
- **CI/CD**: GitHub Actions
- **Deployment**: AWS (EC2/ECS)
- **Code Quality**: ESLint, Prettier
- **Testing Framework**: Jest
### Backend


### Prerequisites
- Node.js v18+
- PostgreSQL 12+ (or SQLite for development)
- Git


┌─────────────────┐
│  Push to GitHub │
└────────┬────────┘
         │
    ┌────▼─────┐
    │   Tests  │  ← GitHub Actions runs test suite
    └────┬─────┘
         │
    ┌────▼──────────┐
    │  Build Check  │  ← Verify frontend & backend build
    └────┬──────────┘
         │
    ┌────▼──────────┐
    │  AWS Deploy   │  ← Deploy to production
    └───────────────┘
```
