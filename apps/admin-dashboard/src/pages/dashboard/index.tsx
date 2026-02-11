
import { StatWrapper } from "~/components/dashboard/StatCard";
import { RecentActivityWrapper } from "~/components/dashboard/RecentActivity";
import { QuickOperation } from "~/components/dashboard/QuickOperation";
import { SystemStatus } from "~/components/dashboard/StatusSystem";
import { TitleBlock } from "~/components/common/TitleBlock";

export default function DashboardPage() {
  return (
    <>
      <TitleBlock title="Bảng Điều Khiển" description="Chào mừng bạn quay lại! Đây là tổng quan hệ thống HR của bạn." />
      <StatWrapper />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivityWrapper />
        </div>
        <div className="space-y-6">
          <QuickOperation />
          <SystemStatus />
        </div>
      </div>
    </>
  );
}
