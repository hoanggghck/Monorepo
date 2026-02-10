import { createBrowserRouter } from "react-router-dom"
import { lazy } from "react"
import DashboardLayout from "./layouts/DashboardLayout"

const DashboardPage = lazy(() => import("./pages/dashboard"));
const PayrollPage = lazy(() => import("./pages/payroll"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const AnalyticsPage = lazy(() => import("./pages/analytics"));
const OverviewPage = lazy(() => import("./pages/overview"));

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
        path: "payroll",
        element: <PayrollPage />
      },
      {
        path: "projects",
        element: <ProjectsPage />
      },
      {
        path: "analytics",
        element: <AnalyticsPage />
      },
      {
        path: "overview",
        element: <OverviewPage />
      }
    ],
  },
])
