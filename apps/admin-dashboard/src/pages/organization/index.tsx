import { IconPlus } from "@repo/icons";
import { Button } from "@repo/ui";
import { TitleBlock } from "~/components/common/TitleBlock";
import { DiagramBlock } from "~/components/organization/DiagramBlock";
import { InformationBlock } from "~/components/organization/InformationBlock";
import { PartBlock } from "~/components/organization/PartBlock";

export default function OrganizationPage() {
  return (
    <>
      <TitleBlock title="Quản Lý Tổ Chức" description="Quản lý cấu trúc công ty, bộ phận và hệ thống phân cấp tổ chức.">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <IconPlus size={18} className="mr-2" />
          Thêm Bộ Phận
        </Button>
      </TitleBlock>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-3">
          <InformationBlock />
        </div>
        <div className="lg:col-span-2">
          <PartBlock />
        </div>
        <div className="lg:col-span-1">
          <DiagramBlock />
        </div>
      </div>
    </>
  );
}
