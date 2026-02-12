import { Card } from "@repo/ui"
import { formatCurrency } from "@repo/utils"

export const CurrentProject = () => {
  const projects = [
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
  ]
  return (
    <Card className="bg-white">
      <h2 className="text-lg font-semibold text-foreground p-4 md:p-6">Dự Án Đang Thực Hiện</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((project, idx) => (
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
  )
}
