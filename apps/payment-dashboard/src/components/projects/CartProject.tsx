import type { ProjectI } from "@repo/types"
import { Card } from "@repo/ui"
import { formatCurrency } from "@repo/utils"

interface CompProps {
  project: ProjectI;
  profit: number;
  colors: any;
}

const statusLabels = {
  ongoing: "Đang thực hiện",
  completed: "Hoàn thành",
  "on-hold": "Tạm dừng",
};

export const CardProject = ({project, profit, colors}: CompProps) => {
  return (
    <Card
      className="p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="text-xs font-medium text-muted-foreground">
            DỰ ÁN
          </p>
          <p className="mt-2 font-semibold text-foreground">
            {project.name}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {project.client}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted-foreground">
            NGÂN SÁCH / CHI TIÊU
          </p>
          <p className="mt-2 font-semibold text-foreground">
            {formatCurrency(project.spent)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            / {formatCurrency(project.budget)}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted-foreground">
            DOANH THU
          </p>
          <p className="mt-2 font-semibold text-foreground">
            {formatCurrency(project.revenue)}
          </p>
          <p className="mt-1 text-xs text-secondary">
            +{((project.revenue / project.budget) * 100).toFixed(0)}%
            ngân sách
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted-foreground">
            LỢI NHUẬN
          </p>
          <p
            className={`mt-2 font-semibold ${profit >= 0 ? "text-secondary" : "text-destructive"}`}
          >
            {formatCurrency(profit)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {((profit / project.budget) * 100).toFixed(1)}% margin
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted-foreground">
            TRẠNG THÁI
          </p>
          <span
            className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}
          >
            {statusLabels[project.status]}
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <p className="text-xs text-muted-foreground">
              Tiến độ: {project.progress}%
            </p>
          </div>
          <div className="h-2 w-full rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground sm:ml-4">
          {project.startDate} → {project.endDate}
        </p>
      </div>
    </Card>
  )
}