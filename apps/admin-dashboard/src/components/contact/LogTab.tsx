import { Button, Card, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";
import { emailLogs } from "~/mock/mail";

export const LogTab = () => {
  return (
    <Card>
      <h2 className="text-xl font-bold text-foreground p-4">Nhật Ký Email</h2>
      <div className="overflow-x-auto">
        <Table className="w-full text-sm">
          <TableHeader>
            <TableRow>
              <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">Người Nhận</TableHead>
              <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">Tiêu Đề</TableHead>
              <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">Gửi Lúc</TableHead>
              <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">Trạng Thái</TableHead>
              <TableHead className="text-right py-3 px-4 font-medium text-muted-foreground">Thao Tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emailLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="py-3 px-4 font-medium text-foreground">{log.recipient}</TableCell>
                <TableCell className="py-3 px-4 text-muted-foreground">{log.subject}</TableCell>
                <TableCell className="py-3 px-4 text-muted-foreground text-xs ">
                  <p className="min-w-30">{log.sent}</p>
                </TableCell>
                <TableCell className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium text-nowrap ${
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
  );
}
