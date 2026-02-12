import { IconSend } from "@repo/icons";
import { Button, Card, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from "@repo/ui";
import { emailTemplates } from "~/mock/mail";

export const ComposeTab = () => {
  return (
    <Card className="p-4 md:p-6">
      <h2 className="text-xl font-bold text-foreground mb-6">Gửi Email</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="block text-sm font-medium text-foreground mb-2">Tới</Label>
            <Input
              type="email"
              placeholder="recipient@company.com"
              className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-foreground mb-2">Gửi Tới Nhóm</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn một nhóm..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất Cả Nhân Viên</SelectItem>
                <SelectItem value="tech">Nhóm Kỹ Thuật</SelectItem>
                <SelectItem value="manager">Quản Lý</SelectItem>
                <SelectItem value="hr">Nhóm Nhân Sự</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label className="block text-sm font-medium text-foreground mb-2">Tiêu Đề</Label>
          <Input
            type="text"
            placeholder="Tiêu đề email"
            className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <Label className="block text-sm font-medium text-foreground mb-2">Mẫu</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="-- Không Có Mẫu --" />
            </SelectTrigger>
            <SelectContent>
              {emailTemplates.map((template) => (
                <SelectItem key={template.id} value={`${template.id}`}>
                  {template.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-sm font-medium text-foreground mb-2">Tin Nhắn</Label>
          <Textarea
            rows={6}
            placeholder="Viết tin nhắn của bạn ở đây..."
            className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-3 justify-end">
          <Button variant="outline">Lưu Nháp</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <IconSend size={18} className="mr-2" />
            Gửi Email
          </Button>
        </div>
      </form>
    </Card>
  );
}
