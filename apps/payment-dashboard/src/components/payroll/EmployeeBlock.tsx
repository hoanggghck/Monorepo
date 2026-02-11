import { Button, Card, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
import { mockEmployees } from "~/mock/payroll";
import { IconDownload, IconPlus, IconSearch } from "@repo/icons";

const statusColors = {
  paid: { bg: "bg-green-50 dark:bg-green-950/30", text: "text-green-700 dark:text-green-300" },
  pending: { bg: "bg-yellow-50 dark:bg-yellow-950/30", text: "text-yellow-700 dark:text-yellow-300" },
  processing: { bg: "bg-blue-50 dark:bg-blue-950/30", text: "text-blue-700 dark:text-blue-300" },
};

const statusLabels = {
  paid: "Đã thanh toán",
  pending: "Chờ xử lý",
  processing: "Đang xử lý",
};

export const EmployeeTable = () => {

  return (
    <Table className="w-full">
      <TableHeader className="bg-gray-50 border-b border-gray-200">
        <TableRow>
          <TableHead className="px-6 py-3 text-left text-sm font-semibold text-foreground">
            Tên Nhân viên
          </TableHead>
          <TableHead className="px-6 py-3 text-left text-sm font-semibold text-foreground">
            Vị trí
          </TableHead>
          <TableHead className="px-6 py-3 text-right text-sm font-semibold text-foreground">
            Lương Cơ bản
          </TableHead>
          <TableHead className="px-6 py-3 text-right text-sm font-semibold text-foreground">
            Thưởng
          </TableHead>
          <TableHead className="px-6 py-3 text-right text-sm font-semibold text-foreground">
            Phạt
          </TableHead>
          <TableHead className="px-6 py-3 text-right text-sm font-semibold text-foreground">
            Tổng
          </TableHead>
          <TableHead className="px-6 py-3 text-center text-sm font-semibold text-foreground text-nowrap">
            Trạng thái
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockEmployees.map((emp) => {
          const colors = statusColors[emp.status];
          return (
            <TableRow
              key={emp.id}
            >
              <TableCell className="px-6 py-4 text-sm font-medium text-foreground">
                {emp.name}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm text-muted-foreground">
                {emp.position}
              </TableCell>
              <TableCell className="px-6 py-4 text-right text-sm text-foreground">
                {formatCurrency(emp.baseSalary)}
              </TableCell>
              <TableCell className="px-6 py-4 text-right text-sm text-secondary">
                +{formatCurrency(emp.bonus)}
              </TableCell>
              <TableCell className="px-6 py-4 text-right text-sm text-destructive">
                -{formatCurrency(emp.penalty)}
              </TableCell>
              <TableCell className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                {formatCurrency(emp.totalSalary)}
              </TableCell>
              <TableCell className="px-6 py-4 text-center text-nowrap">
                <span
                  className={`inline-flex rounded-full bg-opacity-20 px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}
                >
                  {statusLabels[emp.status]}
                </span>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  )
}

export const EmployeeBlock = () => {
  return (
    <Card className="md:p-0">
      <div className="flex flex-wrap items-center justify-between mb-6 p-4 border-b border-gray-100">
        <div className="flex flex-wrap gap-6">
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Tìm kiếm nhân viên..."
              className="md:w-100 rounded-lg border border-border bg-background py-2 pl-9 pr-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-64"
            />
          </div>
          <div className="w-60">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn một nhóm..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả Trạng thái</SelectItem>
                <SelectItem value="paid">Đã thanh toán</SelectItem>
                <SelectItem value="pending">Chờ xử lý</SelectItem>
                <SelectItem value="processing">Đang xử lý</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          <Button className="text-primary" variant={"outline"}>
            <IconDownload className="h-4 w-4" />
            Xuất
          </Button>
          <Button>
            <IconPlus className="h-4 w-4" />
            Nhân viên
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <EmployeeTable />
      </div>
    </Card>
  )
}