import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui"
import { formatCurrency } from "@repo/utils"
import { departmentMetrics } from "~/mock/analyctics"

export const PercentTable = () => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="border-b border-border">
          <TableHead className="px-6 py-3 text-left text-sm font-semibold text-foreground">Phòng Ban</TableHead>
          <TableHead className="px-6 py-3 text-right text-sm font-semibold text-foreground">Doanh Thu</TableHead>
          <TableHead className="px-6 py-3 text-right text-sm font-semibold text-foreground">Chi Phí</TableHead>
          <TableHead className="px-6 py-3 text-right text-sm font-semibold text-foreground">Hiệu Suất</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="divide-y divide-border">
        {departmentMetrics.map((dept, idx) => (
          <TableRow key={idx} className="hover:bg-muted/30 transition-colors">
            <TableCell className="px-6 py-4 text-sm font-medium text-foreground">{dept.department}</TableCell>
            <TableCell className="px-6 py-4 text-right text-sm text-secondary font-semibold">
              {formatCurrency(dept.revenue)}
            </TableCell>
            <TableCell className="px-6 py-4 text-right text-sm text-foreground">
              {formatCurrency(dept.cost)}
            </TableCell>
            <TableCell className="px-6 py-4 text-right">
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                {dept.efficiency}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}