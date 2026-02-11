import { IconPlus } from "@repo/icons";
import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { TitleBlock } from "~/components/common/TitleBlock";
import { RequestBlock } from "~/components/request/RequestBlock";

export default function RequestsPage() {
  
  return (
    <>
      <TitleBlock title="Quản Lý Yêu Cầu" description="Xem và quản lý tất cả yêu cầu của nhân viên trên toàn tổ chức.">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <IconPlus size={18} className="mr-2" />
          Yêu Cầu Mới
        </Button>
      </TitleBlock>
      <div className="flex flex-wrap gap-4 mb-5">
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
          className="flex-1"
        />
      </div>
      <RequestBlock />
    </>
  );
}
