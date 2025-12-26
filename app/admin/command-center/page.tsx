"use client";

import React from "react";
import { useCompanyFeatures } from "../../../src/hooks/useCompanyFeatures";
import { CompanyFeatureGate } from "../../../src/components/CompanyFeatureGate";
import { SimpleBarChart, MetricCard } from "../../../src/components/charts/SimpleChart";
import { DataTable } from "../../../src/components/DataTable";

export default function CommandCenterPage() {
  const { companyName } = useCompanyFeatures();
  
  return (
    <CompanyFeatureGate companyName={companyName} feature="command_center">
      <div className="p-4 md:p-6 space-y-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Command Center</h1>
            <p className="text-gray-600 mt-2">One screen to rule everything - Predictive HR insights for IT/Tech Services</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              {companyName}
            </span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <MetricCard title="Org Health Score" value="78" subtitle="Good" icon="❤️" trend="up" trendValue="+3 points" />
          <MetricCard title="Active Employees" value={205} subtitle="Tech teams" icon="👥" trend="up" trendValue="+12 this month" />
          <MetricCard title="Attrition Risk" value="Low" subtitle="8% at risk" icon="⚠️" trend="down" trendValue="-2%" />
          <MetricCard title="Team Satisfaction" value="82%" subtitle="Average" icon="😊" trend="up" trendValue="+4%" />
        </div>

        {/* Live Alerts */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Live Alerts & Insights</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
              <div className="font-semibold text-red-900">Engineering Team Overload</div>
              <div className="text-sm text-red-700">Frontend team is 125% utilized - Consider resource allocation</div>
            </div>
            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
              <div className="font-semibold text-yellow-900">Skill Gap Detected</div>
              <div className="text-sm text-yellow-700">DevOps team needs Kubernetes expertise - 3 positions open</div>
            </div>
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <div className="font-semibold text-blue-900">High Performer Alert</div>
              <div className="text-sm text-blue-700">5 employees showing exceptional performance - Consider promotion</div>
            </div>
          </div>
        </div>
      </div>
    </CompanyFeatureGate>
  );
}
