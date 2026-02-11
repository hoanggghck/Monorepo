import { IconPlus, IconSearch } from "@repo/icons";
import { Button, Card, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { mockProjects } from "~/mock/projects";
import { CardProject } from "./card/CardProject";

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

export const ProjectWrapper = () => {
  return (
    <Card className="md:p-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Tìm kiếm dự án..."
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
      <div className="space-y-4 p-4">
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
  )
}