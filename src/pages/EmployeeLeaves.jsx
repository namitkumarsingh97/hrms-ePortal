import React, { useState } from "react";

const EmployeeLeaves = () => {
  const [leaveType, setLeaveType] = useState("casual");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaveHistory, setLeaveHistory] = useState([
    {
      type: "Sick",
      from: "2025-07-01",
      to: "2025-07-03",
      reason: "Fever and rest",
      status: "Approved",
    },
    {
      type: "Casual",
      from: "2025-06-20",
      to: "2025-06-21",
      reason: "Family function",
      status: "Pending",
    },
  ]);

  const handleApplyLeave = () => {
    if (!fromDate || !toDate || !reason) {
      alert("Please fill in all fields.");
      return;
    }

    const newLeave = {
      type: leaveType,
      from: fromDate,
      to: toDate,
      reason,
      status: "Pending",
    };

    setLeaveHistory([newLeave, ...leaveHistory]);
    setFromDate("");
    setToDate("");
    setReason("");
    setLeaveType("casual");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">My Leaves</h1>

      {/* Leave Balance Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold text-lg">Casual Leave</h2>
          <p className="text-2xl text-blue-500 font-bold">4</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold text-lg">Sick Leave</h2>
          <p className="text-2xl text-green-500 font-bold">3</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold text-lg">Privilege/ Earned Leave</h2>
          <p className="text-2xl text-purple-500 font-bold">6</p>
        </div>
      </div>

      {/* Apply for Leave */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold mb-2">Apply for Leave</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Leave Type</label>
            <select
              className="w-full border px-3 py-2 rounded"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
            >
              <option value="casual">Casual</option>
              <option value="sick">Sick</option>
              <option value="earned">Privilege/ Earned</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">From Date</label>
            <input
              type="date"
              className="w-full border px-3 py-2 rounded"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">To Date</label>
            <input
              type="date"
              className="w-full border px-3 py-2 rounded"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block font-medium mb-1">Reason</label>
            <textarea
              className="w-full border px-3 py-2 rounded"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows="3"
              placeholder="Explain reason for leave..."
            ></textarea>
          </div>
        </div>
        <button
          onClick={handleApplyLeave}
          className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Submit Leave Request
        </button>
      </div>

      {/* Leave History */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Leave History</h2>
        <table className="w-full text-left border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Type</th>
              <th className="p-2 border">From</th>
              <th className="p-2 border">To</th>
              <th className="p-2 border">Reason</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveHistory.map((leave, i) => (
              <tr key={i}>
                <td className="p-2 border capitalize">{leave.type}</td>
                <td className="p-2 border">{leave.from}</td>
                <td className="p-2 border">{leave.to}</td>
                <td className="p-2 border">{leave.reason}</td>
                <td className="p-2 border font-semibold text-blue-600">
                  {leave.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeLeaves;