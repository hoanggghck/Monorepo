import { TitleBlock } from "~/components/common/TitleBlock";
import { ActivityCard } from "~/components/dashboard/ActivityCard";
import { EmployeeCard, NotificationCard, StatusCard, TaskCard } from "~/components/dashboard/Cards";
import { RecentCard } from "~/components/dashboard/RecentCard";
import { user } from "~/mock/dashboard";

export default function DashboardPage() {
  
  return (
    <>
      <TitleBlock 
        title={`Chào mừng trở lại, ${user?.name.split(" ")[0]}!`} 
        description={new Date().toLocaleDateString("vi-VN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <EmployeeCard />
        <StatusCard />
        <TaskCard />
        <NotificationCard />
      </div>
      <RecentCard />
      <ActivityCard />
    </>
  );
}
