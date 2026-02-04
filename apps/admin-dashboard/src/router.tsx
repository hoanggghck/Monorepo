// src/router.tsx
import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import DashboardPage from "./pages/dashboard"
import OrganizationPage from "./pages/organization"
import UsersPage from "./pages/users"
import RequestsPage from "./pages/requests"
import WorkflowsPage from "./pages/workflows"
import EmailPage from "./pages/email"
import AuditPage from "./pages/audit"

// /* Layouts */
// import AuthLayout from "@/layouts/AuthLayout"
// import AdminLayout from "@/layouts/AdminLayout"

// /* Auth */
// import LoginPage from "@/pages/auth/Login"
// import ForgotPasswordPage from "@/pages/auth/ForgotPassword"
// import SwitchRolePage from "@/pages/auth/SwitchRole"

// /* Dashboard */
// import DashboardPage from "@/pages/dashboard/Dashboard"

// /* Organization */
// import CompanyInfoPage from "@/pages/organization/CompanyInfo"
// import DepartmentListPage from "@/pages/organization/DepartmentList"
// import DepartmentDetailPage from "@/pages/organization/DepartmentDetail"
// import OrgChartPage from "@/pages/organization/OrgChart"

// /* Users & Roles */
// import UserListPage from "@/pages/users/UserList"
// import UserFormPage from "@/pages/users/UserForm"
// import RoleListPage from "@/pages/users/RoleList"
// import RoleDetailPage from "@/pages/users/RoleDetail"

// /* Requests */
// import RequestListPage from "@/pages/requests/RequestList"
// import RequestDetailPage from "@/pages/requests/RequestDetail"
// import RequestTimelinePage from "@/pages/requests/RequestTimeline"
// import RequestOverridePage from "@/pages/requests/RequestOverride"

// /* Workflow */
// import WorkflowListPage from "@/pages/workflows/WorkflowList"
// import WorkflowDetailPage from "@/pages/workflows/WorkflowDetail"

// /* Email */
// import SendEmailPage from "@/pages/emails/SendEmail"
// import EmailTemplateListPage from "@/pages/emails/EmailTemplateList"
// import EmailTemplateDetailPage from "@/pages/emails/EmailTemplateDetail"
// import EmailLogPage from "@/pages/emails/EmailLog"

// /* Audit */
// import AuditListPage from "@/pages/audit/AuditList"
// import AuditDetailPage from "@/pages/audit/AuditDetail"

export const router = createBrowserRouter([
  /* ================= AUTH ================= */
  {
    path: "/auth",
    element: null,
    children: [
      { path: "login", element: null },
      { path: "forgot-password", element: null },
      { path: "switch-role", element: null },
    ],
  },

  /* ================= ADMIN ================= */
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      /* Dashboard */
      { index: true, element: <DashboardPage /> },

      /* Organization */
      {
        path: "organization",
        element: <OrganizationPage />
      },

      /* Users & Roles */
      {
        path: "users",
        element: <UsersPage />
      },
      {
        path: "roles",
        children: [
          { index: true, element: null },
          { path: ":id", element: null },
        ],
      },

      /* Requests */
      {
        path: "requests",
        element: <RequestsPage />
      },

      /* Workflow */
      {
        path: "workflows",
        element: <WorkflowsPage />

      },

      /* Email / Communication */
      {
        path: "email",
        element: <EmailPage />
      },

      /* Audit */
      {
        path: "audit",
        element: <AuditPage />
      },
    ],
  },
])
