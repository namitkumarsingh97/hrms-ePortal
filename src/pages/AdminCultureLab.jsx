import React from "react";

const AdminCultureLab = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Culture & Trust Lab</h1>
        <p className="text-gray-600 mt-2">Culture you can actually measure and improve</p>
      </div>

      {/* Psychological Safety Index */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Psychological Safety Index</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-2">Overall Score</div>
            <div className="text-3xl font-bold text-green-600">7.8/10</div>
            <div className="text-xs text-gray-500 mt-2">Good</div>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-2">Speak Up</div>
            <div className="text-2xl font-bold text-blue-600">8.2</div>
            <div className="text-xs text-gray-500 mt-2">High</div>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-2">Mistake Handling</div>
            <div className="text-2xl font-bold text-yellow-600">7.1</div>
            <div className="text-xs text-gray-500 mt-2">Medium</div>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-2">Inclusion</div>
            <div className="text-2xl font-bold text-purple-600">7.9</div>
            <div className="text-xs text-gray-500 mt-2">Good</div>
          </div>
        </div>
      </div>

      {/* Anonymous Truth Channel */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Anonymous Truth Channel</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm text-gray-600">Posted 2 days ago</div>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Under Review</span>
            </div>
            <div className="text-gray-900 mb-2">
              "The new performance review process is creating unnecessary stress. Can we revisit the frequency?"
            </div>
            <div className="text-xs text-gray-500">Category: Process Feedback • 12 upvotes</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm text-gray-600">Posted 5 days ago</div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Acknowledged</span>
            </div>
            <div className="text-gray-900 mb-2">
              "The Engineering team needs better work-life balance. Weekend deployments are becoming too frequent."
            </div>
            <div className="text-xs text-gray-500">Category: Work-Life Balance • 18 upvotes</div>
          </div>
        </div>
      </div>

      {/* Trust Decay Alerts */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Trust Decay Alerts</h2>
        <div className="space-y-3">
          <div className="border border-red-200 bg-red-50 rounded-lg p-4">
            <div className="font-semibold text-red-900 mb-2">Sales Team - Trust Score Declining</div>
            <div className="text-sm text-red-700">Score dropped from 7.5 to 6.2 in last 30 days</div>
            <div className="text-xs text-red-600 mt-2">Possible causes: Communication gaps, unclear expectations</div>
            <button className="mt-3 text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
              Investigate & Fix
            </button>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <div className="font-semibold text-yellow-900 mb-2">Marketing Team - Trust Score Declining</div>
            <div className="text-sm text-yellow-700">Score dropped from 8.1 to 7.3 in last 30 days</div>
            <div className="text-xs text-yellow-600 mt-2">Possible causes: Resource constraints, workload</div>
            <button className="mt-3 text-sm bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700">
              Review Situation
            </button>
          </div>
        </div>
      </div>

      {/* Toxicity Early Detection */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Toxicity Early Detection</h2>
        <div className="space-y-3">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-900">Engineering Team</div>
                <div className="text-sm text-gray-600">Toxicity Score: 2.1/10 (Low)</div>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Healthy</span>
            </div>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-yellow-900">Sales Team</div>
                <div className="text-sm text-yellow-700">Toxicity Score: 4.8/10 (Moderate)</div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Monitor</span>
            </div>
            <div className="text-xs text-yellow-600 mt-2">Signals: Increased conflict reports, negative sentiment in communications</div>
          </div>
        </div>
      </div>

      {/* Policy Sentiment Analysis */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Policy Sentiment Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Remote Work Policy</div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <span className="text-sm font-semibold text-green-600">75% Positive</span>
            </div>
            <div className="text-xs text-gray-500">Based on 45 employee responses</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">PTO Policy</div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "55%" }}></div>
              </div>
              <span className="text-sm font-semibold text-yellow-600">55% Positive</span>
            </div>
            <div className="text-xs text-gray-500">Based on 38 employee responses</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCultureLab;

