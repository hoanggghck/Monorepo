import { IconClipboardList, IconPlus } from "@repo/icons";
import { Button, Card, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";

export default function RequestsPage() {
  const requests = [
    {
      id: 1,
      type: "Leave",
      employee: "John Smith",
      dates: "2024-02-10 - 2024-02-16",
      status: "Pending",
      submitted: "1 day ago",
    },
    {
      id: 2,
      type: "Reimbursement",
      employee: "Sarah Johnson",
      amount: "$450.00",
      status: "Approved",
      submitted: "2 days ago",
    },
    {
      id: 3,
      type: "Leave",
      employee: "Michael Chen",
      dates: "2024-02-20 - 2024-02-23",
      status: "Pending",
      submitted: "3 hours ago",
    },
    {
      id: 4,
      type: "Task Assignment",
      employee: "Emily Davis",
      description: "Project Alpha - Phase 2",
      status: "Under Review",
      submitted: "5 hours ago",
    },
    {
      id: 5,
      type: "Reimbursement",
      employee: "Alex Rodriguez",
      amount: "$200.50",
      status: "Rejected",
      submitted: "1 week ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Under Review":
        return "bg-blue-100 text-blue-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Quản Lý Yêu Cầu
            </h1>
            <p className="text-muted-foreground mt-2">
              Xem và quản lý tất cả yêu cầu của nhân viên trên toàn tổ chức.
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <IconPlus size={18} className="mr-2" />
            Yêu Cầu Mới
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <Select
          >
            <SelectTrigger className="w-50">
              <SelectValue placeholder="Chọn danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Tất cả</SelectItem>
              <SelectItem value="1">Nghỉ phép</SelectItem>
              <SelectItem value="2">Hoàn lại chi phí</SelectItem>
              <SelectItem value="3">Gán nhiệm vụ</SelectItem>
            </SelectContent>
          </Select>
          <Select
          >
            <SelectTrigger className="w-50">
              <SelectValue placeholder="Chọn trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Tất Cả Trạng Thái</SelectItem>
              <SelectItem value="1">Đang Chờ</SelectItem>
              <SelectItem value="2">Phê Duyệt</SelectItem>
              <SelectItem value="3">Từ Chối</SelectItem>
              <SelectItem value="4">Đang Xem Xét</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder="Tìm kiếm theo tên nhân viên..."
            className="px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm flex-1 min-w-50"
          />
        </div>
      </Card>

      {/* Requests List */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <IconClipboardList size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-foreground">Tất Cả Yêu Cầu</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  Loại
                </th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  Nhân Viên
                </th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  Chi Tiết
                </th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  Trạng Thái
                </th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  Nộp Lúc
                </th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                  Thao Tác
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr
                  key={request.id}
                  className="border-b border-border hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-foreground">
                    {request.type}
                  </td>
                  <td className="py-3 px-4 text-foreground">
                    {request.employee}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">
                    {request.dates || request.amount || request.description}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">
                    {request.submitted}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="outline" size="sm">
                      Xem
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
