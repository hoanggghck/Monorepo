import { IconPlus } from "@repo/icons";
import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { TitleBlock } from "~/components/common/TitleBlock";
import { RequestBlock } from "~/components/request/RequestBlock";

export default function RequestsPage() {

  return (
    <div className="grid grid-cols-1 gap-3">
      <TitleBlock title="Quản Lý Yêu Cầu" description="Xem và quản lý tất cả yêu cầu của nhân viên trên toàn tổ chức.">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <IconPlus size={18} className="mr-2" />
          Yêu Cầu Mới
        </Button>
      </TitleBlock>
      <div className="grid lg:grid-cols-3 gap-5 mb-5">
        <Select>
          <SelectTrigger>
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
          <SelectTrigger>
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
        />
      </div>
      <RequestBlock />
    </div>
  );
}
