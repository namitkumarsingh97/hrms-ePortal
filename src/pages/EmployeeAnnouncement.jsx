import React from "react";

const announcements = [
  {
    id: 1,
    title: "Diwali Holiday Announcement",
    date: "2025-10-30",
    author: "HR Department",
    description:
      "We are pleased to announce that our office will remain closed on 1st and 2nd November for Diwali celebrations. Wishing everyone a happy and safe Diwali!",
  },
  {
    id: 2,
    title: "Annual Townhall Scheduled",
    date: "2025-09-15",
    author: "Management",
    description:
      "Our annual townhall will be held on 25th September, 4:00 PM. We'll discuss company achievements, roadmaps, and take open Q&A.",
  },
  {
    id: 3,
    title: "Work From Home Policy Updated",
    date: "2025-08-01",
    author: "HR Team",
    description:
      "New hybrid model guidelines are published. Employees may now choose 2 days remote work. Refer HR portal for complete details.",
  },
];

export default function EmployeeAnnouncement() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-[#f7941e] mb-4">
        Company Announcements
      </h1>

      <div className="space-y-6">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-xl p-4 hover:shadow transition"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <span className="text-sm text-gray-500">
                {new Date(item.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <p className="text-xs text-gray-400 mt-1">— {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
