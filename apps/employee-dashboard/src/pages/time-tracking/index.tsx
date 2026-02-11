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
      <StatusBlock />
      <CheckingBlock />
    </>
  );
}