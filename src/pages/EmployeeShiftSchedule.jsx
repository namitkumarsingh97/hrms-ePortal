import React, { useState } from "react";
import { format, startOfWeek, addDays, startOfMonth, eachDayOfInterval, endOfMonth } from "date-fns";

export default function EmployeeShiftSchedule() {
  const [view, setView] = useState("week");
  const today = new Date();

  const generateWeekDays = () => {
    const start = startOfWeek(today, { weekStartsOn: 1 });
    return Array.from({ length: 7 }).map((_, i) => addDays(start, i));
  };

  const generateMonthDays = () => {
    return eachDayOfInterval({
      start: startOfMonth(today),
      end: endOfMonth(today),
    });
  };

  const sampleShift = (date) => {
    const day = format(date, "EEE");
    if (day === "Sun") return { shift: "Off", location: "-" };
    if (day === "Wed") return { shift: "Remote: 10 AM - 6 PM", location: "Remote" };
    return { shift: "Office: 9 AM - 6 PM", location: "Office" };
  };

  const days = view === "week" ? generateWeekDays() : generateMonthDays();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#f7941e]">My Shift Schedule</h1>
        <div className="space-x-2">
          <button
            className={`px-3 py-1 rounded-md text-sm ${
              view === "week" ? "bg-[#f7941e] text-white" : "bg-gray-200"
            }`}
            onClick={() => setView("week")}
          >
            Week View
          </button>
          <button
            className={`px-3 py-1 rounded-md text-sm ${
              view === "month" ? "bg-[#f7941e] text-white" : "bg-gray-200"
            }`}
            onClick={() => setView("month")}
          >
            Month View
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {days.map((date, idx) => {
          const shift = sampleShift(date);
          return (
            <div
              key={idx}
              className="border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition"
            >
              <h3 className="text-lg font-semibold">{format(date, "eeee")}</h3>
              <p className="text-sm text-gray-600">{format(date, "do MMM, yyyy")}</p>
              <p className="mt-2 font-medium">{shift.shift}</p>
              <p className="text-sm text-gray-500">Location: {shift.location}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
