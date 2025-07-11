import React, { useState } from "react";

const AdminExitProcess = () => {
  const [filter, setFilter] = useState("All");

  const [requests, setRequests] = useState([
    {
      id: 1,
      employeeId: "EMP0012",
      name: "Namit Sharma",
      department: "Design",
      reason: "Better opportunity elsewhere",
      status: "Pending",
      lastWorkingDay: "2024-08-15",
    },
    {
      id: 2,
      employeeId: "EMP0034",
      name: "Riya Kapoor",
      department: "Sales",
      reason: "Personal reasons",
      status: "Completed",
      lastWorkingDay: "2024-06-30",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  const filteredRequests =
    filter === "All"
      ? requests
      : requests.filter((req) => req.status === filter);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Employee Exit Process</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Process">In Process</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Emp ID</th>
              <th className="px-6 py-3 text-left font-medium">Name</th>
              <th className="px-6 py-3 text-left font-medium">Department</th>
              <th className="px-6 py-3 text-left font-medium">Last Working Day</th>
              <th className="px-6 py-3 text-left font-medium">Reason</th>
              <th className="px-6 py-3 text-left font-medium">Status</th>
              <th className="px-6 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredRequests.map((req) => (
              <tr key={req.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{req.employeeId}</td>
                <td className="px-6 py-4">{req.name}</td>
                <td className="px-6 py-4">{req.department}</td>
                <td className="px-6 py-4">{req.lastWorkingDay}</td>
                <td className="px-6 py-4">{req.reason}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full font-medium text-xs ${
                      req.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : req.status === "In Process"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <select
                    value={req.status}
                    onChange={(e) => handleStatusChange(req.id, e.target.value)}
                    className="border px-2 py-1 rounded"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Process">In Process</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
            {filteredRequests.length === 0 && (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                  No exit requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminExitProcess;
