import React from "react";

const AdminCommandCenter = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Command Center</h1>
        <p className="text-gray-600 mt-2">One screen to rule everything - Predictive HR insights</p>
      </div>

      {/* Org Health Score */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Organization Health Score</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Attrition Risk</div>
            <div className="text-3xl font-bold text-red-600">High</div>
            <div className="text-xs text-gray-500 mt-2">3 employees at risk</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Burnout Index</div>
            <div className="text-3xl font-bold text-yellow-600">Medium</div>
            <div className="text-xs text-gray-500 mt-2">12 employees showing signs</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Trust Index</div>
            <div className="text-3xl font-bold text-green-600">Good</div>
            <div className="text-xs text-gray-500 mt-2">78% positive sentiment</div>
          </div>
        </div>
      </div>

      {/* Live Alerts */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Live Alerts</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
            <div className="font-semibold text-red-900">Team Overload</div>
            <div className="text-sm text-red-700">Engineering team is 120% utilized</div>
            <button className="mt-2 text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
              Review Team Capacity
            </button>
          </div>
          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
            <div className="font-semibold text-yellow-900">Manager Bias Detected</div>
            <div className="text-sm text-yellow-700">Performance ratings show potential bias in Sales team</div>
            <button className="mt-2 text-sm bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700">
              Review Ratings
            </button>
          </div>
          <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
            <div className="font-semibold text-orange-900">Payroll Risk</div>
            <div className="text-sm text-orange-700">Compliance check needed for Q4 payroll</div>
            <button className="mt-2 text-sm bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700">
              Run Compliance Check
            </button>
          </div>
        </div>
      </div>

      {/* AI Insights Feed */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">AI Insights Feed</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-gray-900">3 employees likely to resign in 30 days</div>
                <div className="text-sm text-gray-600 mt-1">High confidence prediction based on engagement patterns</div>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">High Priority</span>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-gray-900">Skills gap identified in Engineering</div>
                <div className="text-sm text-gray-600 mt-1">5 team members need upskilling in cloud technologies</div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Medium</span>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-gray-900">Performance review cycle optimization</div>
                <div className="text-sm text-gray-600 mt-1">Switching to quarterly reviews could improve engagement by 15%</div>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Low</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Recommendations */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Action Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="border rounded-lg p-4 text-left hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-900">Conduct Stay Interviews</div>
            <div className="text-sm text-gray-600 mt-1">Schedule interviews with 3 at-risk employees</div>
          </button>
          <button className="border rounded-lg p-4 text-left hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-900">Adjust Team Workloads</div>
            <div className="text-sm text-gray-600 mt-1">Redistribute tasks to reduce Engineering overload</div>
          </button>
          <button className="border rounded-lg p-4 text-left hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-900">Launch Training Program</div>
            <div className="text-sm text-gray-600 mt-1">Initiate cloud skills training for Engineering team</div>
          </button>
          <button className="border rounded-lg p-4 text-left hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-900">Review Compensation Bands</div>
            <div className="text-sm text-gray-600 mt-1">Market analysis shows pay gaps in Sales roles</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCommandCenter;

