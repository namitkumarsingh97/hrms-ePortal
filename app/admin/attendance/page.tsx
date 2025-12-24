"use client";

import React from "react";
import { SimpleBarChart, SimplePieChart, MetricCard } from "../../../src/components/charts/SimpleChart";
import { DataTable } from "../../../src/components/DataTable";

export default function AttendancePage() {
  const attendanceByTeam = [
    { name: "Engineering", value: 94, color: "bg-green-500" },
    { name: "DevOps", value: 92, color: "bg-green-500" },
    { name: "QA", value: 89, color: "bg-yellow-500" },
    { name: "Data Science", value: 87, color: "bg-yellow-500" },
    { name: "Product", value: 95, color: "bg-green-500" },
    { name: "Support", value: 91, color: "bg-green-500" },
  ];

  const attendanceStatus = [
    { name: "Present", value: 185, color: "#10b981" },
    { name: "Absent", value: 12, color: "#ef4444" },
    { name: "On Leave", value: 8, color: "#f59e0b" },
  ];

  const dailyAttendance = [
    {
      employeeId: "EMP1001",
      name: "Rajesh Kumar",
      role: "Senior Full Stack Developer",
      department: "Engineering",
      checkIn: "09:15 AM",
      checkOut: "06:45 PM",
      hours: 9.5,
      status: "Present",
      location: "Office",
    },
    {
      employeeId: "EMP1002",
      name: "Priya Sharma",
      role: "DevOps Engineer",
      department: "Infrastructure",
      checkIn: "09:30 AM",
      checkOut: "07:00 PM",
      hours: 9.5,
      status: "Present",
      location: "Remote",
    },
    {
      employeeId: "EMP1003",
      name: "Amit Patel",
      role: "React Developer",
      department: "Frontend",
      checkIn: "09:45 AM",
      checkOut: "06:30 PM",
      hours: 8.75,
      status: "Present",
      location: "Office",
    },
    {
      employeeId: "EMP1004",
      name: "Sneha Reddy",
      role: "Node.js Developer",
      department: "Backend",
      checkIn: "10:00 AM",
      checkOut: "07:15 PM",
      hours: 9.25,
      status: "Late",
      location: "Remote",
    },
    {
      employeeId: "EMP1005",
      name: "Vikram Singh",
      role: "QA Automation Lead",
      department: "Quality Assurance",
      checkIn: "-",
      checkOut: "-",
      hours: 0,
      status: "Absent",
      location: "-",
    },
  ];

  const columns = [
    { key: "employeeId", label: "Emp ID" },
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "department", label: "Department" },
    { key: "checkIn", label: "Check In" },
    { key: "checkOut", label: "Check Out" },
    {
      key: "hours",
      label: "Hours",
      render: (value) => (value > 0 ? `${value.toFixed(1)} hrs` : "-"),
    },
    {
      key: "status",
      label: "Status",
      render: (value) => {
        const colors = {
          Present: "bg-green-100 text-green-700",
          Absent: "bg-red-100 text-red-700",
          Late: "bg-yellow-100 text-yellow-700",
          "On Leave": "bg-blue-100 text-blue-700",
        };
        return (
          <span className={`px-2 py-1 rounded text-xs font-medium ${colors[value] || "bg-gray-100 text-gray-700"}`}>
            {value}
          </span>
        );
      },
    },
    { key: "location", label: "Location" },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Attendance & Time Tracking</h1>
        <p className="text-gray-600 mt-2">Real-time attendance monitoring for IT/Tech Services teams</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Today's Attendance" value="94.1%" subtitle="205/218 present" icon="✅" trend="up" trendValue="+2.1%" />
        <MetricCard title="Absent Today" value={12} subtitle="Employees" icon="❌" trend="down" trendValue="-3" />
        <MetricCard title="On Leave" value={8} subtitle="Employees" icon="🏖️" trend="neutral" trendValue="No change" />
        <MetricCard title="Avg. Hours Today" value="9.2 hrs" subtitle="Per employee" icon="⏱️" trend="up" trendValue="+0.3 hrs" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SimpleBarChart
          title="Attendance Rate by Team"
          data={attendanceByTeam}
          height={280}
        />
        <SimplePieChart
          title="Today's Attendance Status"
          data={attendanceStatus}
          size={200}
        />
      </div>

      {/* Attendance Table */}
      <DataTable
        title="Today's Attendance Record"
        columns={columns}
        data={dailyAttendance}
        searchable={true}
        pagination={true}
        itemsPerPage={10}
      />
    </div>
  );
}
