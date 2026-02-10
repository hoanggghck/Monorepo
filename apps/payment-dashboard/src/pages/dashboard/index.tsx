import { Card } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
import { DetailCard } from "~/components/dashboard/card/DetailCard";
import { LineChartRevenueExpenses } from "~/components/dashboard/LineChart";
import { mockDetails, topEmployees } from "~/mock/dashboard";



export default function DashboardPage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Bảng Điều Khiển</h1>
        <p className="mt-2 text-muted-foreground">
          Chào mừng trở lại! Đây là tổng quan tài chính của bạn.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockDetails.map((ele, index) => (
          <DetailCard key={index} data={ele} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 p-6">
          <h2 className="text-lg font-semibold text-foreground">Doanh Thu vs Chi Tiêu</h2>
          <div className="mt-4">
            <LineChartRevenueExpenses />
          </div>
        </Card>
        <Card className="p-6">
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
      <Card className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">Dự Án Đang Thực Hiện</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            {
              name: "Dự án E-commerce",
              progress: 75,
              status: "Đang thực hiện",
              budget: 500000000,
            },
            {
              name: "Hệ thống CRM",
              progress: 45,
              status: "Đang thực hiện",
              budget: 300000000,
            },
            {
              name: "Mobile App",
              progress: 90,
              status: "Sắp hoàn thành",
              budget: 200000000,
            },
          ].map((project, idx) => (
            <div key={idx} className="bg-muted/40 p-4">
              <p className="font-semibold text-foreground">{project.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{project.status}</p>
              <div className="mt-3 h-2 w-full rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">
                {formatCurrency(project.budget)}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}