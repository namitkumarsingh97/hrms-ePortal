"use client";

import React from "react";
import { SimpleBarChart, SimplePieChart, MetricCard } from "../../../src/components/charts/SimpleChart";
import { DataTable } from "../../../src/components/DataTable";

export default function WorkloadBurnoutPage() {
  const workloadByTeam = [
    { name: "DevOps", value: 92, color: "bg-red-500" },
    { name: "QA", value: 88, color: "bg-orange-500" },
    { name: "Backend", value: 82, color: "bg-yellow-500" },
    { name: "Frontend", value: 78, color: "bg-green-500" },
    { name: "Data Science", value: 75, color: "bg-blue-500" },
    { name: "Product", value: 70, color: "bg-purple-500" },
  ];

  const burnoutRisk = [
    { name: "Low Risk", value: 135, color: "#10b981" },
    { name: "Medium Risk", value: 52, color: "#f59e0b" },
    { name: "High Risk", value: 18, color: "#ef4444" },
  ];

  const employeeWorkload = [
    {
      employeeId: "EMP1001",
      name: "Rajesh Kumar",
      role: "Senior Full Stack Developer",
      department: "Engineering",
      workload: 92,
      hoursLogged: 48,
      burnoutRisk: "High",
      lastBreak: "2 weeks ago",
      status: "Overloaded",
    },
    {
      employeeId: "EMP1002",
      name: "Priya Sharma",
      role: "DevOps Engineer",
      department: "Infrastructure",
      workload: 88,
      hoursLogged: 46,
      burnoutRisk: "High",
      lastBreak: "3 weeks ago",
      status: "Overloaded",
    },
    {
      employeeId: "EMP1003",
      name: "Amit Patel",
      role: "React Developer",
      department: "Frontend",
      workload: 78,
      hoursLogged: 42,
      burnoutRisk: "Medium",
      lastBreak: "1 week ago",
      status: "Normal",
    },
    {
      employeeId: "EMP1004",
      name: "Sneha Reddy",
      role: "Node.js Developer",
      department: "Backend",
      workload: 82,
      hoursLogged: 44,
      burnoutRisk: "Medium",
      lastBreak: "5 days ago",
      status: "Normal",
    },
    {
      employeeId: "EMP1005",
      name: "Vikram Singh",
      role: "QA Automation Lead",
      department: "Quality Assurance",
      workload: 85,
      hoursLogged: 45,
      burnoutRisk: "Medium",
      lastBreak: "1 week ago",
      status: "Overloaded",
    },
    {
      employeeId: "EMP1006",
      name: "Anjali Mehta",
      role: "Data Engineer",
      department: "Data Science",
      workload: 75,
      hoursLogged: 40,
      burnoutRisk: "Low",
      lastBreak: "3 days ago",
      status: "Normal",
    },
  ];

  const columns = [
    { key: "employeeId", label: "Emp ID" },
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "department", label: "Department" },
    {
      key: "workload",
      label: "Workload",
      render: (value) => (
        <div className="flex items-center gap-2">
          <div className="w-20 bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                value >= 85 ? "bg-red-500" : value >= 75 ? "bg-orange-500" : "bg-green-500"
              }`}
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm font-medium w-10">{value}%</span>
        </div>
      ),
    },
    { key: "hoursLogged", label: "Hours/Week" },
    {
      key: "burnoutRisk",
      label: "Burnout Risk",
      render: (value) => {
        const colors = {
          Low: "bg-green-100 text-green-700",
          Medium: "bg-yellow-100 text-yellow-700",
          High: "bg-red-100 text-red-700",
        };
        return (
          <span className={`px-2 py-1 rounded text-xs font-medium ${colors[value] || "bg-gray-100 text-gray-700"}`}>
            {value}
          </span>
        );
      },
    },
    { key: "lastBreak", label: "Last Break" },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span className={`px-2 py-1 rounded text-xs font-medium ${
          value === "Overloaded" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
        }`}>
          {value}
        </span>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Workload & Burnout Analysis</h1>
        <p className="text-gray-600 mt-2">Monitor team workload and identify burnout risks for IT/Tech Services teams</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Avg. Workload" value="82%" subtitle="Across teams" icon="📊" trend="up" trendValue="+5%" />
        <MetricCard title="At Risk Employees" value={18} subtitle="High burnout risk" icon="⚠️" trend="down" trendValue="-3" />
        <MetricCard title="Avg. Hours/Week" value="43" subtitle="Logged hours" icon="⏱️" trend="up" trendValue="+2 hours" />
        <MetricCard title="Team Satisfaction" value="74%" subtitle="Work-life balance" icon="😊" trend="down" trendValue="-2%" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SimpleBarChart
          title="Average Workload by Team"
          data={workloadByTeam}
          height={280}
        />
        <SimplePieChart
          title="Burnout Risk Distribution"
          data={burnoutRisk}
          size={200}
        />
      </div>

      {/* Employee Workload Table */}
      <DataTable
        title="Employee Workload & Burnout Risk"
        columns={columns}
        data={employeeWorkload}
        searchable={true}
        pagination={true}
        itemsPerPage={6}
      />
    </div>
  );
}
