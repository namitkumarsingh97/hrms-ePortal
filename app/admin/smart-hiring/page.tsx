"use client";

import React from "react";
import { SimpleBarChart, SimplePieChart, MetricCard } from "../../../src/components/charts/SimpleChart";
import { DataTable } from "../../../src/components/DataTable";

export default function SmartHiringPage() {
  const techStackDemand = [
    { name: "Full Stack", value: 45, color: "#3b82f6" },
    { name: "Frontend", value: 32, color: "#10b981" },
    { name: "Backend", value: 28, color: "#f59e0b" },
    { name: "DevOps", value: 22, color: "#8b5cf6" },
    { name: "QA/Automation", value: 18, color: "#ec4899" },
    { name: "Data Engineer", value: 15, color: "#06b6d4" },
  ];

  const hiringFunnel = [
    { name: "Applied", value: 320 },
    { name: "Screened", value: 245 },
    { name: "Technical Round", value: 180 },
    { name: "Final Round", value: 95 },
    { name: "Offered", value: 42 },
    { name: "Joined", value: 28 },
  ];

  const activePositions = [
    {
      id: "POS001",
      role: "Senior React Developer",
      department: "Frontend",
      experience: "5-8 years",
      skills: ["React", "TypeScript", "Next.js", "Redux"],
      applicants: 48,
      shortlisted: 12,
      interviews: 5,
      offers: 2,
      status: "Active",
      postedDate: "2025-01-10",
    },
    {
      id: "POS002",
      role: "Node.js Backend Engineer",
      department: "Backend",
      experience: "4-7 years",
      skills: ["Node.js", "Express", "MongoDB", "Redis"],
      applicants: 35,
      shortlisted: 8,
      interviews: 3,
      offers: 1,
      status: "Active",
      postedDate: "2025-01-12",
    },
    {
      id: "POS003",
      role: "AWS Cloud Architect",
      department: "Infrastructure",
      experience: "8-12 years",
      skills: ["AWS", "Terraform", "Kubernetes", "CI/CD"],
      applicants: 22,
      shortlisted: 6,
      interviews: 4,
      offers: 1,
      status: "Active",
      postedDate: "2025-01-15",
    },
    {
      id: "POS004",
      role: "AI/ML Engineer",
      department: "Data Science",
      experience: "3-6 years",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
      applicants: 58,
      shortlisted: 15,
      interviews: 8,
      offers: 3,
      status: "Active",
      postedDate: "2025-01-18",
    },
    {
      id: "POS005",
      role: "QA Automation Lead",
      department: "Quality Assurance",
      experience: "6-10 years",
      skills: ["Selenium", "Cypress", "API Testing", "Performance"],
      applicants: 28,
      shortlisted: 7,
      interviews: 4,
      offers: 1,
      status: "Active",
      postedDate: "2025-01-20",
    },
  ];

  const columns = [
    { key: "id", label: "ID" },
    { key: "role", label: "Position" },
    { key: "department", label: "Department" },
    { key: "experience", label: "Experience" },
    {
      key: "skills",
      label: "Required Skills",
      render: (value) => (
        <div className="flex gap-1 flex-wrap max-w-xs">
          {value.slice(0, 3).map((skill, idx) => (
            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
              {skill}
            </span>
          ))}
          {value.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              +{value.length - 3}
            </span>
          )}
        </div>
      ),
    },
    { key: "applicants", label: "Applied" },
    { key: "shortlisted", label: "Shortlisted" },
    { key: "interviews", label: "Interviews" },
    { key: "offers", label: "Offers" },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-medium">
          {value}
        </span>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Smart Hiring</h1>
        <p className="text-gray-600 mt-2">AI-powered talent acquisition with bias detection and success prediction for IT/Tech roles</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Active Positions" value={18} subtitle="Open roles" icon="💼" trend="up" trendValue="+5 this month" />
        <MetricCard title="Total Applicants" value={463} subtitle="This month" icon="📥" trend="up" trendValue="+23%" />
        <MetricCard title="Avg. Time to Hire" value="24 days" subtitle="Tech roles" icon="⏱️" trend="down" trendValue="-5 days" />
        <MetricCard title="Offer Acceptance" value="78%" subtitle="Rate" icon="✅" trend="up" trendValue="+8%" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SimpleBarChart
          title="Tech Stack Demand"
          data={techStackDemand}
          height={280}
        />
        <SimpleBarChart
          title="Hiring Funnel (This Month)"
          data={hiringFunnel}
          height={280}
        />
      </div>

      {/* Active Positions Table */}
      <DataTable
        title="Active Hiring Positions"
        columns={columns}
        data={activePositions}
        searchable={true}
        pagination={true}
        itemsPerPage={5}
      />
    </div>
  );
}
