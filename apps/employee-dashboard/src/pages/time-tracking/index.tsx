import { TitleBlock } from "~/components/common/TitleBlock";
import { CheckingBlock } from "~/components/time-tracking/CheckingBlock";
import { StatusBlock } from "~/components/time-tracking/StatusBlock";

export default function TimeTrackingPage() {

  return (
    <>
      <TitleBlock 
        title="Chấm Công" 
        description="Quản lý chấm công vào và ra"
      />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <StatusBlock />
        </div>
        <div className="col-span-2">
          <CheckingBlock />
        </div>
      </div>
    </>
  );
}