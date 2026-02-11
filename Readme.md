🏗 Enterprise Workforce & Finance Platform – Monorepo Architecture
1. Vision & Why Monorepo?

Đây là một nền tảng quản lý vận hành dành cho doanh nghiệp IT Consulting, bao gồm quản lý nhân sự, dự án, chấm công, payroll, tài chính và marketing tuyển dụng.

🎯 Vấn đề đặt ra

Khi doanh nghiệp phát triển:

Nhiều hệ thống rời rạc (HR, Task, Finance, Marketing)

Trùng lặp logic & UI giữa các ứng dụng

Khó maintain type consistency

Khó scale team & kiến trúc

Deployment & dependency phức tạp

🚀 Giải pháp

Áp dụng Monorepo Architecture (Turborepo + pnpm workspace) để:

Chia domain rõ ràng theo business boundaries

Tái sử dụng design system & business logic

Đồng bộ type giữa toàn hệ thống

Tối ưu performance build bằng turbo caching

Dễ scale thành multi-tenant SaaS trong tương lai

Tầm nhìn: Xây dựng một nền tảng enterprise-ready có thể mở rộng thành hệ sinh thái quản lý doanh nghiệp toàn diện.

2. Project Structure & Architecture
🧩 Applications (Domain-driven separation)

```
apps/
 ├── admin      → Governance & HR Management
 ├── employee   → Workforce Operation
 ├── payment    → Finance & Payroll
 └── landing    → Marketing & Recruitment
```

🔹 Admin App

Quản lý nhân sự, dự án, KPI, audit log, request workflow
→ Định vị là trung tâm điều hành hệ thống

🔹 Employee App

Task management, leave request, time tracking, notification
→ Giúp công ty quản lý nhân viên một cách tối ưu thông qua các chức năng đc tích hợp

🔹 Payment App

Payroll, project finance, analytics, revenue tracking
→ Giúp công ty quản lý về thu, chi cũng như tạo ra hoạc định cho việc sử dụng chi phí hợp lí

🔹 Landing

Marketing website + tuyển dụng + SEO
→ Hỗ trợ growth & branding

📦 Shared Packages (Core Strength)
```
packages/
 ├── ui          → Shared Design System
 ├── types       → Centralized TypeScript models
 ├── utils       → Reusable hooks & helpers
 └── config      → Environment & constants
```

Kiến trúc nổi bật

Domain-based separation

Feature-based folder structure

Service layer abstraction

Centralized type system

Role-based access control (RBAC)

Atomic Design System

# 🛠 Tech Stack

## 🧱 Monorepo & Build System

- **pnpm (workspace)** – Dependency management
- **Turborepo** – Task orchestration & caching
- **TypeScript 5.9+** – Strict type-safe development
- **Vite (Rolldown Vite override)** – SPA build tool
- **Next.js 16** – Landing / SSR application
- **PostCSS + Autoprefixer**
- **TailwindCSS v4**

---

## ⚛️ Core Frontend

- **React 19**
- **React DOM 19**
- **React Router DOM v7** (SPA routing)
- **Next.js App Router** (Landing)

---

## 🎨 UI System & Design Architecture

- **Radix UI**
  - Checkbox
  - Dropdown Menu
  - Label
  - Popover
  - Select
  - Tabs
  - Slot
- **class-variance-authority (CVA)** – Variant-driven component design
- **clsx** – Conditional class handling
- **tailwind-merge** – Conflict-safe Tailwind merging
- **Framer Motion** – Animation system
- **Lucide React** – Icon system
- **react-day-picker** – Date picker
- Internal Design System (`@repo/ui`)

---

## 🧩 Internal Shared Packages (Workspace)

- `@repo/ui` – Shared design system
- `@repo/types` – Centralized TypeScript models
- `@repo/utils` – Reusable hooks & helpers
- `@repo/icons` – Shared icon layer
- `@repo/tailwind-config` – Shared Tailwind configuration

---

## 🛠 Developer Experience & Code Quality

- **ESLint 9**
- **typescript-eslint**
- **eslint-plugin-react-hooks**
- **eslint-plugin-react-refresh**
- **eslint-config-next**
- **@vitejs/plugin-react**

---

## 🏗 Architecture Characteristics

- Workspace-based shared packages
- Strict TypeScript enforcement across apps
- UI abstraction via internal design system
- Variant-driven styling system (CVA + Tailwind v4)
- Cross-app dependency control through pnpm workspace
- Turbo-powered incremental builds
3. Engineering Mindset & Scalability Strategy

Điểm tôi tập trung khi xây dựng dự án này không chỉ là feature, mà là:

🧠 1. Architecture for Scale

Chuẩn hóa dependency graph

Tách domain rõ ràng để tránh coupling

Dễ mở rộng thành:

Multi-tenant SaaS

Mobile app

Public API ecosystem

⚡ 2. Performance-first

Turbo caching

Route-based code splitting

Lazy loading

React Query caching strategy

🔐 3. Enterprise Security

JWT + Refresh Token flow

Role-based permission guard

Input validation

Environment isolation

📈 4. Business-aware Frontend

Thiết kế dựa trên business flow thực tế:

Employee → Task/Time Tracking → Payroll → Financial Analytics → Executive Dashboard

Frontend không chỉ là UI, mà là hệ thống phản ánh logic vận hành doanh nghiệp.

🚀 Development
pnpm install
pnpm dev


Chạy từng app:

pnpm --filter admin dev
pnpm --filter employee dev
pnpm --filter payment dev
pnpm --filter landing dev


Build toàn hệ thống:

pnpm build

🎯

Kiến trúc monorepo thực tế, không demo toy project

Domain modeling theo business

Type-safe cross-application architecture

Tư duy scalable SaaS platform

Tối ưu DX & performance

Thiết kế Design System có thể reuse production

👨‍💻 Author

Senior Frontend Engineer (6+ years)
Focused on scalable architecture, domain-driven frontend design & enterprise systems.
