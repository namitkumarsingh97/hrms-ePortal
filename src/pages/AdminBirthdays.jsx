import React, { useState } from "react";

const AdminBirthdays = () => {
  const [search, setSearch] = useState("");

  const birthdayData = [
    {
      id: "EMP001",
      name: "Amit Sharma",
      dob: "1995-07-12",
      anniversary: "2019-07-12",
      department: "Design",
    },
    {
      id: "EMP002",
      name: "Riya Mehta",
      dob: "1990-07-15",
      anniversary: "2017-07-18",
      department: "HR",
    },
  ];

  const today = new Date();

  const filteredList = birthdayData.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employee Birthdays & Anniversaries</h2>

      <input
        type="text"
        placeholder="Search by name or ID..."
        className="mb-4 px-4 py-2 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Birthdays */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3">🎂 Upcoming Birthdays</h3>
          {filteredList
            .filter((emp) => new Date(emp.dob).getMonth() === today.getMonth())
            .map((emp) => (
              <div
                key={emp.id}
                className="border-b py-2 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{emp.name} ({emp.id})</p>
                  <p className="text-sm text-gray-500">
                    {new Date(emp.dob).toDateString()}
                  </p>
                </div>
                <button className="text-sm text-blue-600 hover:underline">
                  Send Wishes
                </button>
              </div>
            ))}
        </div>

        {/* Work Anniversaries */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3">🎉 Work Anniversaries</h3>
          {filteredList
            .filter(
              (emp) =>
                new Date(emp.anniversary).getMonth() === today.getMonth()
            )
            .map((emp) => (
              <div
                key={emp.id}
                className="border-b py-2 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{emp.name} ({emp.id})</p>
                  <p className="text-sm text-gray-500">
                    {new Date(emp.anniversary).toDateString()}
                  </p>
                </div>
                <button className="text-sm text-blue-600 hover:underline">
                  Congratulate
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBirthdays;
