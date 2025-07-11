import React from "react";
import DashboardCard from "../components/DashboardCard";
import TaskItem from "../components/TaskItem";

export default function EmployeeDashboard() {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Hi, Namit</h1>
        <p className="text-gray-600">
          Here's a quick look at your account today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard
          title="Today's Attendance"
          value="Punched In"
          note="at 9:46 AM"
          borderColor="border-green-500"
          textColor="text-green-500"
        />
        <DashboardCard
          title="Leave Balance"
          value="4 Days"
          borderColor="border-blue-500"
          textColor="text-blue-500"
        />
        <DashboardCard
          title="Pending Tasks"
          value="2 Tasks"
          borderColor="border-yellow-500"
          textColor="text-yellow-500"
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Your Tasks Today</h2>
        <ul className="space-y-3">
          <TaskItem
            task="Submit Expense Report"
            status="Pending"
            color="bg-red-100 text-red-700"
          />
          <TaskItem
            task="Follow up with Client"
            status="In Progress"
            color="bg-yellow-100 text-yellow-700"
          />
          <TaskItem
            task="Attend Team Meeting"
            status="Completed"
            color="bg-green-100 text-green-700"
          />
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">My Profile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Name</span>
            <p className="font-medium">Namit Singh</p>
          </div>
          <div>
            <span className="text-gray-500">Employee ID</span>
            <p className="font-medium">EMP1024</p>
          </div>
          <div>
            <span className="text-gray-500">Department</span>
            <p className="font-medium">Developer</p>
          </div>
          <div>
            <span className="text-gray-500">Role</span>
            <p className="font-medium">Sr. Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
