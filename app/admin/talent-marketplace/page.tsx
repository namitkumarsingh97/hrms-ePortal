"use client";

import React from "react";
import { SimpleBarChart, MetricCard } from "../../../src/components/charts/SimpleChart";
import { DataTable } from "../../../src/components/DataTable";

export default function TalentMarketplacePage() {
  // IT/Tech Services specific talent data
  const skillDemandData = [
    { name: "React/Next.js", value: 85, color: "bg-blue-500" },
    { name: "Node.js/Backend", value: 78, color: "bg-green-500" },
    { name: "AWS/Cloud", value: 72, color: "bg-yellow-500" },
    { name: "Python/AI-ML", value: 68, color: "bg-purple-500" },
    { name: "DevOps/K8s", value: 65, color: "bg-orange-500" },
    { name: "React Native", value: 58, color: "bg-pink-500" },
  ];

  const internalOpportunities = [
    {
      id: "INT001",
      role: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      skills: ["React", "Node.js", "AWS"],
      applicants: 12,
      postedDate: "2025-01-15",
      status: "Active",
    },
    {
      id: "INT002",
      role: "DevOps Engineer",
      department: "Infrastructure",
      location: "Bangalore",
      skills: ["Kubernetes", "Docker", "CI/CD"],
      applicants: 8,
      postedDate: "2025-01-18",
      status: "Active",
    },
    {
      id: "INT003",
      role: "AI/ML Engineer",
      department: "Data Science",
      location: "Hyderabad",
      skills: ["Python", "TensorFlow", "NLP"],
      applicants: 15,
      postedDate: "2025-01-20",
      status: "Active",
    },
    {
      id: "INT004",
      role: "QA Automation Lead",
      department: "Quality Assurance",
      location: "Pune",
      skills: ["Selenium", "Cypress", "API Testing"],
      applicants: 6,
      postedDate: "2025-01-22",
      status: "Active",
    },
    {
      id: "INT005",
      role: "Cloud Architect",
      department: "Solutions",
      location: "Remote",
      skills: ["AWS", "Azure", "Terraform"],
      applicants: 10,
      postedDate: "2025-01-24",
      status: "Active",
    },
  ];

  const columns = [
    { key: "id", label: "ID" },
    { key: "role", label: "Role" },
    { key: "department", label: "Department" },
    { key: "location", label: "Location" },
    {
      key: "skills",
      label: "Skills",
      render: (value: string[]) => (
        <div className="flex gap-1 flex-wrap">
          {value.map((skill, idx) => (
            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
              {skill}
            </span>
          ))}
        </div>
      ),
    },
    { key: "applicants", label: "Applicants" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-medium">
          {value}
        </span>
      ),
    },
    {
      key: "postedDate",
      label: "Posted",
      render: (value: string | number | Date) => new Date(value).toLocaleDateString(),
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Talent Marketplace</h1>
        <p className="text-gray-600 mt-2">Internal talent mobility and opportunities for IT/Tech Services teams</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Active Roles" value={12} subtitle="Open positions" icon="💼" trend="up" trendValue="+3 this month" />
        <MetricCard title="Internal Applicants" value={51} subtitle="Total applicants" icon="👥" trend="up" trendValue="+15%" />
        <MetricCard title="Skill Gaps" value={8} subtitle="Critical gaps identified" icon="🎯" trend="down" trendValue="-2 this month" />
        <MetricCard title="Match Rate" value="68%" subtitle="Skill match accuracy" icon="✅" trend="up" trendValue="+5%" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SimpleBarChart
          title="Skill Demand (IT/Tech Stack)"
          data={skillDemandData}
          height={250}
        />
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Top Departments Hiring</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Engineering</span>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: "75%" }} />
              </div>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Data Science</span>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                <div className="bg-purple-500 h-4 rounded-full" style={{ width: "45%" }} />
              </div>
              <span className="text-sm font-medium">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">DevOps</span>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                <div className="bg-orange-500 h-4 rounded-full" style={{ width: "38%" }} />
              </div>
              <span className="text-sm font-medium">38%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">QA/Automation</span>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: "28%" }} />
              </div>
              <span className="text-sm font-medium">28%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Opportunities Table */}
      <DataTable
        title="Internal Job Opportunities"
        columns={columns}
        data={internalOpportunities}
        searchable={true}
        pagination={true}
        itemsPerPage={5}
      />
    </div>
  );
}
