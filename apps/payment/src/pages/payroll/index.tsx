import { IconFilter, IconSearch, IconPlus, IconDownload } from "@repo/icons";
import { formatCurrency } from "@repo/utils";
import { useState } from "react";

interface Employee {
  id: number;
  name: string;
  position: string;
  baseSalary: number;
  bonus: number;
  penalty: number;
  totalSalary: number;
  status: "paid" | "pending" | "processing";
}

const mockEmployees: Employee[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    position: "Senior Developer",
    baseSalary: 25000000,
    bonus: 2500000,
    penalty: 0,
    totalSalary: 27500000,
    status: "paid",
  },
  {
    id: 2,
    name: "Trần Thị B",
    position: "Project Manager",
    baseSalary: 22000000,
    bonus: 1500000,
    penalty: 500000,
    totalSalary: 23000000,
    status: "paid",
  },
  {
    id: 3,
    name: "Lê Văn C",
    position: "Designer",
    baseSalary: 18000000,
    bonus: 1000000,
    penalty: 0,
    totalSalary: 19000000,
    status: "pending",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    position: "QA Engineer",
    baseSalary: 20000000,
    bonus: 800000,
    penalty: 200000,
    totalSalary: 20600000,
    status: "processing",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    position: "Business Analyst",
    baseSalary: 21000000,
    bonus: 1200000,
    penalty: 0,
    totalSalary: 22200000,
    status: "paid",
  },
];


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

export default function PayrollPage() {
    const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "paid" | "pending" | "processing">("all");

  const filteredEmployees = mockEmployees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || emp.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalPayroll = filteredEmployees.reduce((sum, emp) => sum + emp.totalSalary, 0);
  const totalBonus = filteredEmployees.reduce((sum, emp) => sum + emp.bonus, 0);
  const totalPenalty = filteredEmployees.reduce((sum, emp) => sum + emp.penalty, 0);

  return (
      <main className="space-y-6 p-4 sm:p-6 md:p-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quản lý Bảng Lương</h1>
          <p className="mt-2 text-muted-foreground">
            Quản lý lương nhân viên, thưởng, phạt và xuất báo cáo
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">Tổng Lương Tháng</p>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {formatCurrency(totalPayroll)}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">Tổng Thưởng</p>
            <p className="mt-2 text-2xl font-bold text-secondary">
              {formatCurrency(totalBonus)}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">Tổng Phạt</p>
            <p className="mt-2 text-2xl font-bold text-destructive">
              {formatCurrency(totalPenalty)}
            </p>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-border bg-card p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <div className="relative">
              <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Tìm kiếm nhân viên..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-64"
              />
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-muted">
                <IconFilter className="h-4 w-4" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as any)}
                  className="bg-transparent"
                >
                  <option value="all">Tất cả Trạng thái</option>
                  <option value="paid">Đã thanh toán</option>
                  <option value="pending">Chờ xử lý</option>
                  <option value="processing">Đang xử lý</option>
                </select>
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-muted">
              <IconDownload className="h-4 w-4" />
              Xuất
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
              <IconPlus className="h-4 w-4" />
              Nhân viên
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="rounded-lg border border-border overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Tên Nhân viên
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Vị trí
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">
                    Lương Cơ bản
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">
                    Thưởng
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">
                    Phạt
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">
                    Tổng
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredEmployees.map((emp) => {
                  const colors = statusColors[emp.status];
                  return (
                    <tr
                      key={emp.id}
                      className="transition-colors hover:bg-muted/30"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-foreground">
                        {emp.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {emp.position}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-foreground">
                        {formatCurrency(emp.baseSalary)}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-secondary">
                        +{formatCurrency(emp.bonus)}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-destructive">
                        -{formatCurrency(emp.penalty)}
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                        {formatCurrency(emp.totalSalary)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex rounded-full bg-opacity-20 px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}
                        >
                          {statusLabels[emp.status]}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredEmployees.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-muted-foreground">Không tìm thấy nhân viên phù hợp</p>
            </div>
          )}
        </div>
      </main>
  )
}