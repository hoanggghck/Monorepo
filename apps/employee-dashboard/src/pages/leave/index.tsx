import { IconPlus } from "@repo/icons";
import { Button, Card, cn } from "@repo/ui";
import { TitleBlock } from "~/components/common/TitleBlock";
import { LeaveCard } from "~/components/leave/LeaveCard";
import { listStatusLeave } from "~/mock/leave";

export default function LeavePage() {

  return (
    <div className="grid grid-cols-1 gap-3">
      <TitleBlock
        title="Quản Lý Nghỉ Phép"
        description="Quản lý đơn xin nghỉ và xem lịch sử"
      >
        <Button>
          <IconPlus className="w-5 h-5" />
          Đơn Xin Mới
        </Button>
      </TitleBlock>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {listStatusLeave.map((leave, index) => (
          <Card className="p-6" key={index}>
            <p className="text-gray-600 text-sm mb-2">{leave.label}</p>
            <div className="flex items-baseline gap-2">
              <p className={cn("text-3xl font-bold", leave.textColor)}>{leave.days}</p>
              <p className="text-gray-500 text-sm">ngày còn lại</p>
            </div>
          </Card>
        ))}
      </div>
      <LeaveCard />
    </div>
  );
}
