import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";

const DashboardPage = lazy(() => import("./pages/dashboard"));
const PayrollPage = lazy(() => import("./pages/payroll"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const AnalyticsPage = lazy(() => import("./pages/analytics"));
const OverviewPage = lazy(() => import("./pages/overview"));

const withSuspense = (Component: React.ReactNode) => (
  <Suspense fallback={<div className="p-6">Loading...</div>}>
    {Component}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: null,
    children: [
      { path: "login", element: null },
      { path: "forgot-password", element: null },
      { path: "switch-role", element: null },
      {
        path: "*",
        element: <ErrorPage />
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage code={500} title="Lỗi hệ thống" />,
    children: [
      { index: true, element: withSuspense(<DashboardPage />) },
      {
        path: "payroll",
        element: withSuspense(<PayrollPage />),
      },
      {
        path: "projects",
        element: withSuspense(<ProjectsPage />),
      },
      {
        path: "analytics",
        element: withSuspense(<AnalyticsPage />),
      },
      {
        path: "overview",
        element: withSuspense(<OverviewPage />),
      }
    ],
  },
]);
