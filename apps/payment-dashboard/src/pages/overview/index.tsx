import { IconArrowUpRight, IconDownload, IconEye } from "@repo/icons";
import { Card } from "@repo/ui";
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
import { CardAsset, CardLiabilities, CardOwner } from "~/components/overview/card";
import { CartDetail } from "~/components/overview/card/CartDetail";
import { OverviewBarChart } from "~/components/overview/chart/OverviewBarChart";
import { OverviewLineChart } from "~/components/overview/chart/OverviewLineChart";
import { ChartWrapper } from "~/components/overview/ChartWrapper";
import { balanceSheet } from "~/mock/overview";

const quarterlyData = [
  { quarter: "Q1 2024", revenue: 12000000, expense: 8000000, profit: 4000000 },
  { quarter: "Q2 2024", revenue: 15000000, expense: 9500000, profit: 5500000 },
  { quarter: "Q3 2024", revenue: 18500000, expense: 10800000, profit: 7700000 },
  { quarter: "Q4 2024", revenue: 22000000, expense: 12500000, profit: 9500000 },
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
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Tổng Quan Tài Chính
        </h1>
        <p className="mt-2 text-muted-foreground">
          Báo cáo tài chính chi tiết, bảng cân đối kế toán và phân tích quý/năm
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CartDetail title="Quý Hiện Tại" subTitle={latestQuarter.quarter}>
          <p className="mt-2 text-xs text-muted-foreground">Q4 2024</p>
        </CartDetail>
        <CartDetail title="Doanh Thu Quý" subTitle={formatCurrency(latestQuarter.revenue)}>
          <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-success">
            <IconArrowUpRight className="h-3 w-3" />
            +19.4% QoQ
          </p>
        </CartDetail>
        <CartDetail title="Lợi Nhuận Quý" subTitle={formatCurrency(latestQuarter.profit)}>
          <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-success">
            <IconArrowUpRight className="h-3 w-3" />
            +40.3% QoQ
          </p>
        </CartDetail>
        <CartDetail title="Tổng Tài Sản" subTitle={formatCurrency(totalAssets)}>
          <p className="mt-2 text-xs text-muted-foreground">Hiện tại</p>
        </CartDetail>
      </div>
      <ChartWrapper title="Hiệu Suất Quý 4 Năm 2024">
        <OverviewLineChart />
      </ChartWrapper>
      <div className="grid gap-6 lg:grid-cols-3">
        <CardAsset totalAssets={totalAssets} />
        <CardLiabilities totalLiabilities={totalLiabilities} />
        <CardOwner totalAssets={totalAssets} totalEquity={totalEquity} totalLiabilities={totalLiabilities} />
      </div>
      <ChartWrapper title="So Sánh Theo Năm (2021-2024)">
        <OverviewBarChart />
      </ChartWrapper>
      <Card className="p-6">
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
      </Card>
      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-6">
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
      </Card>
    </div>
  );
}
