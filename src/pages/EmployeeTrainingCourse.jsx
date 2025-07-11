import React, { useState } from "react";

const trainings = [
  {
    title: "React.js Mastery",
    description: "Deep dive into modern React development.",
    startDate: "2025-07-01",
    endDate: "2025-08-01",
    status: "In Progress",
    progress: 60,
    certificate: null,
  },
  {
    title: "Cybersecurity Basics",
    description: "Understand data protection and secure practices.",
    startDate: "2025-05-01",
    endDate: "2025-06-01",
    status: "Completed",
    progress: 100,
    certificate: "cybersecurity.pdf",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "In Progress":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function EmployeeTrainingCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ title: "", description: "", startDate: "", endDate: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enrolled in:", formData);
    handleCloseModal();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#f7941e]">Training & Courses</h1>
        <button
          onClick={handleOpenModal}
          className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Enroll in New Training
        </button>
      </div>

      <div className="space-y-6">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{training.title}</h2>
              <span
                className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusColor(
                  training.status
                )}`}
              >
                {training.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              {training.description}
            </p>

            <p className="text-sm text-gray-500">
              <strong>Start:</strong> {training.startDate} |{" "}
              <strong>End:</strong> {training.endDate}
            </p>

            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-[#f7941e] h-2.5 rounded-full"
                  style={{ width: `${training.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">
                {training.progress}% completed
              </p>
            </div>

            {training.certificate && (
              <div className="mt-3">
                <a
                  href={`/certificates/${training.certificate}`}
                  download
                  className="text-blue-600 hover:underline text-sm"
                >
                  Download Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-lg space-y-4">
            <h2 className="text-xl font-bold text-[#f7941e] mb-2">Enroll in Training</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Course Title</label>
                <input
                  type="text"
                  required
                  className="w-full border px-3 py-2 rounded"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Description</label>
                <textarea
                  required
                  rows={3}
                  className="w-full border px-3 py-2 rounded"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium mb-1">Start Date</label>
                  <input
                    type="date"
                    required
                    className="w-full border px-3 py-2 rounded"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                  />
                </div>

                <div className="flex-1">
                  <label className="block font-medium mb-1">End Date</label>
                  <input
                    type="date"
                    required
                    className="w-full border px-3 py-2 rounded"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Enroll
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
