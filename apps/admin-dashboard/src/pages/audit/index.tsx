import { IconBookMarked, IconSearch } from "@repo/icons";
import { Card, Input, Label, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";
import { useState } from "react";

export default function AuditPage() {
  const [filterUser, setFilterUser] = useState("");
  const [filterAction, setFilterAction] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const auditLogs = [
    {
      id: 1,
      user: "Sarah Johnson",
      action: "Created new department",
      target: "Engineering",
      timestamp: "2024-02-05 10:30 AM",
      details: "Created new Engineering department with 5 initial members",
    },
    {
      id: 2,
      user: "Michael Chen",
      action: "Approved leave request",
      target: "John Smith - 5 days",
      timestamp: "2024-02-05 09:15 AM",
      details: "Approved annual leave for John Smith from Feb 10-16",
    },
    {
      id: 3,
      user: "Emily Davis",
      action: "Modified user permissions",
      target: "Alex Rodriguez",
      timestamp: "2024-02-04 03:45 PM",
      details:
        "Changed role from Employee to Manager, added 12 new permissions",
    },
    {
      id: 4,
      user: "System",
      action: "Scheduled workflow",
      target: "Payroll Processing",
      timestamp: "2024-02-04 02:00 PM",
      details: "Monthly payroll processing workflow started",
    },
    {
      id: 5,
      user: "Lisa Wong",
      action: "Created new user",
      target: "David Park",
      timestamp: "2024-02-04 11:20 AM",
      details:
        "Created new employee account for David Park (david.park@company.com)",
    },
    {
      id: 6,
      user: "Robert Taylor",
      action: "Updated company policy",
      target: "Remote Work Policy",
      timestamp: "2024-02-03 04:30 PM",
      details: "Updated remote work policy with new flexible working hours",
    },
    {
      id: 7,
      user: "Jessica Brown",
      action: "Submitted expense report",
      target: "$1,250.00",
      timestamp: "2024-02-03 01:15 PM",
      details:
        "Submitted expense reimbursement request for conference attendance",
    },
    {
      id: 8,
      user: "Chris Wilson",
      action: "Modified workflow",
      target: "Leave Request Workflow",
      timestamp: "2024-02-02 10:00 AM",
      details: "Changed SLA from 5 to 3 business days for leave approvals",
    },
  ];

  const filteredLogs = auditLogs.filter((log) => {
    const userMatch = log.user.toLowerCase().includes(filterUser.toLowerCase());
    const actionMatch = log.action
      .toLowerCase()
      .includes(filterAction.toLowerCase());
    return userMatch && actionMatch;
  });
  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Nhật Ký Kiểm Toán
        </h1>
        <p className="text-muted-foreground mt-2">
          Theo dõi tất cả các hoạt động hệ thống và hành động của người dùng để
          tuân thủ và bảo mật.
        </p>
      </div>
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <IconSearch size={20} className="text-muted-foreground" />
          <h3 className="font-medium text-foreground">Bộ Lọc</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="mb-2">
              Lọc Theo Người Dùng
            </Label>
            <Input
              type="text"
              value={filterUser}
              onChange={(e) => setFilterUser(e.target.value)}
              placeholder="Tìm kiếm tên người dùng..."
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <Label className="mb-2">
              Lọc Theo Hành Động
            </Label>
            <Input
              type="text"
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
              placeholder="Tìm kiếm hành động..."
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <Label className="mb-2">
              Lọc Theo Ngày
            </Label>
            <Input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </Card>
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <IconBookMarked size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-foreground">
            Nhật Ký Hoạt Động ({filteredLogs.length})
          </h2>
        </div>
        <div className="overflow-x-auto">
          <Table className="w-full text-sm">
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
                  Người Dùng
                </TableHead>
                <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
                  Hành Động
                </TableHead>
                <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
                  Mục Tiêu
                </TableHead>
                <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
                  Thời Gian
                </TableHead>
                <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
                  Chi Tiết
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow
                  key={log.id}
                  className="border-b border-border hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="py-3 px-4 font-medium text-foreground">
                    {log.user}
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                      {log.action}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 px-4 text-muted-foreground text-sm">
                    {log.target}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-muted-foreground text-xs">
                    {log.timestamp}
                  </TableCell>
                  <TableCell
                    className="py-3 px-4 text-muted-foreground text-xs max-w-xs truncate"
                    title={log.details}
                  >
                    {log.details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredLogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Không có nhật ký kiểm toán nào phù hợp với bộ lọc của bạn.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
