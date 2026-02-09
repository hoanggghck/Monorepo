import { IconCalendar, IconClock, IconLogIn, IconLogOut } from "@repo/icons";
import { useState } from "react";

interface CheckInRecord {
  date: string;
  checkInTime: string;
  checkOutTime: string;
  workingHours: string;
}

export default function TimeTrackingPage() {
  const [isCheckedIn, setIsCheckedIn] = useState(true);
  const [checkInTime] = useState("08:30 AM");
  const [currentTime] = useState("04:15 PM");

  const checkInHistory: CheckInRecord[] = [
    {
      date: "2024-02-09",
      checkInTime: "08:30",
      checkOutTime: "16:00",
      workingHours: "7g 30p",
    },
    {
      date: "2024-02-08",
      checkInTime: "09:00",
      checkOutTime: "17:30",
      workingHours: "8g 30p",
    },
    {
      date: "2024-02-07",
      checkInTime: "08:15",
      checkOutTime: "16:00",
      workingHours: "7g 45p",
    },
    {
      date: "2024-02-06",
      checkInTime: "08:45",
      checkOutTime: "17:00",
      workingHours: "8g 15p",
    },
    {
      date: "2024-02-05",
      checkInTime: "09:30",
      checkOutTime: "16:30",
      workingHours: "7g 00p",
    },
    {
      date: "2024-02-02",
      checkInTime: "08:00",
      checkOutTime: "17:00",
      workingHours: "9g 00p",
    },
    {
      date: "2024-02-01",
      checkInTime: "08:30",
      checkOutTime: "16:00",
      workingHours: "7g 30p",
    },
  ];

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Chấm Công</h1>
        <p className="text-gray-500 mt-1">Quản lý chấm công vào và ra</p>
      </div>

      {/* Today's Status */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-2xl">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Trạng Thái Hôm Nay</h2>

        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
          <IconClock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <p className="text-gray-600 text-sm mb-2">Giờ Vào</p>
          <p className="text-3xl font-bold text-blue-600">{checkInTime}</p>
        </div>
        {isCheckedIn && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm font-medium">✓ Bạn đã chấm công vào</p>
          </div>
        )}
      </div>
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
          <IconCalendar className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-bold text-gray-900">Lịch Sử Chấm Công (7 Ngày Gần Nhất)</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                  Ngày
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                  Vào
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                  Ra
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">
                  Giờ Làm
                </th>
              </tr>
            </thead>
            <tbody>
              {checkInHistory.map((record, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {new Date(record.date).toLocaleDateString("vi-VN", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {record.checkInTime}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {record.checkOutTime}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {record.workingHours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}