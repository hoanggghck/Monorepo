import {
  IconPlus,
  IconSearch,
  IconTrendingDown,
  IconTrendingUp,
} from "@repo/icons";
import { Button, Card, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
import { useState } from "react";
import { CartDetail } from "~/components/projects/CartDetail";
import { CardProject } from "~/components/projects/CartProject";
import { BarChartRevenue } from "~/components/projects/chart/BarChartRevenue";
import { PieChartPercent } from "~/components/projects/chart/PieChartPercent";
import { ChartWrapper } from "~/components/projects/ChartWrapper";
import { mockProjects } from "~/mock/projects";

const statusColors = {
  ongoing: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-700 dark:text-blue-300",
    badge: "bg-blue-100 dark:bg-blue-900",
  },
  completed: {
    bg: "bg-green-50 dark:bg-green-950/30",
    text: "text-green-700 dark:text-green-300",
    badge: "bg-green-100 dark:bg-green-900",
  },
  "on-hold": {
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    text: "text-yellow-700 dark:text-yellow-300",
    badge: "bg-yellow-100 dark:bg-yellow-900",
  },
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const totalBudget = mockProjects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = mockProjects.reduce((sum, p) => sum + p.spent, 0);
  const totalRevenue = mockProjects.reduce((sum, p) => sum + p.revenue, 0);
  const totalProfit = totalRevenue - totalSpent;

  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Quản lý Dự Án</h1>
        <p className="mt-2 text-muted-foreground">
          Theo dõi chi phí, doanh thu và lợi nhuận từng dự án
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CartDetail 
          title="Tổng Ngân Sách"
          amount={totalBudget}
        >
          <p className="mt-2 text-xs text-primary">
            {mockProjects.length} dự án
          </p>
        </CartDetail>
        <CartDetail 
          title="Tổng Chi Tiêu"
          amount={totalSpent}
        >
          <p className="mt-2 text-xs text-info">
            {((totalSpent / totalBudget) * 100).toFixed(1)}% ngân sách
          </p>
        </CartDetail>
        <CartDetail 
          title="Tổng Doanh Thu"
          amount={totalRevenue}
        >
          <p className="mt-2 text-xs text-success">
            +{formatCurrency(totalRevenue - totalSpent)}
          </p>
        </CartDetail>
        <CartDetail 
          title="Tổng Lợi Nhuận"
          amount={totalProfit}
        >
          <p className={`mt-2 flex items-center gap-1 text-xs font-semibold ${totalProfit >= 0 ? "text-success" : "text-destructive"}`}>
            {totalProfit >= 0 ? (
              <>
                <IconTrendingUp className="h-3 w-3 text-success" />
                Lợi nhuận
              </>
            ) : (
              <>
                <IconTrendingDown className="h-3 w-3 text-error" />
                Lỗ
              </>
            )}
          </p>
        </CartDetail>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <ChartWrapper className="lg:col-span-2" title="Lợi Nhuận Theo Dự Án" subtitle="Chi phí · Doanh thu · Lợi nhuận">
          <BarChartRevenue />
        </ChartWrapper>
        <ChartWrapper className="" title="Phân Bổ Ngân Sách" subtitle="Tỷ trọng ngân sách theo từng dự án">
          <PieChartPercent />
        </ChartWrapper>
      </div>
      <Card className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <div className="relative">
              <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm dự án..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-64"
              />
            </div>
            <div className="w-50">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn một nhóm..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả Trạng thái</SelectItem>
                  <SelectItem value="ongoing">Đang thực hiện</SelectItem>
                  <SelectItem value="completed">Hoàn thành</SelectItem>
                  <SelectItem value="on-hold">Tạm dừng</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
            <IconPlus className="h-4 w-4" />
            Dự Án Mới
          </Button>
        </div>
        <div className="space-y-4">
          {mockProjects.map((project) => {
            const colors = statusColors[project.status];
            const profit = project.revenue - project.spent;
            return (
              <CardProject 
                key={project.id}
                colors={colors}
                profit={profit}
                project={project}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
}
