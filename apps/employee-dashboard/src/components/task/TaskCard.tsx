import { IconMessageCircle } from "@repo/icons";
import type { TaskI } from "@repo/types";
import { Card, cn } from "@repo/ui";

export const TaskCard = ({ task }: { task: TaskI }) => {
  const getStatusColor = (status: TaskI["status"]) => {
    switch (status) {
      case "todo":
        return "bg-gray-100 text-gray-800";
      case "doing":
        return "bg-blue-100 text-blue-800";
      case "done":
        return "bg-green-100 text-green-800";
    }
  };

  const getStatusLabel = (status: TaskI["status"]) => {
    switch (status) {
      case "todo":
        return "Cần Làm";
      case "doing":
        return "Đang Làm";
      case "done":
        return "Hoàn Thành";
    }
  };

  const getPriorityColor = (priority: TaskI["priority"]) => {
    switch (priority) {
      case "low":
        return "text-gray-500";
      case "medium":
        return "text-orange-500";
      case "high":
        return "text-red-500";
    }
  };

  const getPriorityLabel = (priority: TaskI["priority"]) => {
    switch (priority) {
      case "low":
        return "Ưu Tiên Thấp";
      case "medium":
        return "Ưu Tiên Trung Bình";
      case "high":
        return "Ưu Tiên Cao";
    }
  };

  return (
    <Card key={task.id} className="p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3 flex-1">
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="w-5 h-5 rounded mt-0.5 cursor-pointer"
          />
          <div className="flex-1">
            <h3
              className={cn(
                "font-semibold text-gray-900",
                task.status === "done" && "line-through text-gray-500",
              )}
            >
              {task.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{task.description}</p>
          </div>
        </div>
        <span
          className={cn(
            "inline-block px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-4",
            getStatusColor(task.status),
          )}
        >
          {getStatusLabel(task.status)}
        </span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className={cn("font-medium", getPriorityColor(task.priority))}>
            {getPriorityLabel(task.priority)}
          </span>
          <span className="text-gray-500">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </div>
        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
          <IconMessageCircle className="w-4 h-4" />
          <span className="text-xs">{task.comments}</span>
        </button>
      </div>
    </Card>
  );
};
