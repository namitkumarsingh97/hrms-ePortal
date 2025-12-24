import React from "react";

const EmployeeCareerGPS = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Career GPS</h1>
        <p className="text-gray-600 mt-2">Your personalized career planning system</p>
      </div>

      {/* Skill Gap vs Dream Role */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Skill Gap Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Your Current Role</div>
            <div className="text-sm text-gray-700">Senior Developer</div>
            <div className="mt-4 space-y-2">
              <div className="text-xs text-gray-600">Your Skills:</div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">JavaScript</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Python</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">AWS</span>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-3">Target Role: Tech Lead</div>
            <div className="text-sm text-gray-700">Required Skills:</div>
            <div className="mt-4 space-y-2">
              <div className="text-xs text-gray-600">Skills to Develop:</div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">JavaScript ✓</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">React ✓</span>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Leadership</span>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">System Design</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">AWS</span>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Mentoring</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-xs text-gray-600 mb-1">Match Score: 60%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Job Matches */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Internal Job Matches</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-semibold text-gray-900">Tech Lead - Engineering</div>
                <div className="text-sm text-gray-600">Engineering • 75% match</div>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Great Match</span>
            </div>
            <div className="text-sm text-gray-700 mb-3">
              Looking for experienced developers with leadership potential. You match 4/5 required skills.
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                Apply
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 text-sm">
                View Details
              </button>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-semibold text-gray-900">Senior Product Engineer</div>
                <div className="text-sm text-gray-600">Product • 68% match</div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Good Match</span>
            </div>
            <div className="text-sm text-gray-700 mb-3">
              Bridge between engineering and product. Strong technical skills required.
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                Apply
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Learning Path */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">AI Learning Path to Tech Lead</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                1
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Month 1-2: Leadership Fundamentals</div>
                <div className="text-sm text-gray-600 mt-1">Complete "Leading Engineering Teams" course</div>
                <div className="text-xs text-gray-500 mt-2">• Estimated time: 20 hours • Status: Not started</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                2
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Month 3-4: System Design</div>
                <div className="text-sm text-gray-600 mt-1">Take "Advanced System Design" certification</div>
                <div className="text-xs text-gray-500 mt-2">• Estimated time: 40 hours • Status: Locked</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                3
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Month 5-6: Mentoring Practice</div>
                <div className="text-sm text-gray-600 mt-1">Mentor 2 junior developers (internal program)</div>
                <div className="text-xs text-gray-500 mt-2">• Estimated time: Ongoing • Status: Locked</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Salary Growth Forecast */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Salary Growth Forecast</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-2">Current</div>
            <div className="text-2xl font-bold text-gray-900">$120K</div>
            <div className="text-xs text-gray-500 mt-1">Senior Developer</div>
          </div>
          <div className="border rounded-lg p-4 text-center bg-blue-50">
            <div className="text-sm text-gray-600 mb-2">Target Role (6 months)</div>
            <div className="text-2xl font-bold text-blue-600">$145K</div>
            <div className="text-xs text-gray-500 mt-1">Tech Lead</div>
            <div className="text-xs text-green-600 mt-2">+21% increase</div>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-2">Market Average</div>
            <div className="text-2xl font-bold text-purple-600">$150K</div>
            <div className="text-xs text-gray-500 mt-1">Tech Lead (Industry)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCareerGPS;

