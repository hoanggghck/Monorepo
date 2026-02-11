import { IconUsers } from "@repo/icons";
import { Button, Card, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";
import { users } from "~/mock/user";

const UserTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="text-left py-3 px-3 font-medium text-muted-foreground">
              Tên
            </TableHead>
            <TableHead className="text-left py-3 px-3 font-medium text-muted-foreground">
              Email
            </TableHead>
            <TableHead className="text-left py-3 px-3 font-medium text-muted-foreground">
              Vai Trò
            </TableHead>
            <TableHead className="text-left py-3 px-3 font-medium text-muted-foreground">
              Trạng Thái
            </TableHead>
            <TableHead className="text-right py-3 px-3 font-medium text-muted-foreground">
              Thao Tác
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
            >
              <TableCell className="py-3 px-3 font-medium text-foreground">
                {user.name}
              </TableCell>
              <TableCell className="py-3 px-3 text-muted-foreground">
                {user.email}
              </TableCell>
              <TableCell className="py-3 px-3">{user.role}</TableCell>
              <TableCell className="py-3 px-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {user.status}
                </span>
              </TableCell>
              <TableCell className="py-3 px-3 text-right">
                <Button variant="outline" size="sm">
                  Sửa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export const UserBlock = () => {
  return (
    <Card className="p-6 lg:col-span-2">
      <div className="flex items-center gap-2 mb-4">
        <IconUsers size={24} className="text-primary" />
        <h2 className="text-xl font-bold text-foreground">Danh sách người dùng</h2>
      </div>
      <UserTable />
    </Card>
  )
}