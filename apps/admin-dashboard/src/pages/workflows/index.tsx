import { IconPlus } from "@repo/icons";
import { Button } from "@repo/ui";
import { TitleBlock } from "~/components/common/TitleBlock";
import { WorkflowCard } from "~/components/workflow/WorkflowCard";
import { workflows } from "~/mock/workflow";

export default function WorkflowsPage() {
  
  return (
    <>
      <TitleBlock title="Cấu Hình Quy Trình" description="Cấu hình và quản lý quy trình phê duyệt trên toàn tổ chức của bạn.">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <IconPlus size={18} className="mr-2" />
          Tạo Quy Trình
        </Button>
      </TitleBlock>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {workflows.map((workflow) => (
          <WorkflowCard workflow={workflow} key={workflow.id}/>
        ))}
      </div>
    </>
  )
}