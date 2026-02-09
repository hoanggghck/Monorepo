import { IconPlus } from "@repo/icons";
import { Button } from "@repo/ui";
import { WorkflowCard } from "~/components/workflow/WorkflowCard";
import { workflows } from "~/mock/workflow";

export default function WorkflowsPage() {
  
  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Cấu Hình Quy Trình</h1>
            <p className="text-muted-foreground mt-2">
              Cấu hình và quản lý quy trình phê duyệt trên toàn tổ chức của bạn.
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <IconPlus size={18} className="mr-2" />
            Tạo Quy Trình
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {workflows.map((workflow) => (
          <WorkflowCard key={workflow.id} workflow={workflow} />
        ))}
      </div>
    </div>
  )
}