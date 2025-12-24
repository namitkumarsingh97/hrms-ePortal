import React from "react";

const AdminAutomationStudio = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Automation Studio</h1>
        <p className="text-gray-600 mt-2">No-code HR workflows - Build without engineers</p>
      </div>

      {/* Workflow Builder */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Workflow Builder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Active Workflows</div>
            <div className="space-y-2">
              <div className="border rounded p-3">
                <div className="font-medium text-sm">Leave Request Approval</div>
                <div className="text-xs text-gray-500 mt-1">Trigger: Leave request submitted → Notify manager → Auto-approve if < 3 days</div>
              </div>
              <div className="border rounded p-3">
                <div className="font-medium text-sm">Onboarding Checklist</div>
                <div className="text-xs text-gray-500 mt-1">Trigger: New hire → Send welcome email → Assign tasks → Schedule orientation</div>
              </div>
              <div className="border rounded p-3">
                <div className="font-medium text-sm">Performance Review Reminder</div>
                <div className="text-xs text-gray-500 mt-1">Trigger: Quarterly → Notify managers → Send review forms → Remind if overdue</div>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Create New Workflow
            </button>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Workflow Templates</div>
            <div className="space-y-2">
              <button className="w-full text-left border rounded p-3 hover:bg-gray-50">
                <div className="font-medium text-sm">Employee Onboarding</div>
                <div className="text-xs text-gray-500 mt-1">5 steps • 3 approvals</div>
              </button>
              <button className="w-full text-left border rounded p-3 hover:bg-gray-50">
                <div className="font-medium text-sm">Offboarding</div>
                <div className="text-xs text-gray-500 mt-1">8 steps • 2 approvals</div>
              </button>
              <button className="w-full text-left border rounded p-3 hover:bg-gray-50">
                <div className="font-medium text-sm">Expense Approval</div>
                <div className="text-xs text-gray-500 mt-1">3 steps • Auto-approve < $500</div>
              </button>
              <button className="w-full text-left border rounded p-3 hover:bg-gray-50">
                <div className="font-medium text-sm">Asset Allocation</div>
                <div className="text-xs text-gray-500 mt-1">4 steps • 1 approval</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Engine */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Policy Engine</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Leave Policy</div>
            <div className="text-xs text-gray-600 space-y-1">
              <div>• Max 15 days consecutive</div>
              <div>• 7 days advance notice</div>
              <div>• Manager approval required</div>
            </div>
            <button className="mt-3 text-xs bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700">
              Edit Policy
            </button>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Expense Policy</div>
            <div className="text-xs text-gray-600 space-y-1">
              <div>• Auto-approve < $500</div>
              <div>• Receipt required > $100</div>
              <div>• Manager approval > $1000</div>
            </div>
            <button className="mt-3 text-xs bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700">
              Edit Policy
            </button>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Attendance Policy</div>
            <div className="text-xs text-gray-600 space-y-1">
              <div>• Flexible hours: 9 AM - 6 PM</div>
              <div>• WFH: 2 days/week max</div>
              <div>• Late: 3 strikes = warning</div>
            </div>
            <button className="mt-3 text-xs bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700">
              Edit Policy
            </button>
          </div>
        </div>
      </div>

      {/* Approval Chain Optimizer */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Approval Chain Optimizer</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Current Approval Chain: Leave Request</div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Employee</span>
              <span>→</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Manager</span>
              <span>→</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">HR</span>
              <span className="text-gray-500 ml-4">Average time: 2.5 days</span>
            </div>
            <div className="mt-3 text-sm text-blue-600">💡 Optimization: Auto-approve leaves < 3 days → Save 1.2 days average</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Current Approval Chain: Expense > $1000</div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Employee</span>
              <span>→</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Manager</span>
              <span>→</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Finance</span>
              <span>→</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">CFO</span>
              <span className="text-gray-500 ml-4">Average time: 5 days</span>
            </div>
            <div className="mt-3 text-sm text-blue-600">💡 Optimization: Parallel Finance & CFO approval → Save 2 days</div>
          </div>
        </div>
      </div>

      {/* Smart Alerts */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Smart Alerts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Alert Rules</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span>Leave balance < 5 days</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Performance review overdue</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Expense > $2000 pending > 7 days</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-2">Recent Alerts</div>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• 3 employees have < 5 days leave balance</div>
              <div>• 2 performance reviews overdue by 5+ days</div>
              <div>• 1 expense request pending for 8 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAutomationStudio;

