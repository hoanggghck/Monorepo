import { useState } from "react";
import { ComposeTab } from "~/components/mail/ComposeTab";
import { TemplateTab } from "~/components/mail/TemplateTab";
import { LogTab } from "~/components/mail/LogTab";
import { TitleBlock } from "~/components/common/TitleBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui";

type TAB_TYPE = {
  name: string;
  key: "compose" | "template" | "log";
};
export default function EmailPage() {
  const [tab, setTab] = useState<"compose" | "template" | "log">("compose")

  const arrTAB: TAB_TYPE[] = [
    { name: "Soạn Email", key: 'compose' },
    { name: "Mẫu", key: 'template' },
    { name: "Nhật Ký Email", key: 'log' },
  ];
  return (
    <>
      <TitleBlock title="Email & Liên Lạc" description="Quản lý giao tiếp email, mẫu và nhật ký." />
      <div className="flex gap-2 mb-6 border-b border-border">
        <Tabs className="w-full" value={tab} onValueChange={(value) => setTab(value as typeof tab)}>
          <TabsList className="mb-5">
            {arrTAB.map((ele) => (
              <TabsTrigger key={ele.key} value={ele.key}>
                {ele.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="compose">
            <ComposeTab />
          </TabsContent>

          <TabsContent value="template" asChild>
            <TemplateTab />
          </TabsContent>

          <TabsContent value="log" asChild>
            <LogTab />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}