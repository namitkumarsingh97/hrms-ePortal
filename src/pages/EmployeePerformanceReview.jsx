import React from "react";

const reviews = [
  {
    cycle: "Q2 2025",
    rating: 4.5,
    reviewer: "HR Manager",
    feedback: "Excellent collaboration and proactive problem solving.",
    nextAppraisal: "2025-09-15",
    skills: [
      { name: "Teamwork", score: 90 },
      { name: "Punctuality", score: 95 },
      { name: "Task Delivery", score: 88 },
      { name: "Communication", score: 92 },
    ],
  },
  {
    cycle: "Q1 2025",
    rating: 4.2,
    reviewer: "Team Lead",
    feedback: "Consistent performance with improved time management.",
    nextAppraisal: "2025-06-10",
    skills: [
      { name: "Teamwork", score: 85 },
      { name: "Punctuality", score: 90 },
      { name: "Task Delivery", score: 82 },
      { name: "Communication", score: 87 },
    ],
  },
];

const getRatingColor = (rating) => {
  if (rating >= 4.5) return "text-green-600";
  if (rating >= 3.5) return "text-yellow-600";
  return "text-red-600";
};

export default function EmployeePerformanceReview() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#f7941e]">
          Performance Reviews
        </h1>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-xl shadow-sm space-y-3"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{review.cycle}</h2>
              <span
                className={`text-md font-bold ${getRatingColor(
                  review.rating
                )}`}
              >
                ⭐ {review.rating}/5
              </span>
            </div>

            <p className="text-sm text-gray-600">
              <strong>Reviewer:</strong> {review.reviewer}
            </p>

            <p className="text-sm text-gray-600">
              <strong>Feedback:</strong> {review.feedback}
            </p>

            <p className="text-sm text-gray-600">
              <strong>Next Appraisal:</strong> {review.nextAppraisal}
            </p>

            <div className="mt-3">
              <h3 className="font-semibold mb-2 text-sm text-gray-800">
                Skill Ratings:
              </h3>
              {review.skills.map((skill, idx) => (
                <div key={idx} className="mb-2">
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>{skill.name}</span>
                    <span>{skill.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#f7941e] h-2.5 rounded-full"
                      style={{ width: `${skill.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
