import { IconClipboardList, IconPlus } from "@repo/icons";
import { Button, Card, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { RequestTable } from "~/components/request/RequestTable";

export default function RequestsPage() {
  
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
      <Card className="p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <Select>
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
          <Select>
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
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <IconClipboardList size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-foreground">Tất Cả Yêu Cầu</h2>
        </div>
        <div className="overflow-x-auto">
          <RequestTable />
        </div>
      </Card>
    </div>
  );
}
