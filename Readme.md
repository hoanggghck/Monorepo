# 🏗 Enterprise Workforce & Finance Platform (Monorepo)

A scalable enterprise-grade platform for managing workforce operations, project execution, payroll, and financial analytics — built with a **domain-driven monorepo architecture**.

---

## 🚀 Live Demo

| Application | Domain | Demo |
|------------|--------|------|
| 🧑‍💼 Admin Dashboard | HR & Governance | https://admin-dashboard-nu-nine-96.vercel.app/ |
| 👨‍💻 Employee Portal | Workforce Operation | https://employee-dashboard-opal-ten.vercel.app/ |
| 💰 Payment System | Finance & Payroll | https://payment-dashboard-puce.vercel.app/ |
| 🌐 Landing & Recruitment | Marketing & Hiring | https://monorepo-landing-seven.vercel.app/ |

---

## 🎯 Vision

This platform is designed for **IT Consulting companies** to unify:

- HR management
- Task & project tracking
- Payroll & finance
- Recruitment & marketing

➡️ Replace fragmented systems with a **single scalable ecosystem**

---

## 🧠 Why Monorepo?

As companies grow:

- Multiple isolated systems
- Duplicate UI & business logic
- Type inconsistency
- Hard-to-scale architecture

👉 This project solves that using:

- **Turborepo**
- **pnpm workspace**
- **Shared design system**
- **Centralized types**

---

## 🧩 Applications (Domain-driven)

```
apps/
 ├── admin
 ├── employee
 ├── payment
 └── landing
```

| App | Responsibility |
|-----|---------------|
| admin | HR, projects, governance, audit |
| employee | task, time tracking, leave |
| payment | payroll, finance analytics |
| landing | marketing, recruitment |

---

## 📦 Shared Packages

```
packages/
 ├── ui
 ├── types
 ├── utils
 └── config
```

✔ Shared UI system  
✔ Centralized TypeScript models  
✔ Reusable business logic  
✔ Cross-app consistency  

---

## 🛠 Tech Stack

### Monorepo System
- pnpm workspace
- Turborepo

### Frontend
- React 19
- React Router v7
- Next.js 16 (Landing SSR)

### UI System
- TailwindCSS v4
- Radix UI
- CVA (class-variance-authority)
- Framer Motion

### DX & Quality
- TypeScript strict mode
- ESLint 9
- Workspace shared config

---

## 🏗 Architecture Highlights

- Domain-driven design
- Feature-based structure
- Service layer abstraction
- RBAC permission system
- Atomic design system
- Type-safe cross-application models

---

## ⚡ Performance Strategy

- Turbo caching
- Code splitting
- Lazy loading
- React Query caching

---

## 🔐 Security

- JWT + Refresh token flow
- Role-based access control
- Input validation layer
- Environment isolation

---

## 📈 Business Flow Model

```
Employee
   ↓
Task / Time Tracking
   ↓
Payroll Processing
   ↓
Financial Analytics
   ↓
Executive Dashboard
```

---

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

Run individual apps:

```bash
pnpm --filter admin dev
pnpm --filter employee dev
pnpm --filter payment dev
pnpm --filter landing dev
```

Build all:

```bash
pnpm build
```

---

## 🎯 Engineering Focus

- Scalable architecture
- Domain-driven frontend
- Enterprise system design
- Type-safe monorepo
- High-performance DX

---

## 👨‍💻 Author

**Senior Frontend Engineer (6+ years)**  
Focused on scalable frontend architecture & enterprise systems.
