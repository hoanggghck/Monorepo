import { formatCurrency } from "@repo/utils";
import { mockEmployees } from "~/mock/payroll";
import { EmployeeBlock } from "~/components/payroll/EmployeeBlock";
import { TitleBlock } from "~/components/common/TitleBlock";
import { Card } from "@repo/ui";

export default function PayrollPage() {
  const totalPayroll = mockEmployees.reduce((sum, emp) => sum + emp.totalSalary, 0);
  const totalBonus = mockEmployees.reduce((sum, emp) => sum + emp.bonus, 0);
  const totalPenalty = mockEmployees.reduce((sum, emp) => sum + emp.penalty, 0);

  return (
    <>
      <TitleBlock 
        title="Quản lý Bảng Lương"
        description="Quản lý lương nhân viên, thưởng, phạt và xuất báo cáo"
      />
      <div className="grid gap-4 sm:grid-cols-3 mb-6">
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
      <EmployeeBlock />
    </>
  )
}