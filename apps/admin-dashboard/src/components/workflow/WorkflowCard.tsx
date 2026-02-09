import { IconEdit2, IconSettings } from "@repo/icons"
import { Button, Card } from "@repo/ui"

export const WorkflowCard = ({ workflow }: { workflow: any }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
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
  )
}