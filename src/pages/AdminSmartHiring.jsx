import React from "react";

const AdminSmartHiring = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Smart Hiring & Talent Marketplace</h1>
        <p className="text-gray-600 mt-2">AI-powered hiring + internal mobility combined</p>
      </div>

      {/* Role Success Predictor */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Role Success Predictor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Senior Developer Role</div>
            <div className="text-sm text-gray-600 mb-3">Based on past 15 hires</div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Success Indicators:</span>
                <span className="text-sm font-semibold text-green-600">85% accuracy</span>
              </div>
              <div className="text-xs text-gray-500">
                • 5+ years experience<br/>
                • Strong communication skills<br/>
                • Previous startup experience
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Product Manager Role</div>
            <div className="text-sm text-gray-600 mb-3">Based on past 8 hires</div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Success Indicators:</span>
                <span className="text-sm font-semibold text-green-600">78% accuracy</span>
              </div>
              <div className="text-xs text-gray-500">
                • Technical background<br/>
                • Customer-facing experience<br/>
                • Data-driven mindset
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bias Detector */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Bias Detector</h2>
        <div className="space-y-4">
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <div className="font-semibold text-yellow-900 mb-2">JD Bias Alert</div>
            <div className="text-sm text-yellow-700">Job Description for "Senior Developer" contains potentially biased language</div>
            <div className="mt-2 text-xs text-yellow-600">
              Detected: "Aggressive" (masculine-coded), "Rockstar" (exclusionary)
            </div>
            <button className="mt-3 text-sm bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700">
              Review & Fix JD
            </button>
          </div>
          <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
            <div className="font-semibold text-blue-900 mb-2">Interviewer Bias Check</div>
            <div className="text-sm text-blue-700">Last 10 interviews show 70% male candidates advanced</div>
            <div className="mt-2 text-xs text-blue-600">
              Recommendation: Review interview questions and evaluation criteria
            </div>
            <button className="mt-3 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              View Interview Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Internal Talent Swap Engine */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Internal Talent Swap Engine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Open Positions</div>
            <div className="space-y-3">
              <div className="border rounded p-3">
                <div className="font-medium">Senior Backend Developer</div>
                <div className="text-sm text-gray-600 mt-1">Engineering • 3 matches found</div>
              </div>
              <div className="border rounded p-3">
                <div className="font-medium">Product Marketing Manager</div>
                <div className="text-sm text-gray-600 mt-1">Marketing • 2 matches found</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Recommended Internal Candidates</div>
            <div className="space-y-3">
              <div className="border rounded p-3 bg-green-50">
                <div className="font-medium">Alex Kumar → Senior Backend Developer</div>
                <div className="text-xs text-gray-600 mt-1">85% skill match • Currently: Mid-level Developer</div>
                <button className="mt-2 text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">
                  Recommend
                </button>
              </div>
              <div className="border rounded p-3 bg-green-50">
                <div className="font-medium">Priya Singh → Product Marketing Manager</div>
                <div className="text-xs text-gray-600 mt-1">78% skill match • Currently: Marketing Specialist</div>
                <button className="mt-2 text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">
                  Recommend
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Interview Summarizer */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">AI Interview Summarizer</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-semibold text-gray-900">Candidate: John Smith</div>
                <div className="text-sm text-gray-600">Position: Senior Developer • Interview Date: Dec 15, 2024</div>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Recommended</span>
            </div>
            <div className="text-sm text-gray-700 space-y-2">
              <div><strong>Strengths:</strong> Strong technical skills, good problem-solving approach, 8 years relevant experience</div>
              <div><strong>Concerns:</strong> Limited experience with cloud platforms, communication could be improved</div>
              <div><strong>Recommendation:</strong> Strong hire - Consider for role with mentoring opportunity</div>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Acceptance Probability */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Offer Acceptance Probability</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900">John Smith</div>
            <div className="text-2xl font-bold text-green-600 mt-2">85%</div>
            <div className="text-xs text-gray-500 mt-1">High acceptance probability</div>
            <div className="text-xs text-gray-600 mt-2">Current offer: Competitive</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900">Sarah Johnson</div>
            <div className="text-2xl font-bold text-yellow-600 mt-2">62%</div>
            <div className="text-xs text-gray-500 mt-1">Medium acceptance probability</div>
            <div className="text-xs text-gray-600 mt-2">Consider improving offer by 10%</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900">Mike Davis</div>
            <div className="text-2xl font-bold text-red-600 mt-2">45%</div>
            <div className="text-xs text-gray-500 mt-1">Low acceptance probability</div>
            <div className="text-xs text-gray-600 mt-2">Competing offers detected</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSmartHiring;

