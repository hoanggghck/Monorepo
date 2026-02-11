import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";

const DashboardPage = lazy(() => import("./pages/dashboard"));
const TasksPage = lazy(() => import("./pages/tasks"));
const LeavePage = lazy(() => import("./pages/leave"));
const TimeTrackingPage = lazy(() => import("./pages/time-tracking"));
const NotificationsPage = lazy(() => import("./pages/notification"));

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
        path: "tasks",
        element: withSuspense(<TasksPage />),
      },
      {
        path: "time-tracking",
        element: withSuspense(<TimeTrackingPage />),
      },
      {
        path: "leave",
        element: withSuspense(<LeavePage />),
      },
      {
        path: "notification",
        element: withSuspense(<NotificationsPage />),
      }
    ],
  },
]);
