import React from "react";

const todayBirthdays = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "UI Designer",
    photo: "https://i.pravatar.cc/150?img=32",
  },
];

const upcomingBirthdays = [
  {
    id: 2,
    name: "Raj Malhotra",
    role: "Marketing Manager",
    date: "July 20",
    photo: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "HR Executive",
    date: "July 22",
    photo: "https://i.pravatar.cc/150?img=28",
  },
];

const anniversaries = [
  {
    id: 4,
    name: "Karan Mehta",
    role: "Backend Developer",
    years: 2,
    date: "Joined: July 10, 2023",
    photo: "https://i.pravatar.cc/150?img=14",
  },
];

export default function EmployeeBirthdays() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-[#f7941e] mb-6">
        Celebration Corner
      </h1>

      {/* Today's Birthdays */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Today's Birthdays</h2>
        {todayBirthdays.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todayBirthdays.map((person) => (
              <div
                key={person.id}
                className="flex items-center gap-4 border border-gray-200 p-4 rounded-xl"
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">{person.name}</h3>
                  <p className="text-sm text-gray-500">{person.role}</p>
                  <span className="text-green-600 text-sm font-semibold">
                    Wish Them!
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No birthdays today.</p>
        )}
      </section>

      {/* Upcoming Birthdays */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Birthdays</h2>
        <div className="space-y-4">
          {upcomingBirthdays.map((person) => (
            <div
              key={person.id}
              className="flex items-center gap-4 border border-gray-100 p-4 rounded-lg"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.role}</p>
                <p className="text-sm text-indigo-500">{person.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Anniversaries */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Work Anniversaries</h2>
        <div className="space-y-4">
          {anniversaries.map((person) => (
            <div
              key={person.id}
              className="flex items-center gap-4 border border-gray-100 p-4 rounded-lg"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.role}</p>
                <p className="text-sm text-green-500">
                  {person.years} Year{person.years > 1 ? "s" : ""} at Company
                </p>
                <p className="text-xs text-gray-400">{person.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
