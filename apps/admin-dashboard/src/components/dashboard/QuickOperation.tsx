import {
  IconAlertCircle,
  IconFileText,
  IconTrendingUp,
  IconUsers,
} from "@repo/icons";
import { Button, Card } from "@repo/ui";
import { Link } from "react-router-dom";

export const QuickOperation = () => {
  return (
    <Card>
      <h3 className="text-lg font-bold text-foreground mb-4">
        Thao Tác Nhanh
      </h3>
      <div className="space-y-3">
        <Link to="/users" className="block">
          <Button variant="outline" className="w-full justify-start">
            <IconUsers size={18} className="mr-2" />
            Thêm Nhân Viên Mới
          </Button>
        </Link>
        <Link to="/requests" className="block">
          <Button variant="outline" className="w-full justify-start">
            <IconAlertCircle size={18} className="mr-2" />
            Xem Xét Yêu Cầu
          </Button>
        </Link>
        <Link to="/workflows" className="block">
          <Button variant="outline" className="w-full justify-start">
            <IconFileText size={18} className="mr-2" />
            Cấu Hình Quy Trình
          </Button>
        </Link>
        <Link to="/email" className="block">
          <Button variant="outline" className="w-full justify-start">
            <IconTrendingUp size={18} className="mr-2" />
            Gửi Tin Nhắn
          </Button>
        </Link>
      </div>
    </Card>
  )
}