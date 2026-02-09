import { StatusRequest } from "@repo/types";
import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui"
import { requests } from "~/mock/request"

export const RequestTable = () => {
  
  const getStatusColor = (status: StatusRequest) => {
    switch (status) {
      case StatusRequest.Approved:
        return "bg-green-100 text-green-700";
      case StatusRequest.Pending:
        return "bg-yellow-100 text-yellow-700";
      case StatusRequest.UnderReview:
        return "bg-blue-100 text-blue-700";
      case StatusRequest.Rejected:
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Table className="w-full text-sm">
      <TableHeader>
        <TableRow className="border-b border-border">
          <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
            Loại
          </TableHead>
          <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
            Nhân Viên
          </TableHead>
          <TableHead className="text-left py-3 px-4 font-medium text-muted-foreground">
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
            className="border-b border-border hover:bg-gray-50 transition-colors"
          >
            <TableCell className="py-3 px-4 font-medium text-foreground">
              {request.type}
            </TableCell>
            <TableCell className="py-3 px-4 text-foreground">
              {request.employee}
            </TableCell>
            <TableCell className="py-3 px-4 text-muted-foreground text-xs">
              {request.dates || request.amount || request.description}
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