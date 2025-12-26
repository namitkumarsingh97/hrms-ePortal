"use client";

import React from "react";
import { SimpleBarChart, SimplePieChart, MetricCard } from "../../../src/components/charts/SimpleChart";
import { DataTable } from "../../../src/components/DataTable";

export default function OrgHealthPage() {
  const teamHealth = [
    { name: "Engineering", value: 82, color: "bg-green-500" },
    { name: "Product", value: 78, color: "bg-green-500" },
    { name: "DevOps", value: 75, color: "bg-yellow-500" },
    { name: "QA", value: 71, color: "bg-yellow-500" },
    { name: "Data Science", value: 68, color: "bg-orange-500" },
    { name: "Support", value: 65, color: "bg-orange-500" },
  ];

  const riskDistribution = [
    { name: "Low Risk", value: 145, color: "#10b981" },
    { name: "Medium Risk", value: 42, color: "#f59e0b" },
    { name: "High Risk", value: 18, color: "#ef4444" },
  ];

  const teamMetrics = [
    {
      team: "Frontend Engineering",
      members: 24,
      engagement: 85,
      attritionRisk: "Low",
      workload: 78,
      skillGaps: 2,
      satisfaction: 82,
      status: "Healthy",
    },
    {
      team: "Backend Engineering",
      members: 28,
      engagement: 88,
      attritionRisk: "Low",
      workload: 82,
      skillGaps: 1,
      satisfaction: 86,
      status: "Healthy",
    },
    {
      team: "DevOps",
      members: 12,
      engagement: 79,
      attritionRisk: "Medium",
      workload: 92,
      skillGaps: 3,
      satisfaction: 74,
      status: "At Risk",
    },
    {
      team: "QA/Automation",
      members: 16,
      engagement: 76,
      attritionRisk: "Medium",
      workload: 88,
      skillGaps: 4,
      satisfaction: 72,
      status: "At Risk",
    },
    {
      team: "Data Science",
      members: 14,
      engagement: 81,
      attritionRisk: "Low",
      workload: 75,
      skillGaps: 2,
      satisfaction: 79,
      status: "Healthy",
    },
    {
      team: "Product Management",
      members: 8,
      engagement: 90,
      attritionRisk: "Low",
      workload: 70,
      skillGaps: 0,
      satisfaction: 88,
      status: "Healthy",
    },
  ];

  const columns = [
    { key: "team", label: "Team" },
    { key: "members", label: "Members" },
    {
      key: "engagement",
      label: "Engagement",
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <div className="w-16 bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                value >= 80 ? "bg-green-500" : value >= 70 ? "bg-yellow-500" : "bg-red-500"
              }`}
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm font-medium">{value}%</span>
        </div>
      ),
    },
    {
      key: "attritionRisk",
      label: "Attrition Risk",
      render: (value: string) => {
        const colors: Record<string, string> = {
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
    {
      key: "workload",
      label: "Workload",
      render: (value: number) => (
        <span className={value > 85 ? "text-red-600 font-medium" : value > 75 ? "text-yellow-600" : "text-green-600"}>
          {value}%
        </span>
      ),
    },
    { key: "skillGaps", label: "Skill Gaps" },
    {
      key: "satisfaction",
      label: "Satisfaction",
      render: (value: number) => `${value}%`,
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className={`px-2 py-1 rounded text-xs font-medium ${
          value === "Healthy" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}>
          {value}
        </span>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Organization Health</h1>
        <p className="text-gray-600 mt-2">Real-time health metrics and insights for IT/Tech Services teams</p>
      </div>

      {/* Health Score Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Overall Health Score" value="78" subtitle="Good" icon="❤️" trend="up" trendValue="+3 points" />
        <MetricCard title="At Risk Employees" value={18} subtitle="High risk" icon="⚠️" trend="down" trendValue="-5 this month" />
        <MetricCard title="Team Satisfaction" value="82%" subtitle="Average" icon="😊" trend="up" trendValue="+4%" />
        <MetricCard title="Skill Coverage" value="87%" subtitle="Tech stack" icon="🎯" trend="up" trendValue="+2%" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SimpleBarChart
          title="Team Health Scores (by Department)"
          data={teamHealth}
          height={280}
        />
        <SimplePieChart
          title="Attrition Risk Distribution"
          data={riskDistribution}
          size={200}
        />
      </div>

      {/* Team Metrics Table */}
      <DataTable
        title="Team Health Metrics"
        columns={columns}
        data={teamMetrics}
        searchable={true}
        pagination={true}
        itemsPerPage={6}
      />
    </div>
  );
}
