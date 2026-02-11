import { IconPlus } from "@repo/icons";
import { Button, Card } from "@repo/ui";
import { emailTemplates } from "~/mock/mail";

export const TemplateTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <IconPlus size={18} className="mr-2" />
          Tạo Mẫu
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {emailTemplates.map((template) => (
          <Card key={template.id}>
            <h3 className="text-lg font-bold text-foreground mb-2">{template.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{template.category}</p>
            <div className="space-y-2 text-xs text-muted-foreground mb-4">
              <p>Sửa Đổi Lần Cuối: {template.lastModified}</p>
              <p>Số Lần Sử Dụng: {template.usage} lần</p>
            </div>
            <Button variant="outline" className="w-full">Sửa</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}