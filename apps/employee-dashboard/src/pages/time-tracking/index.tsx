import { IconCalendar, IconClock } from "@repo/icons";
import { CheckingTable } from "~/components/time-tracking/CheckinTable";


export default function TimeTrackingPage() {

  return (
    <div className="p-6 md:p-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Chấm Công</h1>
        <p className="text-gray-500 mt-1">Quản lý chấm công vào và ra</p>
      </div>
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-xl">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Trạng Thái Hôm Nay</h2>
        <div className="text-center p-6 bg-linear-to-br from-blue-50 to-blue-100 rounded-lg">
          <IconClock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <p className="text-gray-600 text-sm mb-2">Giờ Vào</p>
          <p className="text-3xl font-bold text-blue-600">"08:30 AM"</p>
        </div>
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm font-medium">✓ Bạn đã chấm công vào</p>
        </div>
      </div>
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
          <IconCalendar className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-bold text-gray-900">Lịch Sử Chấm Công (7 Ngày Gần Nhất)</h2>
        </div>
        <div className="overflow-x-auto">
          <CheckingTable />
        </div>
      </div>
    </div>
  );
}