import React, { useState } from "react";

const EmployeeExitProcess = () => {
  const [hasApplied, setHasApplied] = useState(false);
  const [wantsToResign, setWantsToResign] = useState(false);
  const [formData, setFormData] = useState({
    reason: "",
    noticePeriod: "30",
    preferredLastDay: "",
  });

  // Dummy data if already applied
  const resignationDate = "2025-07-01";
  const lastWorkingDay = "2025-07-31";
  const clearanceStatus = "In Progress";
  const fullFinalStatus = "Pending";

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasApplied(true);
    setWantsToResign(false);
    console.log("Resignation Submitted:", formData);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-[#f7941e]">Exit Process</h1>

      {hasApplied ? (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-gray-700">Resignation Details</h2>
              <p><strong>Resignation Date:</strong> {resignationDate}</p>
              <p><strong>Last Working Day:</strong> {lastWorkingDay}</p>
              <p><strong>Status:</strong> <span className="text-orange-600">Processing</span></p>
            </div>

            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-gray-700">Clearance Progress</h2>
              <p><strong>IT Clearance:</strong> Completed</p>
              <p><strong>HR Clearance:</strong> Pending</p>
              <p><strong>Accounts Clearance:</strong> Pending</p>
              <p><strong>Status:</strong> <span className="text-blue-600">{clearanceStatus}</span></p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-1">Full & Final Settlement</h2>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  fullFinalStatus === "Completed"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {fullFinalStatus}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Settlement will be processed within 45 days from last working day.
            </p>
          </div>
        </>
      ) : !wantsToResign ? (
        <div className="text-center py-12">
          <p className="text-gray-700 text-lg mb-4">
            You haven’t initiated your resignation yet.
          </p>
          <button
            onClick={() => setWantsToResign(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow"
          >
            Yes, I want to resign
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-xl border max-w-2xl mx-auto"
        >
          <h2 className="text-xl font-semibold mb-4">Resignation Form</h2>

          <div className="mb-4">
            <label className="block font-medium mb-1">Reason for Resignation</label>
            <textarea
              name="reason"
              rows="3"
              required
              value={formData.reason}
              onChange={handleFormChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Briefly explain your reason"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Notice Period (Days)</label>
            <input
              type="number"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleFormChange}
              className="w-full border rounded px-3 py-2"
              min="0"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1">Preferred Last Working Day</label>
            <input
              type="date"
              name="preferredLastDay"
              value={formData.preferredLastDay}
              onChange={handleFormChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#f7941e] hover:bg-orange-600 text-white px-6 py-2 rounded shadow"
          >
            Submit Resignation
          </button>
        </form>
      )}
    </div>
  );
};

export default EmployeeExitProcess;
