import { IconBookMarked } from "@repo/icons";
import { Card, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";
import { AUDIT_ACTION_COLOR, AUDIT_ACTION_LABEL, auditLogs } from "~/mock/audit";

const AuditTable = () => {
  
  return (
    <Table className="w-full text-sm">
      <TableHeader>
        <TableRow>
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
        {auditLogs.map((log) => (
          <TableRow
            key={log.id}
          >
            <TableCell className="py-3 px-4 font-medium text-foreground">
              {log.user}
            </TableCell>
            <TableCell className="py-3 px-4">
              <span className={`inline-block px-3 text-nowrap py-1 rounded text-xs font-medium
                ${AUDIT_ACTION_COLOR[log.action]}`}>
                {AUDIT_ACTION_LABEL[log.action]}
              </span>
            </TableCell>
            <TableCell className="py-3 px-4 text-muted-foreground text-sm">
              <p className="min-w-30">{log.target}</p>
            </TableCell>
            <TableCell className="py-3 px-4 text-muted-foreground text-xs">
              <p className="min-w-30">{log.timestamp}</p>
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
  )
}

export const TableBlock = () => {
  return (
    <Card className="p-0 md:p-0">
      <div className="flex items-center gap-2 p-4">
        <IconBookMarked size={24} className="text-primary" />
        <h2 className="text-xl font-bold text-foreground">
          Nhật Ký Hoạt Động ({auditLogs.length})
        </h2>
      </div>
      <div className="overflow-x-auto">
        <AuditTable />
      </div>
      {auditLogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Không có nhật ký kiểm toán nào phù hợp với bộ lọc của bạn.
          </p>
        </div>
      )}
    </Card>
  )
}