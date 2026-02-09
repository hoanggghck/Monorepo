import { useState } from "react";
import { ComposeTab } from "~/components/mail/ComposeTab";
import { TemplateTab } from "~/components/mail/TemplateTab";
import { LogTab } from "~/components/mail/LogTab";

enum TAB_VALUE {
  COMPOSE = "compose",
  TEMPLATES = "template",
  LOGS = "log",
}
type TAB_TYPE = {
  name: string;
  key: TAB_VALUE;
};
export default function EmailPage() {
  const [tab, setTab] = useState<TAB_TYPE>({ name: "Soạn Email", key: TAB_VALUE.COMPOSE });
  const arrTAB: TAB_TYPE[] = [
    { name: "Soạn Email", key: TAB_VALUE.COMPOSE },
    { name: "Mẫu", key: TAB_VALUE.TEMPLATES },
    { name: "Nhật Ký Email", key: TAB_VALUE.LOGS },
  ];
  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Email & Liên Lạc</h1>
            <p className="text-muted-foreground mt-2">
              Quản lý giao tiếp email, mẫu và nhật ký.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mb-6 border-b border-border">
        {arrTAB.map((ele) => (
          <button
            key={ele.key}
            onClick={() => setTab(ele)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab.key === ele.key
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {ele.name}
          </button>
        ))}
      </div>
      {{
        [TAB_VALUE.COMPOSE]: <ComposeTab />,
        [TAB_VALUE.TEMPLATES]: <TemplateTab />,
        [TAB_VALUE.LOGS]: <LogTab />,
      }[tab.key]}
    </div>
  )
}