import { IconArrowUpRight, IconDownload, IconEye } from "@repo/icons";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const quarterlyData = [
  { quarter: "Q1 2024", revenue: 12000000, expense: 8000000, profit: 4000000 },
  { quarter: "Q2 2024", revenue: 15000000, expense: 9500000, profit: 5500000 },
  { quarter: "Q3 2024", revenue: 18500000, expense: 10800000, profit: 7700000 },
  { quarter: "Q4 2024", revenue: 22000000, expense: 12500000, profit: 9500000 },
];

const balanceSheet = {
  assets: [
    {
      category: "Tài sản Hiện tại",
      items: [
        { name: "Tiền mặt và Tương đương", value: 5000000000 },
        { name: "Các khoản Phải thu", value: 3500000000 },
        { name: "Hàng tồn kho", value: 2000000000 },
      ],
    },
    {
      category: "Tài sản Dài hạn",
      items: [
        { name: "Bất động sản", value: 8000000000 },
        { name: "Máy móc và Thiết bị", value: 5000000000 },
        { name: "Tài sản vô hình", value: 1500000000 },
      ],
    },
  ],
  liabilities: [
    {
      category: "Nợ Hiện tại",
      items: [
        { name: "Các khoản Phải trả", value: 2000000000 },
        { name: "Khoản Vay ngắn hạn", value: 1500000000 },
        { name: "Chi phí phải trả", value: 800000000 },
      ],
    },
    {
      category: "Nợ Dài hạn",
      items: [
        { name: "Khoản Vay dài hạn", value: 4000000000 },
        { name: "Nợ Trái phiếu", value: 2000000000 },
      ],
    },
  ],
  equity: [
    { name: "Vốn chủ sở hữu", value: 10000000000 },
    { name: "Lợi nhuận giữ lại", value: 5200000000 },
  ],
};

const annualComparison = [
  {
    year: "2021",
    revenue: 45000000,
    profit: 8100000,
    assets: 18000000,
    equity: 12000000,
  },
  {
    year: "2022",
    revenue: 58000000,
    profit: 11600000,
    assets: 22000000,
    equity: 14600000,
  },
  {
    year: "2023",
    revenue: 72000000,
    profit: 15480000,
    assets: 28000000,
    equity: 19600000,
  },
  {
    year: "2024E",
    revenue: 85000000,
    profit: 18700000,
    assets: 35000000,
    equity: 24300000,
  },
];

const keyRatios = [
  {
    label: "Tỷ suất lợi nhuận ròng",
    value: "22%",
    change: "+3.5%",
    benchmark: "Tốt",
  },
  { label: "Tỷ suất ROE", value: "18.5%", change: "+2.1%", benchmark: "Tốt" },
  { label: "Tỷ suất ROA", value: "14.2%", change: "+1.8%", benchmark: "Tốt" },
  {
    label: "Tỷ lệ Nợ/Vốn",
    value: "0.52",
    change: "-0.08",
    benchmark: "Kiểm soát",
  },
  {
    label: "Tỷ lệ Thanh khoản",
    value: "2.4x",
    change: "+0.2x",
    benchmark: "Tốt",
  },
  { label: "Tỷ lệ Nhanh", value: "1.8x", change: "+0.1x", benchmark: "Tốt" },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(value);
};
const QUARTER_LINE_COLORS = {
  revenue: "#2563EB",      // blue-600 – Doanh thu
  profit: "#16A34A",       // green-600 – Lợi nhuận
  grid: "#E5E7EB",         // gray-200
  axis: "#64748B",         // slate-500
  tooltipBg: "#FFFFFF",
  tooltipBorder: "#E5E7EB",
}
const ANNUAL_BAR_COLORS = {
  revenue: "#2563EB", // blue-600
  profit: "#16A34A",  // green-600
  grid: "#E5E7EB",    // gray-200
  axis: "#64748B",    // slate-500
  tooltipBg: "#FFFFFF",
  tooltipBorder: "#E5E7EB",
}
export default function OverviewPage() {
  const totalAssets = balanceSheet.assets.reduce(
    (sum, cat) => sum + cat.items.reduce((s, item) => s + item.value, 0),
    0,
  );

  const totalLiabilities = balanceSheet.liabilities.reduce(
    (sum, cat) => sum + cat.items.reduce((s, item) => s + item.value, 0),
    0,
  );

  const totalEquity = balanceSheet.equity.reduce(
    (sum, item) => sum + item.value,
    0,
  );

  const latestQuarter = quarterlyData[quarterlyData.length - 1];

  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Tổng Quan Tài Chính
        </h1>
        <p className="mt-2 text-muted-foreground">
          Báo cáo tài chính chi tiết, bảng cân đối kế toán và phân tích quý/năm
        </p>
      </div>

      {/* Current Status */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-xs font-medium text-muted-foreground uppercase">
            Quý Hiện Tại
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {latestQuarter.quarter}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">Q4 2024</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-xs font-medium text-muted-foreground uppercase">
            Doanh Thu Quý
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {formatCurrency(latestQuarter.revenue)}
          </p>
          <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-secondary">
            <IconArrowUpRight className="h-3 w-3" />
            +19.4% QoQ
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-xs font-medium text-muted-foreground uppercase">
            Lợi Nhuận Quý
          </p>
          <p className="mt-2 text-2xl font-bold text-secondary">
            {formatCurrency(latestQuarter.profit)}
          </p>
          <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-secondary">
            <IconArrowUpRight className="h-3 w-3" />
            +40.3% QoQ
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-xs font-medium text-muted-foreground uppercase">
            Tổng Tài Sản
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {formatCurrency(totalAssets)}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">Hiện tại</p>
        </div>
      </div>

      {/* Quarterly Performance */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Hiệu Suất Quý 4 Năm 2024
        </h2>
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={quarterlyData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={QUARTER_LINE_COLORS.grid}
              />

              <XAxis
                dataKey="quarter"
                stroke={QUARTER_LINE_COLORS.axis}
                tick={{ fontSize: 12 }}
              />

              <YAxis
                stroke={QUARTER_LINE_COLORS.axis}
                tick={{ fontSize: 12 }}
                tickFormatter={(v) => `${v / 1_000_000}tr`}
              />

              <Tooltip
                formatter={(value) => formatCurrency(value as number)}
                contentStyle={{
                  backgroundColor: QUARTER_LINE_COLORS.tooltipBg,
                  border: `1px solid ${QUARTER_LINE_COLORS.tooltipBorder}`,
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                }}
                labelStyle={{ fontWeight: 600, color: "#0F172A" }}
              />

              <Legend />

              <Line
                type="monotone"
                dataKey="revenue"
                name="Doanh Thu"
                stroke={QUARTER_LINE_COLORS.revenue}
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

              <Line
                type="monotone"
                dataKey="profit"
                name="Lợi Nhuận"
                stroke={QUARTER_LINE_COLORS.profit}
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Balance Sheet */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Assets */}
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">TÀI SẢN</h2>
            <p className="text-lg font-bold text-foreground">
              {formatCurrency(totalAssets)}
            </p>
          </div>
          <div className="space-y-4">
            {balanceSheet.assets.map((category, idx) => (
              <div key={idx}>
                <p className="text-sm font-semibold text-primary mb-2">
                  {category.category}
                </p>
                <div className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between text-sm">
                      <p className="text-muted-foreground">{item.name}</p>
                      <p className="font-medium text-foreground">
                        {formatCurrency(item.value)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Liabilities */}
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">NỢ</h2>
            <p className="text-lg font-bold text-destructive">
              {formatCurrency(totalLiabilities)}
            </p>
          </div>
          <div className="space-y-4">
            {balanceSheet.liabilities.map((category, idx) => (
              <div key={idx}>
                <p className="text-sm font-semibold text-destructive mb-2">
                  {category.category}
                </p>
                <div className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between text-sm">
                      <p className="text-muted-foreground">{item.name}</p>
                      <p className="font-medium text-foreground">
                        {formatCurrency(item.value)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equity */}
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              VỐN CHỦ SỞ HỮU
            </h2>
            <p className="text-lg font-bold text-secondary">
              {formatCurrency(totalEquity)}
            </p>
          </div>
          <div className="space-y-4">
            {balanceSheet.equity.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <p className="text-sm text-muted-foreground">{item.name}</p>
                <p className="text-sm font-medium text-foreground">
                  {formatCurrency(item.value)}
                </p>
              </div>
            ))}
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground">Kiểm tra:</p>
              <p className="text-sm text-muted-foreground">
                Nợ + Vốn = {formatCurrency(totalLiabilities + totalEquity)}
              </p>
              <p className="text-sm text-muted-foreground">
                Tài sản = {formatCurrency(totalAssets)}
              </p>
              <p
                className={`mt-2 text-xs font-semibold ${totalAssets === totalLiabilities + totalEquity ? "text-secondary" : "text-destructive"}`}
              >
                {totalAssets === totalLiabilities + totalEquity
                  ? "✓ Cân bằng"
                  : "✗ Không cân bằng"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">
          So Sánh Theo Năm (2021-2024)
        </h2>
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={annualComparison} barGap={8}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={ANNUAL_BAR_COLORS.grid}
              />

              <XAxis
                dataKey="year"
                stroke={ANNUAL_BAR_COLORS.axis}
                tick={{ fontSize: 12 }}
              />

              <YAxis
                stroke={ANNUAL_BAR_COLORS.axis}
                tick={{ fontSize: 12 }}
                tickFormatter={(v) => `${v / 1_000_000}tr`}
              />

              <Tooltip
                formatter={(value) => formatCurrency(value as number)}
                contentStyle={{
                  backgroundColor: ANNUAL_BAR_COLORS.tooltipBg,
                  border: `1px solid ${ANNUAL_BAR_COLORS.tooltipBorder}`,
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                }}
                labelStyle={{ fontWeight: 600, color: "#0F172A" }}
              />

              <Legend />

              <Bar
                dataKey="revenue"
                name="Doanh Thu"
                fill={ANNUAL_BAR_COLORS.revenue}
                radius={[6, 6, 0, 0]}
              />

              <Bar
                dataKey="profit"
                name="Lợi Nhuận"
                fill={ANNUAL_BAR_COLORS.profit}
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Financial Ratios */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Chỉ Số Tài Chính Chính
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keyRatios.map((ratio, idx) => (
            <div key={idx} className="rounded-lg border border-border/50 p-4">
              <p className="text-xs font-medium text-muted-foreground">
                {ratio.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-foreground">
                {ratio.value}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p
                  className={`text-xs font-semibold ${ratio.change.startsWith("+") ? "text-secondary" : ratio.change.startsWith("-") ? "text-primary" : ""}`}
                >
                  {ratio.change}
                </p>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                    ratio.benchmark === "Tốt"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {ratio.benchmark}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-border bg-card p-6">
        <div>
          <h3 className="font-semibold text-foreground">Xuất Báo Cáo</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tải xuống báo cáo tài chính chi tiết
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-muted">
            <IconDownload className="h-4 w-4" />
            PDF
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-muted">
            <IconDownload className="h-4 w-4" />
            Excel
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
            <IconEye className="h-4 w-4" />
            Xem Đầy Đủ
          </button>
        </div>
      </div>
    </div>
  );
}
