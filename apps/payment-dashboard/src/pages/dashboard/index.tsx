import { Card } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
import { TitleBlock } from "~/components/common/TitleBlock";
import { DetailCard } from "~/components/dashboard/card/DetailCard";
import { LineChartRevenueExpenses } from "~/components/dashboard/chart/LineChart";
import { CurrentProject } from "~/components/dashboard/CurrentProject";
import { mockDetails, topEmployees } from "~/mock/dashboard";

export default function DashboardPage() {
  return (
    <>
      <TitleBlock 
        title="Bảng Điều Khiển"
        description="Chào mừng trở lại! Đây là tổng quan tài chính của bạn."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {mockDetails.map((ele, index) => (
          <DetailCard key={index} data={ele} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3 mb-6">
        <Card className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-foreground">Doanh Thu vs Chi Tiêu</h2>
          <div className="mt-4">
            <LineChartRevenueExpenses />
          </div>
        </Card>
        <Card className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-foreground">Nhân Viên Hàng Đầu</h2>
          <div className="mt-4 space-y-4">
            {topEmployees.map((emp, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-border pb-4 last:border-b-0">
                <div>
                  <p className="font-medium text-foreground">{emp.name}</p>
                  <p className="text-xs text-muted-foreground">{emp.dept}</p>
                </div>
                <p className="font-semibold text-secondary">{formatCurrency(emp.salary)}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <CurrentProject />
    </>
  )
}