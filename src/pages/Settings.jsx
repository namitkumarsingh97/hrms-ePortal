import React from "react";

export default function Settings() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-2xl font-bold">Employee Information</h1>

      {/* Personal Info */}
      <section className="bg-white shadow rounded p-6 space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Personal Info</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Date of Birth
            </label>
            <input type="date" className="w-full border px-4 py-2 rounded" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select className="w-full border px-4 py-2 rounded">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </section>

      {/* Job Info */}
      <section className="bg-white shadow rounded p-6 space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Job Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Employee ID
            </label>
            <input
              type="text"
              placeholder="EMP123"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <input
              type="text"
              placeholder="HR / Engineering / Sales"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <input
              type="text"
              placeholder="UI Designer / Developer / Manager"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Date of Joining
            </label>
            <input type="date" className="w-full border px-4 py-2 rounded" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Create HRMS Password
            </label>
            <input
              type="password"
              placeholder="Set employee password"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>
      </section>

      {/* Address Info */}
      <section className="bg-white shadow rounded p-6 space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Address</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Street Address
            </label>
            <input
              type="text"
              placeholder="123 Example St"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              placeholder="Mumbai"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              type="text"
              placeholder="Maharashtra"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">ZIP Code</label>
            <input
              type="text"
              placeholder="400001"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div>
        <button className="bg-[#f7941e] text-white px-6 py-2 rounded hover:bg-orange-600 transition">
          Save Employee Info
        </button>
      </div>
    </div>
  );
}
