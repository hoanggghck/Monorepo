import { ActivityCard } from "~/components/dashboard/ActivityCard";
import { EmployeeCard, NotificationCard, StatusCard, TaskCard } from "~/components/dashboard/Cards";
import { RecentCard } from "~/components/dashboard/RecentCard";
import { user } from "~/mock/dashboard";

export default function DashboardPage() {
  
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Chào mừng trở lại, {user?.name.split(" ")[0]}!
        </h1>
        <p className="text-gray-500 mt-2">
          {new Date().toLocaleDateString("vi-VN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <EmployeeCard />
        <StatusCard />
        <TaskCard />
        <NotificationCard />
      </div>
      <RecentCard />
      <ActivityCard />
    </div>
  );
}
