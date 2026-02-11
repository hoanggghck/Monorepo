import {
  IconTrendingDown,
  IconTrendingUp,
} from "@repo/icons";
import { formatCurrency } from "@repo/utils";
import { TitleBlock } from "~/components/common/TitleBlock";
import { CardDetail } from "~/components/projects/card/CardDetail";
import { BarChartRevenue } from "~/components/projects/chart/BarChartRevenue";
import { PieChartPercent } from "~/components/projects/chart/PieChartPercent";
import { ChartWrapper } from "~/components/projects/ChartWrapper";
import { ProjectWrapper } from "~/components/projects/ProjectWrapper";
import { mockProjects } from "~/mock/projects";

export default function ProjectsPage() {
  const totalBudget = mockProjects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = mockProjects.reduce((sum, p) => sum + p.spent, 0);
  const totalRevenue = mockProjects.reduce((sum, p) => sum + p.revenue, 0);
  const totalProfit = totalRevenue - totalSpent;

  return (
    <div className="grid grid-cols-1 gap-6">
      <TitleBlock 
        title="Quản lý Dự Án"
        description="Theo dõi chi phí, doanh thu và lợi nhuận từng dự án"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CardDetail 
          title="Tổng Ngân Sách"
          amount={totalBudget}
        >
          <p className="mt-2 text-xs text-primary">
            {mockProjects.length} dự án
          </p>
        </CardDetail>
        <CardDetail 
          title="Tổng Chi Tiêu"
          amount={totalSpent}
        >
          <p className="mt-2 text-xs text-info">
            {((totalSpent / totalBudget) * 100).toFixed(1)}% ngân sách
          </p>
        </CardDetail>
        <CardDetail 
          title="Tổng Doanh Thu"
          amount={totalRevenue}
        >
          <p className="mt-2 text-xs text-success">
            +{formatCurrency(totalRevenue - totalSpent)}
          </p>
        </CardDetail>
        <CardDetail 
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
        </CardDetail>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <ChartWrapper className="lg:col-span-2" title="Lợi Nhuận Theo Dự Án" subtitle="Chi phí · Doanh thu · Lợi nhuận">
          <BarChartRevenue />
        </ChartWrapper>
        <ChartWrapper className="" title="Phân Bổ Ngân Sách" subtitle="Tỷ trọng ngân sách theo từng dự án">
          <PieChartPercent />
        </ChartWrapper>
      </div>
      <ProjectWrapper />
    </div>
  );
}
