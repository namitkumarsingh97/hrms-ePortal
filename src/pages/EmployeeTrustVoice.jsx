import React, { useState } from "react";

const EmployeeTrustVoice = () => {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Trust & Voice</h1>
        <p className="text-gray-600 mt-2">Speak safely - Your feedback matters</p>
      </div>

      {/* Anonymous Feedback */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Anonymous Feedback</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Share your feedback anonymously
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Your feedback is completely anonymous and confidential..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              rows="6"
            />
          </div>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Submit Anonymously
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="text-sm text-blue-900">
              🔒 Your identity is protected. This feedback will be reviewed by HR leadership only.
            </div>
          </div>
        </div>
      </div>

      {/* Policy Voting */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Policy Voting</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-semibold text-gray-900">Remote Work Policy Update</div>
                <div className="text-sm text-gray-600 mt-1">Proposal: Increase WFH days from 2 to 3 per week</div>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Active</span>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>In Favor</span>
                  <span className="font-semibold">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>Against</span>
                  <span className="font-semibold">32%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: "32%" }}></div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm">
                Vote Yes
              </button>
              <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm">
                Vote No
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-3">142 employees have voted • Voting closes in 5 days</div>
          </div>
        </div>
      </div>

      {/* Conflict Resolution Bot */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Conflict Resolution</h2>
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="text-sm text-gray-700 mb-4">
            Having a workplace conflict? Our AI assistant can help guide you through resolution options.
          </div>
          <div className="space-y-2">
            <button className="w-full text-left border rounded-lg p-3 hover:bg-white transition-colors">
              <div className="font-medium text-gray-900">Mediation Request</div>
              <div className="text-xs text-gray-600 mt-1">Request confidential mediation with HR</div>
            </button>
            <button className="w-full text-left border rounded-lg p-3 hover:bg-white transition-colors">
              <div className="font-medium text-gray-900">File a Complaint</div>
              <div className="text-xs text-gray-600 mt-1">Formal complaint process for serious issues</div>
            </button>
            <button className="w-full text-left border rounded-lg p-3 hover:bg-white transition-colors">
              <div className="font-medium text-gray-900">Self-Help Resources</div>
              <div className="text-xs text-gray-600 mt-1">Articles and guides on conflict resolution</div>
            </button>
          </div>
        </div>
      </div>

      {/* Ethics & Compliance Reporting */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Ethics & Compliance Reporting</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <div className="text-sm text-red-900 font-semibold mb-2">🚨 Important</div>
          <div className="text-sm text-red-700">
            Use this channel to report serious ethics violations, fraud, harassment, safety concerns, or compliance issues.
            All reports are confidential and taken seriously.
          </div>
        </div>
        <div className="space-y-3">
          <button className="w-full text-left border border-red-200 rounded-lg p-4 hover:bg-red-50 transition-colors">
            <div className="font-semibold text-red-900">Report Ethics Violation</div>
            <div className="text-sm text-red-700 mt-1">Confidential reporting for serious ethical concerns</div>
          </button>
          <button className="w-full text-left border border-red-200 rounded-lg p-4 hover:bg-red-50 transition-colors">
            <div className="font-semibold text-red-900">Report Harassment</div>
            <div className="text-sm text-red-700 mt-1">Safe, confidential channel for harassment reports</div>
          </button>
          <button className="w-full text-left border border-red-200 rounded-lg p-4 hover:bg-red-50 transition-colors">
            <div className="font-semibold text-red-900">Report Safety Concern</div>
            <div className="text-sm text-red-700 mt-1">Workplace safety issues or hazards</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTrustVoice;

