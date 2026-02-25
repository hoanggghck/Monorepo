# 🏗️ TechCorp Enterprise Platform — Monorepo

> **A production-grade, domain-driven monorepo** powering workforce operations, project execution, payroll analytics, and public marketing — built to demonstrate scalable frontend system architecture.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Turborepo-Powered-EF4444?style=for-the-badge&logo=turborepo" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/pnpm-Workspace-F69220?style=for-the-badge&logo=pnpm" />
</p>

---

## 🌐 Live Demos

| App | Role | Link |
|-----|------|------|
| 🛡️ **Admin Dashboard** | HR Governance & Audit | [admin-dashboard-nu-nine-96.vercel.app](https://admin-dashboard-nu-nine-96.vercel.app/) |
| 👨‍💻 **Employee Portal** | Task, Attendance & Leave | [employee-dashboard-opal-ten.vercel.app](https://employee-dashboard-opal-ten.vercel.app/) |
| 💰 **Finance Dashboard** | Payroll & Financial Analytics | [payment-dashboard-puce.vercel.app](https://payment-dashboard-puce.vercel.app/) |
| 🌐 **Landing Page** | Marketing & Recruitment (SSR) | [monorepo-landing-seven.vercel.app](https://monorepo-landing-seven.vercel.app/) |

---

## 🎯 Project Overview

This platform was architected to simulate a **real-world IT consulting company ecosystem**, unifying 4 critical business domains under a single codebase. The goal is not just to build features — it's to demonstrate **how enterprise-grade frontend systems should be structured, scaled, and maintained**.

> ⚠️ This project focuses purely on **Frontend System Architecture**. No backend/API integration — by design — to isolate and showcase frontend engineering quality.

### Business Domains Covered

```
┌─────────────────────────────────────────────────────────────┐
│                    TechCorp Platform                        │
├──────────────┬──────────────┬──────────────┬───────────────┤
│    Admin     │   Employee   │   Finance    │  Landing Page │
│  Governance  │  Operations  │  Analytics   │   Marketing   │
└──────────────┴──────────────┴──────────────┴───────────────┘
```

---

## 🧠 Why Monorepo? — The Architecture Decision

Most companies at scale face these problems:

| Problem | Impact |
|---------|--------|
| Duplicated UI components across projects | Inconsistent UX, double maintenance |
| Different TypeScript models per team | Integration bugs, type mismatches |
| No shared config (ESLint, Tailwind) | Code quality drift |
| New developers ramp up slowly | Productivity loss |

**This monorepo solves all of the above** by establishing a single source of truth for the entire platform.

---

## 📁 Repository Structure

```
.
├── apps/
│   ├── admin-dashboard/           # React 19 + React Router DOM v7 + Vite + Vitest
│   ├── employee-dashboard/        # React 19 + React Router DOM v7 + Vite + Vitest
│   ├── payment-dashboard/         # React 19 + React Router DOM v7 + Vite + Vitest
│   └── landing/                   # Next.js 16 (SSR + SEO)
│
├── packages/
│   ├── ui/             # Shared component library (shadcn/ui + Radix + CVA)
│   ├── types/          # Centralized TypeScript interfaces & enums
│   ├── utils/          # Shared business logic & helper functions
│   ├── config/         # ESLint, Tailwind, TypeScript base configs
│   └── icons/          # Lucide-react icons
│
├── turbo.json
└── pnpm-workspace.yaml
```

### App Internal Structure (Feature-based)

Each app follows a consistent, scalable folder convention:

```
src/
├── components/         # Reusable UI (atoms, molecules, organisms)
├── pages/              # Route-level views
├── layouts/            # Persistent shells (sidebar, header)
├── router/             # Centralized routing config
├── store/              # Global state (Zustand / Context)
├── provider/           # App-level providers (theme, auth, query)
└── test/               # Unit & integration tests
```

---

## 🧩 Applications In Detail

### 🛡️ Admin Dashboard
Governance layer for system administrators and HR leads.
- Employee management (CRUD, role assignment, RBAC)
- Project oversight & approval workflows
- Leave request management & approval queue
- Customer contact & inquiry tracking
- Audit trail & activity logs

### 👨‍💻 Employee Dashboard
Day-to-day operational hub for staff and team leads.
- Task assignment & progress tracking (Kanban/List view)
- Online attendance & time tracking (clock-in/out)
- Leave application & approval status
- Internal notification system
- Manager ↔ Employee communication layer

### 💰 Finance Dashboard
Strategic financial overview for executive stakeholders.
- Payroll breakdown & salary simulation
- Revenue vs. expense analytics (charts & KPIs)
- Department cost allocation reports
- Historical trend analysis
- Export-ready financial summaries

### 🌐 Landing Page (Next.js SSR)
Public-facing marketing site, SEO-optimized.
- Company introduction & service showcase
- Built with Next.js App Router for optimal Core Web Vitals
- Contact form & lead capture
- Recruitment / job application section
- Server-side rendering for SEO performance

---

## 📦 Shared Packages

### `@repo/ui`
A custom component library built on top of **shadcn/ui**, **Radix UI**, and **CVA**.
- Theming via CSS variables (dark/light mode)
- Type-safe variant system with `class-variance-authority`
- Accessible by default (WAI-ARIA compliant via Radix)
- Documented & reusable across all 4 apps

### `@repo/types`
Single source of truth for TypeScript models.
- Domain entities: `User`, `Project`, `Task`, `Payroll`, `Leave`
- Role & permission enums (RBAC)
- API response shapes (ready for backend integration)

### `@repo/utils`
Shared utility functions used across apps.
- Date/time formatting helpers
- Currency & number formatters
- Validation helpers
- Auth/permission utilities

### `@repo/config`
Centralized tooling configs inherited by all workspaces.
- Base `tsconfig.json` (strict mode)
- Shared `eslint.config.js` (flat config, ESLint 9)
- Shared `tailwind.config.ts` (design tokens, breakpoints)

### `@repo/icons`
Centralized icon system built on **lucide-react**.
- Single import source for icons across all apps
- Prevents version mismatch between apps
- Easy to swap icon library in the future (one place to change)
---

## 🛠️ Tech Stack

### Infrastructure
| Tool | Purpose |
|------|---------|
| `pnpm workspaces` | Monorepo package management |
| `Turborepo` | Build orchestration & remote caching |

### Frontend
| Tool | Purpose |
|------|---------|
| `React 19` | UI framework (admin, employee, finance) |
| `React Router v7` | Client-side routing with data loaders |
| `Next.js 15` | SSR + App Router (landing page) |

### UI System
| Tool | Purpose |
|------|---------|
| `TailwindCSS v4` | Utility-first styling |
| `shadcn/ui` | Accessible component primitives |
| `Radix UI` | Headless UI components |
| `CVA` | Type-safe component variants |
| `Framer Motion` | Micro-interactions & animations |

### Developer Experience
| Tool | Purpose |
|------|---------|
| `TypeScript (strict)` | End-to-end type safety |
| `ESLint 9 (flat config)` | Consistent code standards |
| `Turborepo caching` | Up to 10x faster CI builds |

---

## ⚡ Performance & Scalability

- **Turbo Remote Cache** — shared build cache across CI runs
- **Code splitting** — route-based lazy loading per app
- **React Query** — client-side caching layer (ready for API integration)
- **SSR via Next.js** — landing page scores 90+ on Core Web Vitals
- **Tree-shakeable shared packages** — no unused code bundled

---

## 🔒 Architecture Principles

| Principle | Implementation |
|-----------|---------------|
| **Domain-Driven Design** | Each app owns its domain logic |
| **Feature-Based Structure** | Files grouped by feature, not type |
| **RBAC** | Role-based access control (admin/manager/employee) |
| **Separation of Concerns** | UI, state, routing, services cleanly separated |
| **Atomic Design** | Components follow atoms → molecules → organisms pattern |
| **Type Safety** | Strict TypeScript throughout, no `any` |

---

## 📈 Business Flow

```
New Employee Joins
        ↓
Admin creates account & assigns role
        ↓
Employee receives tasks from Manager
        ↓
Time tracking & attendance logged daily
        ↓
Payroll calculated at month end
        ↓
Finance dashboard reflects new data
        ↓
Executive reviews KPIs & adjusts strategy
```

---
## 🔄 CI 
```
Automated pipeline triggers on every push to `main`, `develop` and all pull requests.

| Step | Command | Note |
|------|---------|------|
| Install | `pnpm install` | Cached — only runs when lockfile changes |
| Build | `pnpm build` | Full monorepo build via Turborepo |

Merging is blocked if build fails — main branch is always in a deployable state.
```

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- pnpm ≥ 8

### Install

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
pnpm install
```

### Run All Apps

```bash
pnpm dev
```

### Run Individual Apps

```bash
pnpm --filter admin dev
pnpm --filter employee dev
pnpm --filter payment dev
pnpm --filter landing dev
```

### Build

```bash
pnpm build       # All apps
pnpm --filter admin build   # Single app
```

### Type Check

```bash
pnpm typecheck
```

### Lint

```bash
pnpm lint
```

---

## 🗺️ Roadmap

- [ ] REST API integration (Node.js / NestJS backend)
- [ ] Authentication (JWT + refresh token flow)
- [ ] Real-time notifications (WebSocket)
- [ ] E2E testing with Playwright
- [ ] Expand CI: add lint & typecheck steps
- [ ] CD: auto-deploy to Vercel on merge to main
- [ ] Docker support
---

## 👨‍💻 Author

**Goldz** — Frontend Engineer  
Focused on scalable frontend architecture, monorepo design, and enterprise system development.

> *"Great software isn't just about features — it's about building systems that teams can grow with."*

---

<p align="center">
  <sub>Built with ❤️ to demonstrate enterprise-grade frontend engineering</sub>
</p>