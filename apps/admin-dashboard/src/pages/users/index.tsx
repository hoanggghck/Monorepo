import { IconPlus } from "@repo/icons";
import { Button } from "@repo/ui";
import { TitleBlock } from "~/components/common/TitleBlock";
import { RoleBlock } from "~/components/user/RoleBlock";
import { UserBlock } from "~/components/user/UserBlock";

export default function UsersPage() {

  return (
    <div className="grid grid-cols-1 gap-3">
      <TitleBlock title="Người Dùng & Vai Trò" description="Quản lý tài khoản người dùng và cấu hình quyền dựa trên vai trò.">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <IconPlus size={18} className="mr-2" />
          Thêm Người Dùng
        </Button>
      </TitleBlock>
      <div className="grid grid-cols-1 gap-6">
        <div className="lg:col-span-2">
          <UserBlock />
        </div>
        <div className="lg:col-span1">
          <RoleBlock />
        </div>
      </div>
    </div>
  );
}
