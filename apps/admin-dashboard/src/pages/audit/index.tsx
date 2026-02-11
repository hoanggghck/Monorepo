import { IconBookMarked, IconFilter } from "@repo/icons";
import { Card, DatePicker, Input } from "@repo/ui";
import { useState } from "react";
import { AuditTable } from "~/components/audit/AuditTable";
import { auditLogs } from "~/mock/audit";

export default function AuditPage() {
  const [filterUser, setFilterUser] = useState("");
  const [filterAction, setFilterAction] = useState("");
  const [filterDate, setFilterDate] = useState<Date>();

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
          <IconFilter size={20} className="text-muted-foreground" />
          <h3 className="font-medium text-foreground">Bộ Lọc</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Input
              type="text"
              value={filterUser}
              onChange={(e) => setFilterUser(e.target.value)}
              placeholder="Tìm kiếm tên người dùng..."
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <Input
              type="text"
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
              placeholder="Tìm kiếm hành động..."
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <DatePicker
              value={filterDate}
              onChange={setFilterDate}
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
          <AuditTable logs={filteredLogs} />
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
