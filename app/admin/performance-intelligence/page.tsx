"use client";

import React from "react";
import { SimpleBarChart, SimpleLineChart, MetricCard } from "../../../src/components/charts/SimpleChart";
import { DataTable } from "../../../src/components/DataTable";

export default function PerformanceIntelligencePage() {
  const performanceTrend = [
    { name: "Jan", value: 72 },
    { name: "Feb", value: 75 },
    { name: "Mar", value: 78 },
    { name: "Apr", value: 76 },
    { name: "May", value: 80 },
    { name: "Jun", value: 82 },
  ];

  const techSkillPerformance = [
    { name: "Full Stack Dev", value: 88, color: "bg-blue-500" },
    { name: "DevOps", value: 85, color: "bg-green-500" },
    { name: "Frontend", value: 82, color: "bg-purple-500" },
    { name: "Backend", value: 80, color: "bg-orange-500" },
    { name: "QA/Automation", value: 78, color: "bg-pink-500" },
    { name: "Data Engineer", value: 75, color: "bg-yellow-500" },
  ];

  const employeePerformance = [
    {
      employeeId: "EMP1001",
      name: "Rajesh Kumar",
      role: "Senior Full Stack Developer",
      department: "Engineering",
      currentRating: 4.5,
      previousRating: 4.2,
      projectsCompleted: 12,
      codeQuality: 92,
      peerScore: 4.3,
      managerScore: 4.7,
      status: "Top Performer",
    },
    {
      employeeId: "EMP1002",
      name: "Priya Sharma",
      role: "DevOps Engineer",
      department: "Infrastructure",
      currentRating: 4.3,
      previousRating: 4.0,
      projectsCompleted: 10,
      codeQuality: 88,
      peerScore: 4.2,
      managerScore: 4.4,
      status: "High Performer",
    },
    {
      employeeId: "EMP1003",
      name: "Amit Patel",
      role: "React Developer",
      department: "Frontend",
      currentRating: 4.1,
      previousRating: 3.9,
      projectsCompleted: 8,
      codeQuality: 85,
      peerScore: 4.0,
      managerScore: 4.2,
      status: "High Performer",
    },
    {
      employeeId: "EMP1004",
      name: "Sneha Reddy",
      role: "Node.js Developer",
      department: "Backend",
      currentRating: 3.8,
      previousRating: 3.7,
      projectsCompleted: 7,
      codeQuality: 82,
      peerScore: 3.7,
      managerScore: 3.9,
      status: "Meets Expectations",
    },
    {
      employeeId: "EMP1005",
      name: "Vikram Singh",
      role: "QA Automation Lead",
      department: "Quality Assurance",
      currentRating: 4.2,
      previousRating: 4.1,
      projectsCompleted: 11,
      codeQuality: 90,
      peerScore: 4.1,
      managerScore: 4.3,
      status: "High Performer",
    },
    {
      employeeId: "EMP1006",
      name: "Anjali Mehta",
      role: "Data Engineer",
      department: "Data Science",
      currentRating: 3.9,
      previousRating: 3.6,
      projectsCompleted: 9,
      codeQuality: 86,
      peerScore: 3.8,
      managerScore: 4.0,
      status: "Meets Expectations",
    },
  ];

  const columns = [
    { key: "employeeId", label: "Emp ID" },
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "department", label: "Department" },
    {
      key: "currentRating",
      label: "Rating",
      render: (value) => (
        <div className="flex items-center gap-2">
          <span className="font-semibold">{value.toFixed(1)}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(value) ? "text-yellow-400" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
        </div>
      ),
    },
    { key: "projectsCompleted", label: "Projects" },
    {
      key: "codeQuality",
      label: "Code Quality",
      render: (value) => (
        <span className={value >= 90 ? "text-green-600 font-medium" : value >= 80 ? "text-blue-600" : "text-orange-600"}>
          {value}%
        </span>
      ),
    },
    {
      key: "peerScore",
      label: "Peer Score",
      render: (value) => value.toFixed(1),
    },
    {
      key: "status",
      label: "Status",
      render: (value) => {
        const colors = {
          "Top Performer": "bg-purple-100 text-purple-700",
          "High Performer": "bg-green-100 text-green-700",
          "Meets Expectations": "bg-blue-100 text-blue-700",
          "Needs Improvement": "bg-orange-100 text-orange-700",
        };
        return (
          <span className={`px-2 py-1 rounded text-xs font-medium ${colors[value] || "bg-gray-100 text-gray-700"}`}>
            {value}
          </span>
        );
      },
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Performance Intelligence</h1>
        <p className="text-gray-600 mt-2">Continuous performance tracking with peer impact and AI reviews for IT/Tech teams</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Avg. Performance" value="4.1" subtitle="Out of 5.0" icon="📊" trend="up" trendValue="+0.2" />
        <MetricCard title="Top Performers" value={24} subtitle="Top 20%" icon="⭐" trend="up" trendValue="+3" />
        <MetricCard title="Code Quality Avg" value="87%" subtitle="Tech teams" icon="💻" trend="up" trendValue="+3%" />
        <MetricCard title="Review Completion" value="94%" subtitle="This cycle" icon="✅" trend="up" trendValue="+2%" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SimpleLineChart
          title="Performance Trend (6 Months)"
          data={performanceTrend}
          height={250}
          color="#f97316"
        />
        <SimpleBarChart
          title="Performance by Tech Role"
          data={techSkillPerformance}
          height={250}
        />
      </div>

      {/* Employee Performance Table */}
      <DataTable
        title="Employee Performance Overview"
        columns={columns}
        data={employeePerformance}
        searchable={true}
        pagination={true}
        itemsPerPage={6}
      />
    </div>
  );
}
