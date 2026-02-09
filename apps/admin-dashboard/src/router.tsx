import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout";
import { lazy } from "react";

const DashboardPage = lazy(() => import("./pages/dashboard"));
const OrganizationPage = lazy(() => import("./pages/organization"));
const UsersPage = lazy(() => import("./pages/users"));
const RequestsPage = lazy(() => import("./pages/requests"));
const WorkflowsPage = lazy(() => import("./pages/workflows"));
const EmailPage = lazy(() => import("./pages/email"));
const AuditPage = lazy(() => import("./pages/audit"));

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: null,
    children: [
      { path: "login", element: null },
      { path: "forgot-password", element: null },
      { path: "switch-role", element: null },
    ],
  },
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
