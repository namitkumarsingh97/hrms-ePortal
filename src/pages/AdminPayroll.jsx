import React, { useState } from "react";

const AdminPayroll = () => {
  const [month, setMonth] = useState("2025-07");

  const dummyPayroll = [
    {
      id: "EMP0001",
      name: "Namit Sharma",
      department: "Design",
      salary: "₹65,000",
      status: "Paid",
    },
    {
      id: "EMP0002",
      name: "Riya Kapoor",
      department: "Development",
      salary: "₹78,000",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payroll Management</h1>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <label className="font-medium">Select Month:</label>
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border rounded px-3 py-1"
          />

          <button className="ml-auto bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600">
            Download Summary
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Emp ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Department</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Salary</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyPayroll.map((emp, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">{emp.id}</td>
                <td className="px-6 py-4">{emp.name}</td>
                <td className="px-6 py-4">{emp.department}</td>
                <td className="px-6 py-4">{emp.salary}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      emp.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline mr-3">
                    Upload Slip
                  </button>
                  <button className="text-indigo-600 hover:underline">
                    View Slip
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPayroll;
