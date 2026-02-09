import { IconShield, IconPlus, IconUsers } from "@repo/icons";
import { Button, Card } from "@repo/ui";
import { UserTable } from "~/components/user/UserTable";
import { roles } from "~/mock/user";

export default function UsersPage() {
  
  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Người Dùng & Vai Trò
            </h1>
            <p className="text-muted-foreground mt-2">
              Quản lý tài khoản người dùng và cấu hình quyền dựa trên vai trò.
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <IconPlus size={18} className="mr-2" />
            Thêm Người Dùng
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <IconUsers size={24} className="text-primary" />
            <h2 className="text-xl font-bold text-foreground">Danh sách người dùng</h2>
          </div>
          <UserTable />
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <IconShield size={24} className="text-primary" />
            <h2 className="text-xl font-bold text-foreground">Vai Trò</h2>
          </div>
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.name}
                className="p-4 border border-border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="font-medium text-foreground mb-2">
                  {role.name}
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Người Dùng: {role.users}</p>
                  <p>Quyền: {role.permissions}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
