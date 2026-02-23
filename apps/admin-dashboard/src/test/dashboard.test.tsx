// src/test/dashboard.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeAll } from "vitest";

// ---- Mock @repo/icons ----
vi.mock("@repo/icons", () => ({
  IconUsers: ({ size }: { size: number }) => <svg data-testid="icon-users" width={size} />,
  IconAlertCircle: ({ size }: { size: number }) => <svg data-testid="icon-alert" width={size} />,
  IconDollarSign: ({ size }: { size: number }) => <svg data-testid="icon-dollar" width={size} />,
  IconTrendingUp: ({ size }: { size: number }) => <svg data-testid="icon-trending" width={size} />,
  IconCheckCircle: ({ size }: { size: number }) => <svg data-testid="icon-check" width={size} />,
  IconClock: ({ size }: { size: number }) => <svg data-testid="icon-clock" width={size} />,
  IconFileText: ({ size }: { size: number }) => <svg data-testid="icon-file" width={size} />,
}));

// ---- Mock @repo/ui ----
vi.mock("@repo/ui", () => ({
  Card: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div data-testid="card" className={className}>{children}</div>
  ),
  Button: ({ children, className, variant, size, ...props }: any) => (
    <button data-testid="button" className={className} {...props}>{children}</button>
  ),
}));

// ---- Mock activities data ----
vi.mock("~/mock/dashboard", () => ({
  activities: [
    {
      id: "1",
      user: "Nguyễn Văn A",
      action: "Đã tạo hợp đồng mới",
      timestamp: "10 phút trước",
      status: "success",
    },
    {
      id: "2",
      user: "Trần Thị B",
      action: "Yêu cầu nghỉ phép đang chờ duyệt",
      timestamp: "30 phút trước",
      status: "pending",
    },
  ],
}));

import { TitleBlock } from "~/components/common/TitleBlock";
import { StatWrapper } from "~/components/dashboard/StatCard";
import { RecentActivityWrapper } from "~/components/dashboard/RecentActivity";
import { QuickOperation } from "~/components/dashboard/QuickOperation";
import { SystemStatus } from "~/components/dashboard/StatusSystem";
import DashboardPage from "~/pages/dashboard";

// ---- Helper ----
const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

// ==================================
// TitleBlock
// ==================================
describe("TitleBlock", () => {
  it("hiển thị title và description", () => {
    render(<TitleBlock title="Bảng Điều Khiển" description="Chào mừng bạn" />);

    expect(screen.getByText("Bảng Điều Khiển")).toBeInTheDocument();
    expect(screen.getByText("Chào mừng bạn")).toBeInTheDocument();
  });

  it("render children khi được truyền vào", () => {
    render(
      <TitleBlock title="Title" description="Desc">
        <button>Action</button>
      </TitleBlock>
    );

    expect(screen.getByText("Action")).toBeInTheDocument();
  });
});

// ==================================
// StatWrapper
// ==================================
describe("StatWrapper", () => {
  it("hiển thị đủ 4 stat card", () => {
    render(<StatWrapper />);

    expect(screen.getByText("Tổng Nhân Viên")).toBeInTheDocument();
    expect(screen.getByText("Yêu Cầu Đang Chờ")).toBeInTheDocument();
    expect(screen.getByText("Bảng Lương (Tháng Này)")).toBeInTheDocument();
    expect(screen.getByText("Trạng Thái Hệ Thống")).toBeInTheDocument();
  });

  it("hiển thị giá trị đúng của từng stat", () => {
    render(<StatWrapper />);

    expect(screen.getByText("1,248")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("$847,532")).toBeInTheDocument();
    expect(screen.getByText("99.9%")).toBeInTheDocument();
  });

  it("hiển thị trend indicator đúng chiều", () => {
    render(<StatWrapper />);

    const upArrows = screen.getAllByText(/↑/);
    const downArrows = screen.getAllByText(/↓/);

    expect(upArrows).toHaveLength(2);
    expect(downArrows).toHaveLength(1);
  });
});

// ==================================
// RecentActivityWrapper
// ==================================
describe("RecentActivityWrapper", () => {
  it("hiển thị tiêu đề section", () => {
    renderWithRouter(<RecentActivityWrapper />);

    expect(screen.getByText("Hoạt Động Gần Đây")).toBeInTheDocument();
  });

  it("hiển thị đúng số lượng activity từ mock data", () => {
    renderWithRouter(<RecentActivityWrapper />);

    expect(screen.getByText("Nguyễn Văn A")).toBeInTheDocument();
    expect(screen.getByText("Trần Thị B")).toBeInTheDocument();
  });

  it("link 'Xem Tất Cả' trỏ đúng route /audit", () => {
    renderWithRouter(<RecentActivityWrapper />);

    const link = screen.getByText("Xem Tất Cả").closest("a");
    expect(link).toHaveAttribute("href", "/audit");
  });
});

// ==================================
// QuickOperation
// ==================================
describe("QuickOperation", () => {
  it("hiển thị đủ 4 thao tác nhanh", () => {
    renderWithRouter(<QuickOperation />);

    expect(screen.getByText("Thêm Nhân Viên Mới")).toBeInTheDocument();
    expect(screen.getByText("Xem Xét Yêu Cầu")).toBeInTheDocument();
    expect(screen.getByText("Cấu Hình Quy Trình")).toBeInTheDocument();
    expect(screen.getByText("Gửi Tin Nhắn")).toBeInTheDocument();
  });

  it("các link trỏ đúng route", () => {
    renderWithRouter(<QuickOperation />);

    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));

    expect(hrefs).toContain("/users");
    expect(hrefs).toContain("/requests");
    expect(hrefs).toContain("/workflows");
    expect(hrefs).toContain("/email");
  });
});

// ==================================
// SystemStatus
// ==================================
describe("SystemStatus", () => {
  it("hiển thị đủ 3 dòng trạng thái", () => {
    render(<SystemStatus />);

    expect(screen.getByText("Tất cả dịch vụ hoạt động")).toBeInTheDocument();
    expect(screen.getByText(/99.9% thời gian hoạt động/)).toBeInTheDocument();
    expect(screen.getByText("API: Phản hồi bình thường")).toBeInTheDocument();
  });
});

// ==================================
// DashboardPage (integration)
// ==================================
describe("DashboardPage", () => {
  it("render toàn bộ trang không bị crash", () => {
    renderWithRouter(<DashboardPage />);
    expect(screen.getByText("Bảng Điều Khiển")).toBeInTheDocument();
  });

  it("hiển thị đầy đủ các section chính", () => {
    renderWithRouter(<DashboardPage />);

    // Title
    expect(screen.getByText("Bảng Điều Khiển")).toBeInTheDocument();
    // Stats
    expect(screen.getByText("Tổng Nhân Viên")).toBeInTheDocument();
    // Recent activity
    expect(screen.getByText("Hoạt Động Gần Đây")).toBeInTheDocument();
    // Quick operations
    expect(screen.getByText("Thao Tác Nhanh")).toBeInTheDocument();
    // "Trạng Thái Hệ Thống" xuất hiện 2 lần: 1 ở StatCard + 1 ở SystemStatus
    expect(screen.getAllByText("Trạng Thái Hệ Thống")).toHaveLength(2);
  });
});