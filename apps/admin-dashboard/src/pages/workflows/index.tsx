import { IconEdit2, IconPlus, IconSettings } from "@repo/icons";
import { Button, Card } from "@repo/ui";

export default function WorkflowsPage() {
  const workflows = [
    {
      id: 1,
      name: "Leave Request",
      description: "Employee leave approval workflow",
      steps: 3,
      approvers: "Manager, HR Director",
      sla: "5 business days",
      status: "Active",
    },
    {
      id: 2,
      name: "Expense Reimbursement",
      description: "Expense claim submission and approval",
      steps: 4,
      approvers: "Manager, Finance, CFO",
      sla: "10 business days",
      status: "Active",
    },
    {
      id: 3,
      name: "Task Assignment",
      description: "Project task assignment workflow",
      steps: 2,
      approvers: "Team Lead",
      sla: "3 business days",
      status: "Active",
    },
    {
      id: 4,
      name: "Performance Review",
      description: "Annual performance review process",
      steps: 5,
      approvers: "Manager, HR, Executive",
      sla: "30 days",
      status: "Inactive",
    },
  ];
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
          <Card key={workflow.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <IconSettings className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{workflow.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{workflow.description}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  workflow.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {workflow.status}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="text-xs text-muted-foreground">Bước</label>
                <p className="text-lg font-semibold text-foreground">{workflow.steps}</p>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Người Phê Duyệt</label>
                <p className="text-sm text-foreground">{workflow.approvers}</p>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">SLA</label>
                <p className="text-sm text-foreground">{workflow.sla}</p>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  <IconEdit2 size={16} className="mr-2" />
                  Cấu Hình
                </Button>
              </div>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground mb-3">Bước Quy Trình:</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {Array.from({ length: workflow.steps }).map((_, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-semibold text-primary">
                      {i + 1}
                    </div>
                    {i < workflow.steps - 1 && (
                      <div className="w-6 h-0.5 bg-border mx-1"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}