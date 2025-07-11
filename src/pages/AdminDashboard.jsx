import React from "react";
import DashboardCard from "../components/DashboardCard";
import TaskItem from "../components/TaskItem";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Overview of employee activity and key metrics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <DashboardCard
          title="Total Employees"
          value="35"
          borderColor="border-blue-500"
          textColor="text-blue-500"
        />
        <DashboardCard
          title="Present Today"
          value="28"
          note="7 Absent"
          borderColor="border-green-500"
          textColor="text-green-500"
        />
        <DashboardCard
          title="Pending Leave Requests"
          value="4 Requests"
          borderColor="border-red-500"
          textColor="text-red-500"
        />
        <DashboardCard
          title="Late Logins"
          value="6 Employees"
          borderColor="border-yellow-500"
          textColor="text-yellow-500"
        />
        <DashboardCard
          title="Tasks Assigned Today"
          value="12 Tasks"
          borderColor="border-indigo-500"
          textColor="text-indigo-500"
        />
        <DashboardCard
          title="Upcoming Birthdays"
          value="2 This Week"
          borderColor="border-pink-500"
          textColor="text-pink-500"
        />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Team Tasks Overview</h2>
        <ul className="space-y-3">
          <TaskItem
            task="Submit Monthly Sales Report"
            status="In Progress"
            color="bg-yellow-100 text-yellow-700"
          />
          <TaskItem
            task="Review Leave Applications"
            status="Completed"
            color="bg-green-100 text-green-700"
          />
          <TaskItem
            task="Schedule Interview Panel"
            status="Pending"
            color="bg-red-100 text-red-700"
          />
          <TaskItem
            task="Design New Onboarding Pack"
            status="In Progress"
            color="bg-yellow-100 text-yellow-700"
          />
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
