import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import DashboardPage from "./pages/dashboard"
import OrganizationPage from "./pages/organization"
import UsersPage from "./pages/users"
import RequestsPage from "./pages/requests"
import WorkflowsPage from "./pages/workflows"
import EmailPage from "./pages/email"
import AuditPage from "./pages/audit"

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
      { index: true, element: <DashboardPage /> },
      {
        path: "organization",
        element: <OrganizationPage />
      },
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
      {
        path: "requests",
        element: <RequestsPage />
      },
      {
        path: "workflows",
        element: <WorkflowsPage />

      },
      {
        path: "email",
        element: <EmailPage />
      },
      {
        path: "audit",
        element: <AuditPage />
      },
    ],
  },
])
