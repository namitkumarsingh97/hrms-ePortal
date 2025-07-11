import React from "react";

export default function Attendance() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Attendance</h1>

        <div className="flex space-x-4">
          <select className="border rounded px-4 py-2">
            <option>All Employees</option>
            <option>John Doe</option>
            <option>Jane Smith</option>
          </select>

          <input type="month" className="border rounded px-4 py-2" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Working Days" value="22" />
        <Card title="Present" value="18" />
        <Card title="Absent" value="2" />
        <Card title="Leave" value="2" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: "2025-07-01", status: "Present" },
              { date: "2025-07-02", status: "Absent" },
              { date: "2025-07-03", status: "Leave" },
            ].map((item, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{item.date}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      item.status === "Present"
                        ? "bg-green-100 text-green-800"
                        : item.status === "Absent"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white shadow p-4 rounded text-center">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
