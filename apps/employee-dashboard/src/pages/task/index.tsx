import { IconCheckSquare, IconMessageCircle, IconPlus } from "@repo/icons";
import { Button, Card, cn } from "@repo/ui";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
  priority: "low" | "medium" | "high";
  dueDate: string;
  description: string;
  comments: number;
}

export default function TasksPage() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState<"low" | "medium" | "high">("medium");

  const [tasks] = useState<Task[]>([
    {
      id: "1",
      title: "Tích Hợp API",
      status: "doing",
      priority: "high",
      dueDate: "2024-02-10",
      description: "Tích hợp API thanh toán với ứng dụng chính",
      comments: 3,
    },
    {
      id: "2",
      title: "Xem Xét Thiết Kế UI",
      status: "done",
      priority: "medium",
      dueDate: "2024-02-08",
      description: "Xem xét và phê duyệt thiết kế bảng điều khiển mới",
      comments: 2,
    },
    {
      id: "3",
      title: "Tối Ưu Hóa Cơ Sở Dữ Liệu",
      status: "todo",
      priority: "high",
      dueDate: "2024-02-15",
      description: "Tối ưu hóa hiệu suất truy vấn cho phân tích người dùng",
      comments: 5,
    },
    {
      id: "4",
      title: "Tài Liệu",
      status: "todo",
      priority: "low",
      dueDate: "2024-02-20",
      description: "Viết tài liệu kỹ thuật cho các API mới",
      comments: 1,
    },
  ]);

  const [selectedStatus, setSelectedStatus] = useState<"all" | "todo" | "doing" | "done">("all");

  const filteredTasks = selectedStatus === "all" 
    ? tasks 
    : tasks.filter(t => t.status === selectedStatus);

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "todo":
        return "bg-gray-100 text-gray-800";
      case "doing":
        return "bg-blue-100 text-blue-800";
      case "done":
        return "bg-green-100 text-green-800";
    }
  };

  const getStatusLabel = (status: Task["status"]) => {
    switch (status) {
      case "todo":
        return "Cần Làm";
      case "doing":
        return "Đang Làm";
      case "done":
        return "Hoàn Thành";
    }
  };

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "low":
        return "text-gray-500";
      case "medium":
        return "text-orange-500";
      case "high":
        return "text-red-500";
    }
  };

  const getPriorityLabel = (priority: Task["priority"]) => {
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
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Công Việc Của Tôi</h1>
          <p className="text-gray-500 mt-1">
            {filteredTasks.length} công việc
          </p>
        </div>
        <Button
          onClick={() => setIsNewTaskModalOpen(true)}
        >
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
            <Card
              key={task.id}
              className="p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  <input
                    type="checkbox"
                    checked={task.status === "done"}
                    className="w-5 h-5 rounded mt-0.5 cursor-pointer"
                  />
                  <div className="flex-1">
                    <h3 className={cn(
                      "font-semibold text-gray-900",
                      task.status === "done" && "line-through text-gray-500"
                    )}>
                      {task.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{task.description}</p>
                  </div>
                </div>
                <span className={cn(
                  "inline-block px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-4",
                  getStatusColor(task.status)
                )}>
                  {getStatusLabel(task.status)}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className={cn(
                    "font-medium",
                    getPriorityColor(task.priority)
                  )}>
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