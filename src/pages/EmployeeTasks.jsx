import React, { useState } from "react";

const EmployeeTasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete homepage design",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Send daily report",
      status: "Pending",
    },
    {
      id: 3,
      title: "Fix mobile responsiveness",
      status: "Completed",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-red-100 text-red-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      default:
        return "";
    }
  };

  const toggleStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed"
                  ? "Pending"
                  : task.status === "Pending"
                  ? "In Progress"
                  : "Completed",
            }
          : task
      )
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Tasks</h1>

      <div className="bg-white rounded shadow p-6">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks assigned.</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium">{task.title}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </div>
                <button
                  onClick={() => toggleStatus(task.id)}
                  className="text-sm bg-[#f7941e] text-white px-3 py-1 rounded hover:bg-orange-600"
                >
                  Mark Next
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default EmployeeTasks;