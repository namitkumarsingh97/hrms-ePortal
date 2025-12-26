import React from "react";

const AdminCompensationEngine = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Compensation & Fair Pay Engine</h1>
        <p className="text-gray-600 mt-2">Salary decisions backed by data and math</p>
      </div>

      {/* Pay Equity Heatmap */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Pay Equity Heatmap</h2>
        <div className="border rounded-lg p-6 bg-gray-50 min-h-[300px]">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Engineering</div>
              <div className="bg-green-100 text-green-800 rounded p-2 font-semibold">95%</div>
              <div className="text-xs text-gray-500 mt-1">Equity Score</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Sales</div>
              <div className="bg-yellow-100 text-yellow-800 rounded p-2 font-semibold">78%</div>
              <div className="text-xs text-gray-500 mt-1">Equity Score</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Marketing</div>
              <div className="bg-red-100 text-red-800 rounded p-2 font-semibold">65%</div>
              <div className="text-xs text-gray-500 mt-1">Equity Score</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Product</div>
              <div className="bg-green-100 text-green-800 rounded p-2 font-semibold">88%</div>
              <div className="text-xs text-gray-500 mt-1">Equity Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Raise Impact Simulator */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Raise Impact Simulator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Scenario Analysis</div>
            <div className="space-y-3">
              <div className="border rounded p-3">
                <div className="text-sm font-medium">10% raise for Engineering team</div>
                <div className="text-xs text-gray-600 mt-1">Impact: 12% retention improvement, $450K annual cost</div>
              </div>
              <div className="border rounded p-3">
                <div className="text-sm font-medium">15% raise for top 20% performers</div>
                <div className="text-xs text-gray-600 mt-1">Impact: 18% retention improvement, $380K annual cost</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Recommendations</div>
            <div className="space-y-2 text-sm text-gray-700">
              <div>• Prioritize raises for Marketing team (lowest equity score)</div>
              <div>• Consider merit-based increases for high performers</div>
              <div>• Align with market benchmarks for Sales roles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Retention vs Hike Predictor */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Retention vs Hike Predictor</h2>
        <div className="space-y-3">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-900">Sarah Chen - Senior Developer</div>
                <div className="text-sm text-gray-600">Current: $120K • Market: $135K</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-red-600">45% retention risk</div>
                <div className="text-xs text-gray-500">15% hike needed to match market</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-900">Mike Johnson - Product Manager</div>
                <div className="text-sm text-gray-600">Current: $110K • Market: $115K</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-yellow-600">25% retention risk</div>
                <div className="text-xs text-gray-500">5% hike recommended</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Benchmark Auto-Sync */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Market Benchmark Auto-Sync</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Last Updated</div>
            <div className="font-semibold text-gray-900">Dec 15, 2024</div>
            <div className="text-xs text-green-600 mt-2">✓ Synced with 3 data sources</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Data Sources</div>
            <div className="text-xs text-gray-700 space-y-1">
              <div>• Glassdoor API</div>
              <div>• LinkedIn Salary</div>
              <div>• Industry Reports</div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Roles Tracked</div>
            <div className="text-2xl font-bold text-blue-600">24 roles</div>
            <div className="text-xs text-gray-500 mt-1">Across 8 departments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCompensationEngine;

