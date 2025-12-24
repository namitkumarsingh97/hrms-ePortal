import React, { useState } from "react";

const AdminWorkforcePlanning = () => {
  const [scenario, setScenario] = useState("");

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Workforce Planning Simulator</h1>
        <p className="text-gray-600 mt-2">What happens if we fire/hire X people? Run simulations</p>
      </div>

      {/* Layoff Simulation */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Layoff Simulation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Scenario: Reduce Engineering by 10%</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Current headcount:</span>
                <span className="font-semibold">50 engineers</span>
              </div>
              <div className="flex justify-between">
                <span>After reduction:</span>
                <span className="font-semibold">45 engineers</span>
              </div>
              <div className="flex justify-between">
                <span>Cost savings:</span>
                <span className="font-semibold text-green-600">$600K/year</span>
              </div>
              <div className="flex justify-between">
                <span>Productivity impact:</span>
                <span className="font-semibold text-red-600">-15%</span>
              </div>
              <div className="flex justify-between">
                <span>Risk level:</span>
                <span className="font-semibold text-yellow-600">Medium</span>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Recommendations</div>
            <div className="space-y-2 text-sm text-gray-700">
              <div>• Consider voluntary separation first</div>
              <div>• Retain high performers and critical skills</div>
              <div>• Provide outplacement support</div>
              <div>• Monitor remaining team morale</div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Runway Calculator */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Growth Runway Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Current Runway</div>
            <div className="text-2xl font-bold text-blue-600">18 months</div>
            <div className="text-xs text-gray-500 mt-1">At current burn rate</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">With 20% Growth</div>
            <div className="text-2xl font-bold text-green-600">24 months</div>
            <div className="text-xs text-gray-500 mt-1">With 20% headcount increase</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Optimal Headcount</div>
            <div className="text-2xl font-bold text-purple-600">120</div>
            <div className="text-xs text-gray-500 mt-1">For 2-year runway</div>
          </div>
        </div>
      </div>

      {/* Skill Gap Future Map */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Skill Gap Future Map (6-12 months)</h2>
        <div className="space-y-3">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-900">AI/ML Engineers</div>
                <div className="text-sm text-gray-600">Current: 5 • Needed: 12 • Gap: 7</div>
              </div>
              <div className="text-right">
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Critical Gap</span>
                <div className="text-xs text-gray-500 mt-1">6 months to hire</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-900">DevOps Specialists</div>
                <div className="text-sm text-gray-600">Current: 8 • Needed: 10 • Gap: 2</div>
              </div>
              <div className="text-right">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Moderate Gap</span>
                <div className="text-xs text-gray-500 mt-1">3 months to hire</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Budget vs Productivity Model */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Budget vs Productivity Model</h2>
        <div className="border rounded-lg p-6 bg-gray-50 min-h-[300px]">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📊</div>
            <div className="text-lg font-medium">Budget vs Productivity Matrix</div>
            <div className="text-sm mt-2">Visual representation of headcount vs output efficiency</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWorkforcePlanning;

