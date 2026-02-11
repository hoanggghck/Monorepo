import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import { lazy } from "react"

const DashboardPage = lazy(() => import("./pages/dashboard"));
const TasksPage = lazy(() => import("./pages/tasks"));
const LeavePage = lazy(() => import("./pages/leave"));
const TimeTrackingPage = lazy(() => import("./pages/time-tracking"));
const NotificationsPage = lazy(() => import("./pages/notification"));

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
        path: "tasks",
        element: <TasksPage />
      },
      {
        path: "time-tracking",
        element: <TimeTrackingPage />
      },
      {
        path: "leave",
        element: <LeavePage />
      },
      {
        path: "notification",
        element: <NotificationsPage />
      }
    ],
  },
])
