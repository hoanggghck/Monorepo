import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import DashboardPage from "./pages/dashboard"
import TasksPage from "./pages/task"
import TimeTrackingPage from "./pages/time-tracking"
import LeavePage from "./pages/leave"
import NotificationsPage from "./pages/notification"

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
