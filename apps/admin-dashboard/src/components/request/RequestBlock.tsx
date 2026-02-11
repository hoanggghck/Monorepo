import { IconClipboardList } from "@repo/icons";
import { Button, Card, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui"
import { requests } from "~/mock/request"

const RequestTable = () => {
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return "bg-green-100 text-green-700";
      case 'pending':
        return "bg-yellow-100 text-yellow-700";
      case 'undereview':
        return "bg-blue-100 text-blue-700";
      case 'rejected':
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Table className="w-full text-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
            Loại
          </TableHead>
          <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
            Nhân Viên
          </TableHead>
          <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground text-nowrap">
            Chi Tiết
          </TableHead>
          <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
            Trạng Thái
          </TableHead>
          <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
            Nộp Lúc
          </TableHead>
          <TableHead className="text-right py-3 px-4 font-medium text-muted-foreground">
            Thao Tác
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request) => (
          <TableRow
            key={request.id}
          >
            <TableCell className="py-3 px-4 font-medium text-foreground">
              {request.type}
            </TableCell>
            <TableCell className="py-3 px-4 text-foreground">
              {request.employee}
            </TableCell>
            <TableCell className="py-3 px-4 text-muted-foreground text-xs">
              <p className="min-w-30">
                {request.dates || request.amount || request.description}
              </p>
            </TableCell>
            <TableCell className="py-3 px-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}
              >
                {request.status}
              </span>
            </TableCell>
            <TableCell className="py-3 px-4 text-muted-foreground text-xs">
              {request.submitted}
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
  )
}

export const RequestBlock = () => {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-6">
        <IconClipboardList size={24} className="text-primary" />
        <h2 className="text-xl font-bold text-foreground">Tất Cả Yêu Cầu</h2>
      </div>
      <div className="overflow-x-auto">
        <RequestTable />
      </div>
    </Card>
  )
}