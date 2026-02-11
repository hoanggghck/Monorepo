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
      <TitleBlock title="text-3xl font-bold text-foreground" description="text-muted-foreground mt-2" />
      <div className="flex flex-wrap gap-6 mb-5">
        <Input
          type="text"
          value={filterUser}
          onChange={(e) => setFilterUser(e.target.value)}
          placeholder="Tìm kiếm tên người dùng..."
          className="flex-1"
        />
        <Input
          type="text"
          value={filterAction}
          onChange={(e) => setFilterAction(e.target.value)}
          placeholder="Tìm kiếm hành động..."
          className="flex-1"
        />
        <DatePicker
          value={filterDate}
          onChange={setFilterDate}
          className="flex-1"
        />
      </div>
      <TableBlock />
    </>
  );
}
