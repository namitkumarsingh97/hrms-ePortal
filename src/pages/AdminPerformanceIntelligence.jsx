import React from "react";

const AdminPerformanceIntelligence = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Performance Intelligence</h1>
        <p className="text-gray-600 mt-2">Continuous, signal-based performance - Beyond annual reviews</p>
      </div>

      {/* Output vs Effort Ratio */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Output vs Effort Ratio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900">High Output, Low Effort</div>
            <div className="text-2xl font-bold text-green-600 mt-2">12 employees</div>
            <div className="text-xs text-gray-500 mt-1">Top performers - Consider for promotion</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900">High Output, High Effort</div>
            <div className="text-2xl font-bold text-yellow-600 mt-2">18 employees</div>
            <div className="text-xs text-gray-500 mt-1">Hard workers - May need process improvements</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900">Low Output, High Effort</div>
            <div className="text-2xl font-bold text-red-600 mt-2">5 employees</div>
            <div className="text-xs text-gray-500 mt-1">Needs support or role change</div>
          </div>
        </div>
      </div>

      {/* Peer Impact Score */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Peer Impact Score</h2>
        <div className="space-y-3">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-900">Sarah Chen</div>
                <div className="text-sm text-gray-600">Impact Score: 9.2/10</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Positively influences</div>
                <div className="text-sm font-semibold text-green-600">15 teammates</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-900">Mike Johnson</div>
                <div className="text-sm text-gray-600">Impact Score: 8.7/10</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Positively influences</div>
                <div className="text-sm font-semibold text-green-600">12 teammates</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invisible Work Tracker */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Invisible Work Tracker</h2>
        <p className="text-gray-600 mb-4">Work that's critical but not easily measured</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Mentoring & Coaching</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Alex Kumar</span>
                <span className="font-semibold text-blue-600">8 hours/week</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Priya Singh</span>
                <span className="font-semibold text-blue-600">6 hours/week</span>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Documentation & Knowledge Sharing</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>David Kim</span>
                <span className="font-semibold text-purple-600">5 hours/week</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Lisa Wang</span>
                <span className="font-semibold text-purple-600">4 hours/week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manager Quality Index */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Manager Quality Index</h2>
        <div className="space-y-3">
          <div className="border border-green-200 bg-green-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-green-900">John Doe - Engineering</div>
                <div className="text-sm text-green-700">Quality Index: 8.9/10</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-green-600">Team satisfaction: 92%</div>
                <div className="text-xs text-green-600">Retention rate: 95%</div>
              </div>
            </div>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-yellow-900">Sarah Smith - Sales</div>
                <div className="text-sm text-yellow-700">Quality Index: 6.2/10</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-yellow-600">Team satisfaction: 65%</div>
                <div className="text-xs text-yellow-600">Needs coaching support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Auto-Drafts */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Review Auto-Drafts</h2>
        <p className="text-gray-600 mb-4">AI-generated performance reviews based on continuous signals</p>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-semibold text-gray-900">Alex Kumar - Senior Developer</div>
                <div className="text-sm text-gray-600">Auto-generated draft • 95% confidence</div>
              </div>
              <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Review & Edit
              </button>
            </div>
            <div className="text-sm text-gray-700 space-y-2">
              <div><strong>Strengths:</strong> Exceptional technical skills, strong peer collaboration, consistent high-quality deliverables...</div>
              <div><strong>Growth Areas:</strong> Leadership opportunities, public speaking skills...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPerformanceIntelligence;

