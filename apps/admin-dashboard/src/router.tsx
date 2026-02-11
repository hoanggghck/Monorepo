import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";

const DashboardPage = lazy(() => import("./pages/dashboard"));
const OrganizationPage = lazy(() => import("./pages/organization"));
const UsersPage = lazy(() => import("./pages/users"));
const RequestsPage = lazy(() => import("./pages/requests"));
const WorkflowsPage = lazy(() => import("./pages/workflows"));
const ContactPage = lazy(() => import("./pages/contact"));
const AuditPage = lazy(() => import("./pages/audit"));

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
    errorElement: (
      <ErrorPage
        code={500}
        title="Lỗi hệ thống"
        message="Đã xảy ra lỗi. Vui lòng thử lại sau."
      />
    ),
    children: [
      { index: true, element: withSuspense(<DashboardPage />) },
      {
        path: "organization",
        element: withSuspense(<OrganizationPage />),
      },
      {
        path: "users",
        element: withSuspense(<UsersPage />),
      },
      {
        path: "requests",
        element: withSuspense(<RequestsPage />),
      },
      {
        path: "workflows",
        element: withSuspense(<WorkflowsPage />),
      },
      {
        path: "contact",
        element: withSuspense(<ContactPage />),
      },
      {
        path: "audit",
        element: withSuspense(<AuditPage />),
      }
    ],
  },
]);
