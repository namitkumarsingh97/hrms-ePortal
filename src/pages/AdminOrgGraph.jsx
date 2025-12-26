import React from "react";

const AdminOrgGraph = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Organization Graph</h1>
        <p className="text-gray-600 mt-2">Dynamic power + dependency mapping - Beyond org charts</p>
      </div>

      {/* Influence Map */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Influence Map</h2>
        <p className="text-gray-600 mb-4">Who actually drives decisions in your organization</p>
        <div className="border rounded-lg p-8 bg-gray-50 min-h-[400px] flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📊</div>
            <div className="text-lg font-medium">Influence Visualization</div>
            <div className="text-sm mt-2">Interactive network graph showing decision influence patterns</div>
          </div>
        </div>
      </div>

      {/* Skill Dependency Graph */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Skill Dependency Graph</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Critical Skills</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Cloud Architecture</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Critical</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">DevOps</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Critical</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Data Analytics</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">High</span>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Dependency Chains</div>
            <div className="text-sm text-gray-600 space-y-1">
              <div>→ Engineering depends on: Cloud Architecture (3 people)</div>
              <div>→ Product depends on: Data Analytics (2 people)</div>
              <div>→ Sales depends on: Product Knowledge (5 people)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Single Point of Failure */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Single-Point-of-Failure Employees</h2>
        <div className="space-y-3">
          <div className="border border-red-200 bg-red-50 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold text-red-900">John Doe - Senior Architect</div>
                <div className="text-sm text-red-700 mt-1">Critical knowledge holder for 5 active projects</div>
              </div>
              <button className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                Create Backup Plan
              </button>
            </div>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold text-yellow-900">Sarah Smith - Database Admin</div>
                <div className="text-sm text-yellow-700 mt-1">Only person with access to legacy systems</div>
              </div>
              <button className="text-sm bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700">
                Document Knowledge
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Shadow Leadership Detection */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Shadow Leadership Detection</h2>
        <p className="text-gray-600 mb-4">Informal leaders who influence beyond their role</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900">Mike Johnson</div>
            <div className="text-sm text-gray-600 mt-1">Senior Developer</div>
            <div className="text-xs text-blue-600 mt-2">High influence in Engineering decisions</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900">Lisa Chen</div>
            <div className="text-sm text-gray-600 mt-1">Product Manager</div>
            <div className="text-xs text-blue-600 mt-2">Drives cross-team collaboration</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900">David Kim</div>
            <div className="text-sm text-gray-600 mt-1">Design Lead</div>
            <div className="text-xs text-blue-600 mt-2">Key influencer in design decisions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrgGraph;

