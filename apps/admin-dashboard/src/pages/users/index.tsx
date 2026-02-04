import { IconShield, IconPlus, IconUsers } from "@repo/icons";
import { Button, Card } from "@repo/ui";

export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john@company.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@company.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael@company.com",
      role: "Employee",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@company.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 5,
      name: "Alex Rodriguez",
      email: "alex@company.com",
      role: "Employee",
      status: "Inactive",
    },
  ];

  const roles = [
    { name: "Admin", users: 5, permissions: 45 },
    { name: "Manager", users: 24, permissions: 28 },
    { name: "Employee", users: 1219, permissions: 8 },
  ];
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
        {/* User List */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <IconUsers size={24} className="text-primary" />
            <h2 className="text-xl font-bold text-foreground">Người Dùng</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-3 font-medium text-muted-foreground">
                    Tên
                  </th>
                  <th className="text-left py-3 px-3 font-medium text-muted-foreground">
                    Email
                  </th>
                  <th className="text-left py-3 px-3 font-medium text-muted-foreground">
                    Vai Trò
                  </th>
                  <th className="text-left py-3 px-3 font-medium text-muted-foreground">
                    Trạng Thái
                  </th>
                  <th className="text-right py-3 px-3 font-medium text-muted-foreground">
                    Thao Tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-border hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-3 font-medium text-foreground">
                      {user.name}
                    </td>
                    <td className="py-3 px-3 text-muted-foreground">
                      {user.email}
                    </td>
                    <td className="py-3 px-3">{user.role}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <Button variant="outline" size="sm">
                        Sửa
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Roles */}
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
