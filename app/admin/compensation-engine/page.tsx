"use client";

import React from "react";
import { SimpleBarChart, MetricCard } from "../../../src/components/charts/SimpleChart";
import { DataTable } from "../../../src/components/DataTable";

export default function CompensationEnginePage() {
  const salaryByRole = [
    { name: "Senior Full Stack", value: 1850000, color: "bg-purple-500" },
    { name: "Full Stack Dev", value: 1250000, color: "bg-blue-500" },
    { name: "DevOps Engineer", value: 1650000, color: "bg-green-500" },
    { name: "React Developer", value: 980000, color: "bg-yellow-500" },
    { name: "Node.js Developer", value: 1100000, color: "bg-orange-500" },
    { name: "QA Automation", value: 950000, color: "bg-pink-500" },
  ];

  const compensationData = [
    {
      employeeId: "EMP1001",
      name: "Rajesh Kumar",
      role: "Senior Full Stack Developer",
      department: "Engineering",
      currentSalary: 1850000,
      marketRate: 1950000,
      equity: 85000,
      bonus: 185000,
      totalComp: 2120000,
      payGap: -5.1,
      status: "Below Market",
    },
    {
      employeeId: "EMP1002",
      name: "Priya Sharma",
      role: "DevOps Engineer",
      department: "Infrastructure",
      currentSalary: 1650000,
      marketRate: 1700000,
      equity: 75000,
      bonus: 165000,
      totalComp: 1890000,
      payGap: -2.9,
      status: "At Market",
    },
    {
      employeeId: "EMP1003",
      name: "Amit Patel",
      role: "React Developer",
      department: "Frontend",
      currentSalary: 980000,
      marketRate: 1050000,
      equity: 45000,
      bonus: 98000,
      totalComp: 1123000,
      payGap: -6.7,
      status: "Below Market",
    },
    {
      employeeId: "EMP1004",
      name: "Sneha Reddy",
      role: "Node.js Developer",
      department: "Backend",
      currentSalary: 1100000,
      marketRate: 1150000,
      equity: 50000,
      bonus: 110000,
      totalComp: 1260000,
      payGap: -4.3,
      status: "At Market",
    },
  ];

  const columns = [
  { key: "employeeId", label: "Emp ID" },
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "department", label: "Department" },

  {
    key: "currentSalary",
    label: "Current Salary",
    render: (value: number) => `₹${(value / 100000).toFixed(1)}L`,
  },
  {
    key: "marketRate",
    label: "Market Rate",
    render: (value: number) => `₹${(value / 100000).toFixed(1)}L`,
  },
  {
    key: "equity",
    label: "Equity",
    render: (value: number) => `₹${(value / 1000).toFixed(0)}K`,
  },
  {
    key: "bonus",
    label: "Bonus",
    render: (value: number) => `₹${(value / 100000).toFixed(1)}L`,
  },
  {
    key: "totalComp",
    label: "Total Comp",
    render: (value: number) => `₹${(value / 100000).toFixed(1)}L`,
  },
  {
    key: "payGap",
    label: "Pay Gap",
    render: (value: number) => (
      <span
        className={
          value < -5
            ? "text-red-600 font-medium"
            : "text-yellow-600"
        }
      >
        {value > 0 ? "+" : ""}
        {value.toFixed(1)}%
      </span>
    ),
  },
  {
    key: "status",
    label: "Status",
    render: (value: string) => {
      const colors: Record<string, string> = {
        "Above Market": "bg-green-100 text-green-700",
        "At Market": "bg-blue-100 text-blue-700",
        "Below Market": "bg-red-100 text-red-700",
      };

      return (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            colors[value] || "bg-gray-100 text-gray-700"
          }`}
        >
          {value}
        </span>
      );
    },
  },
];


  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Pay Equity & Compensation Engine</h1>
        <p className="text-gray-600 mt-2">Fair pay analytics, equity heatmaps, and market benchmarking for IT/Tech roles</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Avg. Salary" value="₹12.5L" subtitle="Annual" icon="💰" trend="up" trendValue="+8%" />
        <MetricCard title="Pay Equity Score" value="87%" subtitle="Fair pay index" icon="⚖️" trend="up" trendValue="+3%" />
        <MetricCard title="Below Market" value={12} subtitle="Employees" icon="📉" trend="down" trendValue="-5" />
        <MetricCard title="Total Comp Budget" value="₹45.2Cr" subtitle="Annual" icon="💵" trend="up" trendValue="+12%" />
      </div>

      {/* Charts */}
      <SimpleBarChart
        title="Average Salary by Tech Role (Annual)"
        data={salaryByRole.map(item => ({ ...item, value: item.value / 100000, name: item.name }))}
        height={300}
      />

      {/* Compensation Table */}
      <DataTable
        title="Compensation Analysis"
        columns={columns}
        data={compensationData}
        searchable={true}
        pagination={true}
        itemsPerPage={10}
      />
    </div>
  );
}
