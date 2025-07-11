import React, { useState } from "react";

const jobOpenings = [
  {
    id: 1,
    title: "Graphic Designer",
    department: "Creative",
    location: "Delhi",
    description:
      "Seeking a designer with Adobe & Canva skills. 1+ years experience preferred.",
    postedOn: "2025-07-08",
  },
  {
    id: 2,
    title: "Client Relationship Manager",
    department: "Sales",
    location: "Mumbai",
    description:
      "CRM with experience in B2B client handling and presentations.",
    postedOn: "2025-07-06",
  },
];

export default function EmployeeJobOpenings() {
  const [referrals, setReferrals] = useState({});
  const [showForm, setShowForm] = useState(null);

  const handleReferralSubmit = (jobId, e) => {
    e.preventDefault();
    const formData = referrals[jobId];
    alert(
      `Referral submitted:\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    setReferrals({ ...referrals, [jobId]: { name: "", email: "" } });
    setShowForm(null);
  };

  const handleChange = (jobId, field, value) => {
    setReferrals({
      ...referrals,
      [jobId]: {
        ...referrals[jobId],
        [field]: value,
      },
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-[#f7941e]">
        Internal Job Postings
      </h1>

      {jobOpenings.map((job) => (
        <div
          key={job.id}
          className="border border-gray-200 p-4 rounded-xl shadow-sm space-y-2"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-500">
                {job.department} | {job.location}
              </p>
              <p className="text-sm text-gray-600">{job.description}</p>
              <p className="text-xs text-gray-400 mt-1">
                Posted on: {job.postedOn}
              </p>
            </div>

            <button
              onClick={() => setShowForm(job.id)}
              className="bg-[#f7941e] text-white px-4 py-1 rounded hover:bg-orange-600"
            >
              Refer Someone
            </button>
          </div>

          {showForm === job.id && (
            <form
              className="mt-4 bg-gray-50 p-4 rounded space-y-3"
              onSubmit={(e) => handleReferralSubmit(job.id, e)}
            >
              <input
                type="text"
                required
                placeholder="Candidate Name"
                className="w-full border px-3 py-2 rounded"
                value={referrals[job.id]?.name || ""}
                onChange={(e) =>
                  handleChange(job.id, "name", e.target.value)
                }
              />
              <input
                type="email"
                required
                placeholder="Candidate Email"
                className="w-full border px-3 py-2 rounded"
                value={referrals[job.id]?.email || ""}
                onChange={(e) =>
                  handleChange(job.id, "email", e.target.value)
                }
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Submit Referral
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(null)}
                  className="text-red-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      ))}
    </div>
  );
}
