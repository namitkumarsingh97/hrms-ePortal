import React from "react";

export default function Employees() {
  const employees = [
    {
      name: "John Doe",
      role: "UI/UX Designer",
      department: "Design",
      email: "john.doe@example.com",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Jane Smith",
      role: "Frontend Developer",
      department: "Engineering",
      email: "jane.smith@example.com",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Ali Khan",
      role: "HR Manager",
      department: "HR",
      email: "ali.khan@example.com",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employees</h1>
        <input
          type="text"
          placeholder="Search by name or role"
          className="border px-4 py-2 rounded w-64"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {employees.map((emp, i) => (
          <div
            key={i}
            className="bg-white shadow rounded p-4 flex items-center space-x-4"
          >
            <img
              src={emp.avatar}
              alt={emp.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{emp.name}</h3>
              <p className="text-sm text-gray-600">{emp.role}</p>
              <p className="text-sm text-gray-400">{emp.department}</p>
              <p className="text-xs text-gray-500">{emp.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
