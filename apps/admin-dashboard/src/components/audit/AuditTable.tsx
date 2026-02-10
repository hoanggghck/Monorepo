import type { AuditI } from "@repo/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";

export const AuditTable = ({ logs }: { logs: AuditI[] }) => {
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
        {logs.map((log) => (
          <TableRow
            key={log.id}
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
  )
}