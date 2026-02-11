import { DatePicker, Input } from "@repo/ui";
import { useState } from "react";
import { TableBlock } from "~/components/audit/TableBlock";
import { TitleBlock } from "~/components/common/TitleBlock";

export default function AuditPage() {
  const [filterUser, setFilterUser] = useState("");
  const [filterAction, setFilterAction] = useState("");
  const [filterDate, setFilterDate] = useState<Date>();
 
  return (
    <>
      <TitleBlock title="Nhật Ký Kiểm Toán" description="Theo dõi tất cả các hoạt động hệ thống và hành động của người dùng để tuân thủ và bảo mật." />
      <div className="grid md:grid-cols-3 gap-6 mb-5">
        <Input
          type="text"
          value={filterUser}
          onChange={(e) => setFilterUser(e.target.value)}
          placeholder="Tìm kiếm tên người dùng..."
        />
        <Input
          type="text"
          value={filterAction}
          onChange={(e) => setFilterAction(e.target.value)}
          placeholder="Tìm kiếm hành động..."
        />
        <DatePicker
          value={filterDate}
          onChange={setFilterDate}
        />
      </div>
      <TableBlock />
    </>
  );
}
