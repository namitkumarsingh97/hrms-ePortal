import React from "react";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports</h1>
        <select className="border px-4 py-2 rounded">
          <option>July 2025</option>
          <option>June 2025</option>
          <option>May 2025</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Total Employees" value="32" />
        <Card title="Avg. Attendance (%)" value="89%" />
        <Card title="Leaves Taken" value="58" />
        <Card title="Late Logins" value="12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReportWidget title="Attendance Overview">
          <div className="h-40 flex items-center justify-center text-gray-400">
            [Attendance Chart Here]
          </div>
        </ReportWidget>

        <ReportWidget title="Leave Type Breakdown">
          <ul className="text-sm space-y-2 p-4">
            <li className="flex justify-between">
              <span>Casual Leave</span>
              <span className="font-semibold">22</span>
            </li>
            <li className="flex justify-between">
              <span>Sick Leave</span>
              <span className="font-semibold">16</span>
            </li>
            <li className="flex justify-between">
              <span>Emergency Leave</span>
              <span className="font-semibold">12</span>
            </li>
            <li className="flex justify-between">
              <span>Others</span>
              <span className="font-semibold">8</span>
            </li>
          </ul>
        </ReportWidget>

        <ReportWidget title="Employees by Department">
          <ul className="text-sm space-y-2 p-4">
            <li className="flex justify-between">
              <span>Engineering</span>
              <span className="font-semibold">14</span>
            </li>
            <li className="flex justify-between">
              <span>HR</span>
              <span className="font-semibold">6</span>
            </li>
            <li className="flex justify-between">
              <span>Sales</span>
              <span className="font-semibold">8</span>
            </li>
            <li className="flex justify-between">
              <span>Design</span>
              <span className="font-semibold">4</span>
            </li>
          </ul>
        </ReportWidget>

        <ReportWidget title="Monthly Insights">
          <div className="h-32 flex items-center justify-center text-gray-400">
            [Monthly stats/graph placeholder]
          </div>
        </ReportWidget>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-4 text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

function ReportWidget({ title, children }) {
  return (
    <div className="bg-white shadow rounded">
      <div className="border-b p-4 font-semibold">{title}</div>
      {children}
    </div>
  );
}
