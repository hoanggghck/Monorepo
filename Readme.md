# 🏗️ Monorepo Architecture - Multi-App React Platform

## 📋 Project Overview

Monorepo chứa 4 ứng dụng React độc lập với shared packages, payment subscription, và kiến trúc scalable.

## 🎯 Applications

### 1. **Admin App** (`apps/admin`)
- Dashboard quản trị
- User management
- Analytics & Reports
- Subscription management
- System configuration

### 2. **Customer App** (`apps/customer`)
- User portal
- Profile management
- Subscription dashboard
- Feature access based on plan

### 3. **Billing App** (`apps/billing`)
- Payment processing
- Invoice management
- Subscription handling
- Payment history
- Upgrade/Downgrade flows

### 4. **Landing Page** (`apps/landing`)
- Marketing site
- Pricing plans
- Feature showcase
- Sign up flows

---

## 📦 Shared Packages Structure

```
packages/
├── ui/                      # Shared UI components
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   ├── Card/
│   │   │   ├── Table/
│   │   │   └── ...
│   │   ├── layouts/
│   │   │   ├── DashboardLayout/
│   │   │   ├── AuthLayout/
│   │   │   └── PublicLayout/
│   │   └── index.ts
│   └── package.json
│
├── utils/                   # Shared utilities
│   ├── src/
│   │   ├── formatting/
│   │   │   ├── date.ts
│   │   │   ├── currency.ts
│   │   │   └── number.ts
│   │   ├── validation/
│   │   │   ├── email.ts
│   │   │   ├── password.ts
│   │   │   └── phone.ts
│   │   ├── storage/
│   │   │   ├── localStorage.ts
│   │   │   └── sessionStorage.ts
│   │   ├── hooks/
│   │   │   ├── useDebounce.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   └── useMediaQuery.ts
│   │   └── index.ts
│   └── package.json
│
├── api-client/             # API client configuration
│   ├── src/
│   │   ├── config/
│   │   │   ├── axios.config.ts
│   │   │   ├── endpoints.ts
│   │   │   └── interceptors.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── user.service.ts
│   │   │   ├── billing.service.ts
│   │   │   └── subscription.service.ts
│   │   ├── types/
│   │   │   ├── api.types.ts
│   │   │   ├── user.types.ts
│   │   │   └── subscription.types.ts
│   │   └── index.ts
│   └── package.json
│
├── auth/                   # Authentication logic
│   ├── src/
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   └── usePermissions.ts
│   │   ├── guards/
│   │   │   ├── AuthGuard.tsx
│   │   │   └── RoleGuard.tsx
│   │   └── index.ts
│   └── package.json
│
├── config/                 # Shared configuration
│   ├── src/
│   │   ├── env.ts
│   │   ├── constants.ts
│   │   ├── routes.ts
│   │   └── theme.ts
│   └── package.json
│
└── types/                  # Shared TypeScript types
    ├── src/
    │   ├── models/
    │   │   ├── User.ts
    │   │   ├── Subscription.ts
    │   │   ├── Payment.ts
    │   │   └── Invoice.ts
    │   └── index.ts
    └── package.json
```

---

## 🏗️ Complete Folder Structure

```
monorepo-project/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── deploy-admin.yml
│       ├── deploy-customer.yml
│       ├── deploy-billing.yml
│       └── deploy-landing.yml
│
├── apps/
│   ├── admin/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   │   ├── Dashboard/
│   │   │   │   ├── Users/
│   │   │   │   ├── Subscriptions/
│   │   │   │   └── Analytics/
│   │   │   ├── routes/
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   ├── customer/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   │   ├── Home/
│   │   │   │   ├── Profile/
│   │   │   │   ├── Subscription/
│   │   │   │   └── Settings/
│   │   │   ├── routes/
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   ├── billing/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   │   ├── Checkout/
│   │   │   │   ├── Invoices/
│   │   │   │   ├── PaymentMethods/
│   │   │   │   └── Subscriptions/
│   │   │   ├── routes/
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── landing/
│       ├── public/
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   ├── sections/
│       │   │   ├── Hero/
│       │   │   ├── Features/
│       │   │   ├── Pricing/
│       │   │   ├── Testimonials/
│       │   │   └── CTA/
│       │   ├── pages/
│       │   │   ├── Home/
│       │   │   ├── Pricing/
│       │   │   ├── About/
│       │   │   └── Contact/
│       │   ├── App.tsx
│       │   └── main.tsx
│       ├── package.json
│       └── vite.config.ts
│
├── packages/
│   ├── ui/
│   ├── utils/
│   ├── api-client/
│   ├── auth/
│   ├── config/
│   └── types/
│
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.json
```

---

## 🔧 Technology Stack

### Core
- **Package Manager**: pnpm (workspace support)
- **Build Tool**: Turborepo (caching & orchestration)
- **Bundler**: Vite (fast dev & build)
- **Framework**: React 18+
- **Language**: TypeScript

### State Management
- **Global State**: Zustand (lightweight)
- **Server State**: TanStack Query (React Query)
- **Form State**: React Hook Form

### Styling
- **CSS Framework**: Tailwind CSS
- **Component Styling**: CSS Modules hoặc styled-components
- **Icons**: Lucide React hoặc React Icons

### API & Data
- **HTTP Client**: Axios
- **API Layer**: Custom service layer
- **Validation**: Zod

### Testing
- **Unit/Integration**: Vitest
- **E2E**: Playwright
- **Component Testing**: React Testing Library

### DevOps
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel/Netlify (Frontend)
- **Monitoring**: Sentry (Error tracking)

---

## 🚀 Key Architecture Patterns

### 1. **Dependency Graph**
```
apps/admin     ──┐
apps/customer  ──┤
apps/billing   ──┼──> packages/ui
apps/landing   ──┤    packages/utils
                 │    packages/api-client
                 │    packages/auth
                 │    packages/config
                 └──> packages/types
```

### 2. **Shared Component Pattern**
```typescript
// packages/ui/src/components/Button/Button.tsx
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  onClick
}) => {
  // Implementation
};
```

### 3. **API Service Pattern**
```typescript
// packages/api-client/src/services/subscription.service.ts
import { apiClient } from '../config/axios.config';
import type { Subscription, SubscriptionPlan } from '@repo/types';

export const subscriptionService = {
  getPlans: () => apiClient.get<SubscriptionPlan[]>('/plans'),
  
  getCurrentSubscription: () => 
    apiClient.get<Subscription>('/subscription/current'),
  
  subscribe: (planId: string) =>
    apiClient.post<Subscription>('/subscription/subscribe', { planId }),
  
  cancelSubscription: (id: string) =>
    apiClient.post(`/subscription/${id}/cancel`),
};
```

### 4. **Auth Guard Pattern**
```typescript
// packages/auth/src/guards/AuthGuard.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) return <Navigate to="/login" />;
  
  return <>{children}</>;
};
```

### 5. **Feature-based Routing**
```typescript
// apps/admin/src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import { AuthGuard, RoleGuard } from '@repo/auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard><DashboardLayout /></AuthGuard>,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'users',
        element: <RoleGuard role="admin"><Users /></RoleGuard>
      },
      {
        path: 'subscriptions',
        element: <Subscriptions />
      }
    ]
  }
]);
```

---

## 💳 Payment & Subscription Flow

### Subscription Tiers
```typescript
// packages/types/src/models/Subscription.ts
export enum SubscriptionTier {
  FREE = 'free',
  BASIC = 'basic',
  PRO = 'pro',
  ENTERPRISE = 'enterprise'
}

export interface SubscriptionPlan {
  id: string;
  tier: SubscriptionTier;
  name: string;
  price: number;
  currency: string;
  interval: 'monthly' | 'yearly';
  features: string[];
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'cancelled' | 'expired' | 'past_due';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
}
```

### Payment Flow
1. User selects plan (Landing/Customer App)
2. Redirect to Billing App
3. Payment processing (simple integration)
4. Webhook updates subscription status
5. User gains access to features

---

## 🔐 Authentication & Authorization

### JWT-based Auth Flow
```typescript
// packages/auth/src/context/AuthContext.tsx
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  subscription: Subscription | null;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasFeature: (feature: string) => boolean;
}
```

### Permission System
```typescript
// packages/auth/src/hooks/usePermissions.ts
export const usePermissions = () => {
  const { subscription } = useAuth();
  
  return {
    canAccessAdminPanel: subscription?.tier === 'ENTERPRISE',
    canExportData: ['PRO', 'ENTERPRISE'].includes(subscription?.tier),
    canInviteUsers: subscription?.tier !== 'FREE',
  };
};
```

---

## 🎨 Design System Principles

### Component Hierarchy
1. **Atoms**: Button, Input, Label, Badge
2. **Molecules**: FormField, SearchBar, Card
3. **Organisms**: Navbar, Sidebar, DataTable
4. **Templates**: DashboardLayout, AuthLayout
5. **Pages**: Dashboard, UserList, Checkout

### Theme Configuration
```typescript
// packages/config/src/theme.ts
export const theme = {
  colors: {
    primary: '#3B82F6',
    secondary: '#10B981',
    danger: '#EF4444',
    warning: '#F59E0B',
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      // ...
      900: '#111827'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    }
  }
};
```

---

## 📦 Package Configuration

### Root package.json
```json
{
  "name": "monorepo-project",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "clean": "turbo run clean && rm -rf node_modules",
    "format": "prettier --write \"**/*.{ts,tsx,md}\""
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "turbo": "^1.10.0",
    "typescript": "^5.2.0"
  },
  "packageManager": "pnpm@8.0.0"
}
```

### pnpm-workspace.yaml
```yaml
packages:
  - "apps/*"
  - "packages/*"
```

### turbo.json
```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "test": {
      "dependsOn": ["^build"]
    }
  }
}
```

### Shared tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@repo/ui": ["./packages/ui/src"],
      "@repo/utils": ["./packages/utils/src"],
      "@repo/api-client": ["./packages/api-client/src"],
      "@repo/auth": ["./packages/auth/src"],
      "@repo/config": ["./packages/config/src"],
      "@repo/types": ["./packages/types/src"]
    }
  }
}
```

---

## 🚀 Development Workflow

### Setup
```bash
# Clone repository
git clone <repo-url>

# Install dependencies
pnpm install

# Start all apps in development
pnpm dev

# Start specific app
pnpm --filter @app/admin dev
```

### Build & Deploy
```bash
# Build all apps
pnpm build

# Build specific app
pnpm --filter @app/admin build

# Run tests
pnpm test

# Lint code
pnpm lint
```

### Adding New Shared Package
```bash
# Create package directory
mkdir -p packages/new-package/src

# Create package.json
cd packages/new-package
pnpm init

# Add dependencies from root
cd ../..
pnpm add <dependency> --filter @repo/new-package
```

---

## 🎯 Best Practices Showcase

### 1. **Code Organization**
- Feature-based folder structure
- Clear separation of concerns
- Reusable shared packages
- Consistent naming conventions

### 2. **Scalability**
- Independent app deployment
- Shared code reduces duplication
- Easy to add new apps
- Caching với Turborepo

### 3. **Type Safety**
- TypeScript throughout
- Shared types package
- API type generation
- Strict mode enabled

### 4. **Developer Experience**
- Fast HMR với Vite
- Parallel builds với Turbo
- Consistent tooling
- Clear documentation

### 5. **Testing Strategy**
- Unit tests cho utils/services
- Component tests cho UI
- Integration tests cho features
- E2E tests cho critical flows

### 6. **CI/CD Pipeline**
- Automated testing
- Independent deployments
- Build caching
- Preview deployments

---

## 📊 Performance Optimization

### Build Optimization
- Turborepo caching (local & remote)
- Incremental builds
- Parallel execution
- Tree-shaking với Vite

### Runtime Optimization
- Code splitting per route
- Lazy loading components
- Image optimization
- Bundle analysis

### Caching Strategy
- Build cache (Turborepo)
- API response cache (React Query)
- Static asset cache (CDN)
- Browser cache headers

---

## 🔒 Security Considerations

### Authentication
- JWT tokens (httpOnly cookies)
- Refresh token rotation
- CSRF protection
- XSS prevention

### API Security
- Rate limiting
- Input validation (Zod)
- CORS configuration
- API key management

### Data Protection
- Environment variables
- Secrets management
- Encryption at rest
- HTTPS enforcement

---

## 📈 Monitoring & Analytics

### Error Tracking
- Sentry integration
- Error boundaries
- User feedback
- Source maps

### Performance Monitoring
- Core Web Vitals
- API response times
- Bundle size tracking
- User analytics

---

## 🗺️ Deployment Strategy

### Hosting Options
- **Landing**: Vercel/Netlify (Static)
- **Admin**: Vercel/Netlify (SPA)
- **Customer**: Vercel/Netlify (SPA)
- **Billing**: Vercel/Netlify (SPA)

### Environment Strategy
```
Development  → Feature branches
Staging      → develop branch
Production   → main branch
```

### Domain Structure
```
landing.domain.com    → Landing Page
app.domain.com        → Customer App
admin.domain.com      → Admin App
billing.domain.com    → Billing App
```

---

## 🎓 Learning Resources

### Architecture Patterns
- Monorepo best practices
- Component design patterns
- State management strategies
- API client architecture

### Tools & Technologies
- Turborepo documentation
- pnpm workspace guide
- Vite configuration
- React best practices

---

## 🔄 Future Enhancements

### Phase 1 (Current)
- ✅ Monorepo setup
- ✅ 4 apps structure
- ✅ Shared packages
- ✅ Basic payment

### Phase 2
- [ ] Advanced payment features
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Mobile responsive

### Phase 3
- [ ] API rate limiting per tier
- [ ] Advanced permission system
- [ ] Webhooks
- [ ] Integration marketplace

### Phase 4
- [ ] Mobile apps (React Native)
- [ ] Desktop app (Electron)
- [ ] Browser extension
- [ ] Public API

---

## 📝 Documentation Strategy

### Code Documentation
- JSDoc comments
- README per package
- Architecture diagrams
- API documentation

### Developer Guides
- Setup instructions
- Contributing guidelines
- Code style guide
- Troubleshooting

---

## 🎉 Benefits of This Architecture

### For Developers
1. **Shared Code**: Không lặp lại logic
2. **Type Safety**: Shared types giữa apps
3. **Fast Development**: Vite + Turbo
4. **Easy Testing**: Isolated packages

### For Business
1. **Scalability**: Dễ thêm features/apps mới
2. **Maintainability**: Cấu trúc rõ ràng
3. **Cost Effective**: Shared infrastructure
4. **Flexibility**: Deploy độc lập

### For Team Lead
1. **Code Quality**: Consistent patterns
2. **Onboarding**: Clear structure
3. **Collaboration**: Parallel development
4. **Portfolio**: Showcase architecture skills

---

## 📞 Next Steps

1. **Initialize monorepo**
   - Setup pnpm workspace
   - Configure Turborepo
   - Create base packages

2. **Setup first app**
   - Landing page (simplest)
   - Integrate shared packages
   - Test workflow

3. **Build shared packages**
   - UI components
   - API client
   - Auth context

4. **Develop remaining apps**
   - Customer app
   - Admin app
   - Billing app

5. **Setup CI/CD**
   - GitHub Actions
   - Automated tests
   - Deployment pipeline

---

**Prepared by**: Lead Developer
**Last Updated**: 2026-02-02
**Version**: 1.0