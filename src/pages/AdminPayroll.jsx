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
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Payroll Management</h1>

      <div className="bg-white rounded-lg shadow p-4 mb-4 md:mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <label className="font-medium text-sm md:text-base">Select Month:</label>
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border rounded px-3 py-1 text-sm md:text-base w-full sm:w-auto"
          />

          <button className="w-full sm:w-auto bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600 text-sm md:text-base">
            Download Summary
          </button>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 md:mx-0 bg-white rounded-lg shadow">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-semibold">Emp ID</th>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-semibold">Name</th>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-semibold">Department</th>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-semibold">Salary</th>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-semibold">Status</th>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-semibold">Actions</th>
              </tr>
            </thead>
          <tbody>
            {dummyPayroll.map((emp, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm">{emp.id}</td>
                <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm">{emp.name}</td>
                <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm">{emp.department}</td>
                <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm">{emp.salary}</td>
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <span
                    className={`px-2 md:px-3 py-1 text-xs md:text-sm rounded-full ${
                      emp.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                    <button className="text-blue-600 hover:underline text-xs md:text-sm">
                      Upload Slip
                    </button>
                    <button className="text-indigo-600 hover:underline text-xs md:text-sm">
                      View Slip
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPayroll;
