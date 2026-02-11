import { IconCheckSquare, IconPlus } from "@repo/icons";
import { Button, Tabs, TabsList, TabsTrigger } from "@repo/ui";
import { useState } from "react";
import { TitleBlock } from "~/components/common/TitleBlock";
import { TaskCard } from "~/components/task/TaskCard";
import { taskMock } from "~/mock/task";

type TAB_TYPE = {
  name: string;
  key: "all"| "todo" | "doing" | "done";
};
const arrTAB: TAB_TYPE[] = [
  { name: "Tất cả", key: 'all' },
  { name: "Cần làm", key: 'todo' },
  { name: "Đang làm", key: 'doing' },
  { name: "Hoàn thành", key: 'done' }
];

export default function TasksPage() {
  const [tab, setTab] = useState<"all"| "todo" | "doing" | "done">("all");
  const filteredTasks = tab === "all" 
    ? taskMock 
    : taskMock.filter(t => t.status === tab);

  return (
    <>
      <TitleBlock 
        title="Công Việc Của Tôi" 
        description={`${filteredTasks.length} công việc`}
      >
        <Button>
          <IconPlus className="w-5 h-5" />
          Công Việc Mới
        </Button>
      </TitleBlock>
      <Tabs className="w-full" value={tab} onValueChange={(value) => setTab(value as typeof tab)}>
        <TabsList className="mb-5">
          {arrTAB.map((ele, index) => (
            <TabsTrigger key={index} value={ele.key}>
              {ele.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="space-y-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard task={task} key={task.id}/>
          ))
        ) : (
          <div className="text-center py-12">
            <IconCheckSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">Không có công việc trong danh mục này</p>
          </div>
        )}
      </div>
    </>
  );
}