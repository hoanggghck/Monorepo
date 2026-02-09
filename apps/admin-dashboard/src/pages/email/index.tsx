import { IconPlus, IconSend } from "@repo/icons";
import { Button, Card, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Textarea } from "@repo/ui";
import { useState } from "react";

export default function EmailPage() {
  const [tab, setTab] = useState("compose");

  const emailTemplates = [
    {
      id: 1,
      name: "Welcome Email",
      category: "Onboarding",
      lastModified: "2024-01-15",
      usage: 124,
    },
    {
      id: 2,
      name: "Approval Notification",
      category: "Workflows",
      lastModified: "2024-01-20",
      usage: 45,
    },
    {
      id: 3,
      name: "Leave Confirmation",
      category: "Leaves",
      lastModified: "2024-01-18",
      usage: 78,
    },
    {
      id: 4,
      name: "Performance Review Reminder",
      category: "Reviews",
      lastModified: "2024-01-25",
      usage: 12,
    },
  ];

  const emailLogs = [
    { id: 1, recipient: "john@company.com", subject: "Leave Approval", sent: "2 hours ago", status: "Delivered" },
    { id: 2, recipient: "sarah@company.com", subject: "Workflow Update", sent: "4 hours ago", status: "Delivered" },
    { id: 3, recipient: "team@company.com", subject: "Team Announcement", sent: "1 day ago", status: "Delivered" },
    { id: 4, recipient: "michael@company.com", subject: "Form Update", sent: "2 days ago", status: "Failed" },
    { id: 5, recipient: "hr-team@company.com", subject: "Weekly Report", sent: "3 days ago", status: "Delivered" },
  ];
  return (
    <div className="p-4 md:p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Email & Liên Lạc</h1>
              <p className="text-muted-foreground mt-2">
                Quản lý giao tiếp email, mẫu và nhật ký.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mb-6 border-b border-border">
          {["compose", "templates", "logs"].map((tabName) => (
            <button
              key={tabName}
              onClick={() => setTab(tabName)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                tab === tabName
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tabName === "compose" ? "Soạn Email" : tabName === "templates" ? "Mẫu" : "Nhật Ký Email"}
            </button>
          ))}
        </div>
        {tab === "compose" && (
          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Gửi Email</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">Tới</Label>
                  <Input
                    type="email"
                    placeholder="recipient@company.com"
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">Gửi Tới Nhóm</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Chọn một nhóm..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất Cả Nhân Viên</SelectItem>
                      <SelectItem value="tech">Nhóm Kỹ Thuật</SelectItem>
                      <SelectItem value="manager">Quản Lý</SelectItem>
                      <SelectItem value="hr">Nhóm Nhân Sự</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">Tiêu Đề</Label>
                <Input
                  type="text"
                  placeholder="Tiêu đề email"
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">Mẫu</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="-- Không Có Mẫu --" />
                  </SelectTrigger>
                  <SelectContent>
                    {emailTemplates.map((template) => (
                      <SelectItem key={template.id} value={`${template.id}`}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">Tin Nhắn</Label>
                <Textarea
                  rows={6}
                  placeholder="Viết tin nhắn của bạn ở đây..."
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex gap-3 justify-end">
                <Button variant="outline">Lưu Nháp</Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <IconSend size={18} className="mr-2" />
                  Gửi Email
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Templates Tab */}
        {tab === "templates" && (
          <div className="space-y-6">
            <div className="flex justify-end">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <IconPlus size={18} className="mr-2" />
                Tạo Mẫu
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emailTemplates.map((template) => (
                <Card key={template.id} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-foreground mb-2">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{template.category}</p>
                  <div className="space-y-2 text-xs text-muted-foreground mb-4">
                    <p>Sửa Đổi Lần Cuối: {template.lastModified}</p>
                    <p>Số Lần Sử Dụng: {template.usage} lần</p>
                  </div>
                  <Button variant="outline" className="w-full">Sửa</Button>
                </Card>
              ))}
            </div>
          </div>
        )}
        {tab === "logs" && (
          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Nhật Ký Email</h2>
            <div className="overflow-x-auto">
              <Table className="w-full text-sm">
                <TableHeader>
                  <TableRow className="border-b border-border">
                    <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">Người Nhận</TableHead>
                    <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">Tiêu Đề</TableHead>
                    <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">Gửi Lúc</TableHead>
                    <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">Trạng Thái</TableHead>
                    <TableHead className="text-right py-3 px-4 font-medium text-muted-foreground">Thao Tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailLogs.map((log) => (
                    <TableRow key={log.id} className="border-b border-border hover:bg-gray-50 transition-colors">
                      <TableCell className="py-3 px-4 font-medium text-foreground">{log.recipient}</TableCell>
                      <TableCell className="py-3 px-4 text-muted-foreground">{log.subject}</TableCell>
                      <TableCell className="py-3 px-4 text-muted-foreground text-xs">{log.sent}</TableCell>
                      <TableCell className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            log.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {log.status === "Delivered" ? "Đã Gửi" : "Lỗi"}
                        </span>
                      </TableCell>
                      <TableCell className="py-3 px-4 text-right">
                        <Button variant="outline" size="sm">
                          Xem
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        )}
      </div>
  )
}