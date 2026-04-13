# Realdev - Professional Full-Stack E-Commerce Platform

🚀 A scalable full-stack e-commerce platform with React 19 frontend, Express.js REST API backend, real API integration, automated testing using Jest, CI/CD pipelines with GitHub Actions.

[![CI Status](https://github.com/jama33033-commits/Full-stack-e-commerce-app-/actions/workflows/ci.yml/badge.svg)](https://github.com/jama33033-commits/Full-stack-e-commerce-app-/actions)

## 🎯 Project Overview

Realdev is a complete e-commerce solution with:
- **Professional Backend API** - RESTful Express.js backend with 11 API endpoints
- **Modern Frontend** - React 19 with TypeScript, Vite bundler, React Query
- **Real Products** - 20 products with images, ratings, and search functionality
- **Shopping Features** - Cart management, checkout, order tracking, delivery options
- **Automated Testing** - Jest unit and integration tests
- **CI/CD Pipeline** - GitHub Actions for automated testing
- **Production Ready** - CORS enabled, error handling, RESTful design

Perfect for demonstrating full-stack development expertise to employers.

---

## 🛠️ Technology Stack


- **Runtime**: Node.js (v22+)
- **Framework**: Express.js
- **Language**: JavaScript (Plain JS for simplicity & performance)
- **Database**: In-memory store (easily upgradable to MongoDB/PostgreSQL)
- **API**: 11 RESTful endpoints
- **Middleware**: CORS, JSON parser

### API Endpoints
- `GET /api/products` - List all products
- `GET /api/products/:id` - Single product
- `GET/POST /api/cart-items` - Cart operations  
- `PUT /api/cart-items/:id` - Update quantity
- `DELETE /api/cart-items/:id` - Remove item
- `GET/POST /api/orders` - Order management
- `GET /api/delivery-options` - Shipping methods
- `GET /api/payment-summary` - Calculate totals

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

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/jama33033-commits/Full-stack-e-commerce-app-.git
cd Realdev

# Install backend
cd Backend && npm install && cd ..

# Install frontend
cd frontend && npm install && cd ..
```

### 2. Run Backend (Terminal 1)
```bash
cd Backend
npm run dev
# Server runs on http://localhost:3000
```

### 3. Run Frontend (Terminal 2)
```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

### 4. Run Tests
```bash
cd frontend
npm run test
```

## ✅ Test Results

**Automated Tests:** Every push to GitHub automatically runs tests via [GitHub Actions](https://github.com/jama33033-commits/Full-stack-e-commerce-app-/actions)

**Test Coverage:**
- ✅ Unit tests with Jest
- ✅ Integration tests  
- ✅ Frontend build validation
- ✅ Backend syntax checking

See the green ✅ badge above to verify all tests are passing!


