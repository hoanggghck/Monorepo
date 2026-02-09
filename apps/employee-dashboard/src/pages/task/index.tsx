import { IconCheckSquare, IconPlus } from "@repo/icons";
import { Button, cn } from "@repo/ui";
import { useState } from "react";
import { TaskCard } from "~/components/task/TaskCard";
import { taskMock } from "~/mock/task";

export default function TasksPage() {


  const [selectedStatus, setSelectedStatus] = useState<"all" | "todo" | "doing" | "done">("all");

  const filteredTasks = selectedStatus === "all" 
    ? taskMock 
    : taskMock.filter(t => t.status === selectedStatus);

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Công Việc Của Tôi</h1>
          <p className="text-gray-500 mt-1">
            {filteredTasks.length} công việc
          </p>
        </div>
        <Button>
          <IconPlus className="w-5 h-5" />
          Công Việc Mới
        </Button>
      </div>
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {(["all", "todo", "doing", "done"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={cn(
              "px-4 py-3 font-medium text-sm border-b-2 transition-colors capitalize",
              selectedStatus === status
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            )}
          >
            {status === "all" ? "Tất Cả" : status === "todo" ? "Cần Làm" : status === "doing" ? "Đang Làm" : "Hoàn Thành"}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard task={task} key={task.id}/>
          ))
        ) : (
          <div className="text-center py-12">
            <IconCheckSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">Không có công việc trong danh mục này</p>
          </div>
        )}
      </div>
    </div>
  );
}