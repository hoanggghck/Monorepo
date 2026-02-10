import { IconTrendingDown, IconTrendingUp, IconZap } from "@repo/icons";
import { Card } from "@repo/ui";

import { AnalyticsBarChart } from "~/components/analytics/chart/AnalyticsBarChart";
import { AnalyticsLineChart } from "~/components/analytics/chart/AnalyticsLineChart";
import { AnalyticsPieChart } from "~/components/analytics/chart/AnalyticsPieChart";
import { ChartWrapper } from "~/components/analytics/ChartWrapper";
import { PercentTable } from "~/components/analytics/PercentTable";

const growthMetrics = [
  { label: "Tăng trưởng Doanh thu", value: "+32.5%", change: "+8.2%", icon: IconTrendingUp, color: "text-secondary" },
  { label: "Tăng trưởng Lợi nhuận", value: "+28.3%", change: "+5.1%", icon: IconTrendingUp, color: "text-secondary" },
  { label: "Cải thiện Hiệu suất", value: "+18.7%", change: "+2.3%", icon: IconZap, color: "text-primary" },
  { label: "Giảm Chi phí", value: "-12.4%", change: "-3.2%", icon: IconTrendingDown, color: "text-primary" },
];

export default function AnalyticsPage() {

  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Phân Tích Kinh Doanh</h1>
        <p className="mt-2 text-muted-foreground">
          Thống kê tăng trưởng, phân tích thu chi và theo dõi biến động tài chính
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {growthMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">{metric.label}</p>
                  <p className={`mt-2 text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{metric.change} so với tháng trước</p>
                </div>
                <div className={`rounded-lg p-3 ${metric.color === "text-secondary" ? "bg-secondary/10" : "bg-primary/10"}`}>
                  <Icon className={`h-6 w-6 ${metric.color}`} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <ChartWrapper title="Xu Hướng Doanh Thu & Lợi Nhuận" className="">
        <AnalyticsLineChart />
      </ChartWrapper>
      <div className="grid gap-6 lg:grid-cols-3">
        <ChartWrapper title="Doanh Thu vs Chi Tiêu Hàng Tháng" className="lg:col-span-2">
          <AnalyticsBarChart />
        </ChartWrapper>
        <ChartWrapper title="Phân Bổ Chi Phí" className="">
          <AnalyticsPieChart />
        </ChartWrapper>
      </div>
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground">Hiệu Suất Theo Phòng Ban</h2>
        <div className="mt-6 overflow-x-auto">
          <PercentTable />
        </div>
      </Card>
    </div>
  );
}
