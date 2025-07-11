import React, { useState } from "react";

const AdminTrainingCourses = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [trainings, setTrainings] = useState([
    {
      id: 1,
      title: "Advanced React Workshop",
      department: "Engineering",
      duration: "3 Days",
      trainer: "John Doe",
    },
    {
      id: 2,
      title: "Sales Excellence Bootcamp",
      department: "Sales",
      duration: "2 Days",
      trainer: "Priya Kapoor",
    },
  ]);

  const [newTraining, setNewTraining] = useState({
    title: "",
    department: "",
    duration: "",
    trainer: "",
  });

  const handleAddTraining = () => {
    const newItem = {
      id: Date.now(),
      ...newTraining,
    };
    setTrainings([newItem, ...trainings]);
    setNewTraining({ title: "", department: "", duration: "", trainer: "" });
    setShowModal(false);
  };

  const filteredTrainings = trainings.filter((training) =>
    training.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Training & Courses</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#f7941e] text-white px-5 py-2 rounded hover:bg-orange-600"
        >
          + Add Training
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search training by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 px-4 py-2 rounded"
        />
      </div>

      {/* Training List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTrainings.map((training) => (
          <div
            key={training.id}
            className="bg-white p-5 rounded-lg shadow border-l-4 border-[#f7941e]"
          >
            <h3 className="text-xl font-semibold mb-1">{training.title}</h3>
            <p className="text-gray-700">Department: {training.department}</p>
            <p className="text-gray-700">Duration: {training.duration}</p>
            <p className="text-gray-700">Trainer: {training.trainer}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">Add New Training</h3>

            <input
              type="text"
              placeholder="Training Title"
              value={newTraining.title}
              onChange={(e) =>
                setNewTraining({ ...newTraining, title: e.target.value })
              }
              className="w-full border border-gray-300 mb-3 px-4 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Department"
              value={newTraining.department}
              onChange={(e) =>
                setNewTraining({ ...newTraining, department: e.target.value })
              }
              className="w-full border border-gray-300 mb-3 px-4 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Duration (e.g., 3 Days)"
              value={newTraining.duration}
              onChange={(e) =>
                setNewTraining({ ...newTraining, duration: e.target.value })
              }
              className="w-full border border-gray-300 mb-3 px-4 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Trainer Name"
              value={newTraining.trainer}
              onChange={(e) =>
                setNewTraining({ ...newTraining, trainer: e.target.value })
              }
              className="w-full border border-gray-300 mb-4 px-4 py-2 rounded"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTraining}
                className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTrainingCourses;
