import React from "react";

export default function Leaves() {
    return (
        <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-xl md:text-2xl font-bold">Leaves</h1>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                    <select className="border rounded px-3 py-2 text-sm md:text-base w-full sm:w-auto">
                        <option>All Employees</option>
                        <option>John Doe</option>
                        <option>Jane Smith</option>
                    </select>
                    <input type="month" className="border rounded px-3 py-2 text-sm md:text-base w-full sm:w-auto" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <Card title="Total Leaves" value="12" />
                <Card title="Approved" value="8" />
                <Card title="Pending" value="2" />
                <Card title="Rejected" value="2" />
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0">
                <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full bg-white shadow rounded">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="p-2 md:p-3 text-xs md:text-sm">Employee</th>
                                <th className="p-2 md:p-3 text-xs md:text-sm">Type</th>
                                <th className="p-2 md:p-3 text-xs md:text-sm">From</th>
                                <th className="p-2 md:p-3 text-xs md:text-sm">To</th>
                                <th className="p-2 md:p-3 text-xs md:text-sm">Reason</th>
                                <th className="p-2 md:p-3 text-xs md:text-sm">Status</th>
                            </tr>
                        </thead>
                    <tbody>
                        {[
                            {
                                name: "John Doe",
                                type: "Sick Leave",
                                from: "2025-07-02",
                                to: "2025-07-03",
                                reason: "Fever and rest",
                                status: "Approved",
                            },
                            {
                                name: "Jane Smith",
                                type: "Casual Leave",
                                from: "2025-07-05",
                                to: "2025-07-06",
                                reason: "Personal work",
                                status: "Pending",
                            },
                            {
                                name: "John Doe",
                                type: "Emergency Leave",
                                from: "2025-07-10",
                                to: "2025-07-11",
                                reason: "Family emergency",
                                status: "Rejected",
                            },
                        ].map((leave, i) => (
                            <tr key={i} className="border-t">
                                <td className="p-2 md:p-3 text-xs md:text-sm">{leave.name}</td>
                                <td className="p-2 md:p-3 text-xs md:text-sm">{leave.type}</td>
                                <td className="p-2 md:p-3 text-xs md:text-sm">{leave.from}</td>
                                <td className="p-2 md:p-3 text-xs md:text-sm">{leave.to}</td>
                                <td className="p-2 md:p-3 text-xs md:text-sm">{leave.reason}</td>
                                <td className="p-2 md:p-3">
                                    <span
                                        className={`px-2 py-1 rounded text-xs md:text-sm font-medium ${leave.status === "Approved"
                                                ? "bg-green-100 text-green-700"
                                                : leave.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {leave.status}
                                    </span>
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

function Card({ title, value }) {
    return (
        <div className="bg-white shadow p-4 rounded text-center">
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-xl font-semibold">{value}</p>
        </div>
    );
}
