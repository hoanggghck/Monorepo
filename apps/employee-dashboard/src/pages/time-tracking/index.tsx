import { TitleBlock } from "~/components/common/TitleBlock";
import { CheckingBlock } from "~/components/time-tracking/CheckingBlock";
import { StatusBlock } from "~/components/time-tracking/StatusBlock";

export default function TimeTrackingPage() {

  return (
    <div className="grid grid-cols-1 gap-3">
      <TitleBlock
        title="Chấm Công"
        description="Quản lý chấm công vào và ra"
      />
      <StatusBlock />
      <CheckingBlock />
    </div>
  );
}
