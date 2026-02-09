import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";
import { checkInHistory } from "~/mock/time-tracking";

export const CheckingTable = () => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="bg-gray-50 border-b border-gray-200">
          <TableHead className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
            Ngày
          </TableHead>
          <TableHead className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
            Giờ Vào
          </TableHead>
          <TableHead className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
            Giờ Ra
          </TableHead>
          <TableHead className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
            Giờ Làm
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {checkInHistory.map((record, idx) => (
          <TableRow
            key={idx}
            className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <TableCell className="px-6 py-4 text-sm font-medium text-gray-900">
              {new Date(record.date).toLocaleDateString("vi-VN", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </TableCell>
            <TableCell className="px-6 py-4 text-sm text-gray-600">
              {record.checkInTime}
            </TableCell>
            <TableCell className="px-6 py-4 text-sm text-gray-600">
              {record.checkOutTime}
            </TableCell>
            <TableCell className="px-6 py-4 text-sm font-semibold text-gray-900">
              {record.workingHours}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}