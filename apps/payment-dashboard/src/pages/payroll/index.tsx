import { Button, Card, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { IconSearch, IconPlus, IconDownload } from "@repo/icons";
import { formatCurrency } from "@repo/utils";
import { useState } from "react";
import { mockEmployees } from "../../mock/payroll";
import { EmployeeTable } from "../../components/payroll/EmployeeTable";

export default function PayrollPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const totalPayroll = mockEmployees.reduce((sum, emp) => sum + emp.totalSalary, 0);
  const totalBonus = mockEmployees.reduce((sum, emp) => sum + emp.bonus, 0);
  const totalPenalty = mockEmployees.reduce((sum, emp) => sum + emp.penalty, 0);

  return (
      <main className="space-y-6 p-4 sm:p-6 md:p-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quản lý Bảng Lương</h1>
          <p className="mt-2 text-muted-foreground">
            Quản lý lương nhân viên, thưởng, phạt và xuất báo cáo
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="p-6">
            <p className="text-sm font-medium text-muted-foreground">Tổng Lương Tháng</p>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {formatCurrency(totalPayroll)}
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-medium text-muted-foreground">Tổng Thưởng</p>
            <p className="mt-2 text-2xl font-bold text-secondary">
              {formatCurrency(totalBonus)}
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-medium text-muted-foreground">Tổng Phạt</p>
            <p className="mt-2 text-2xl font-bold text-destructive">
              {formatCurrency(totalPenalty)}
            </p>
          </Card>
        </div>
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-border bg-card p-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <div className="relative">
              <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm nhân viên..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-64"
              />
            </div>
            <div className="flex gap-2 w-50">
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
          <div className="flex gap-2">
            <Button className="text-primary" variant={"outline"}>
              <IconDownload className="h-4 w-4" />
              Xuất
            </Button>
            <Button>
              <IconPlus className="h-4 w-4" />
              Nhân viên
            </Button>
          </div>
        </Card>
        <Card>
          <div className="overflow-x-auto">
            <EmployeeTable />
          </div>
        </Card>
      </main>
  )
}