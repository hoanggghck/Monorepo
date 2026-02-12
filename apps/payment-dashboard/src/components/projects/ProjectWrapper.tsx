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
    <div className="mt-6">
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="relative w-full">
          <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Tìm kiếm dự án..."
            className="pl-9"
          />
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Chọn một nhóm..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả Trạng thái</SelectItem>
            <SelectItem value="ongoing">Đang thực hiện</SelectItem>
            <SelectItem value="completed">Hoàn thành</SelectItem>
            <SelectItem value="on-hold">Tạm dừng</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex justify-end">
          <Button className="w-30">
            <IconPlus className="h-4 w-4" />
            Dự Án Mới
          </Button>
        </div>
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
    </div>
  )
}
