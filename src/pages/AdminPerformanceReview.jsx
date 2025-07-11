import React, { useState } from "react";

const AdminPerformanceReview = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const [reviews, setReviews] = useState([
    {
      id: 1,
      employee: "John Doe",
      department: "Design",
      communication: 4,
      problemSolving: 5,
      teamwork: 4,
      technical: 5,
      comments: "Excellent across all metrics.",
      date: "2025-06-01",
    },
  ]);

  const [newReview, setNewReview] = useState({
    employee: "",
    department: "",
    communication: "",
    problemSolving: "",
    teamwork: "",
    technical: "",
    comments: "",
  });

  const handleAddReview = () => {
    const average =
      (parseFloat(newReview.communication) +
        parseFloat(newReview.problemSolving) +
        parseFloat(newReview.teamwork) +
        parseFloat(newReview.technical)) /
      4;

    const newItem = {
      id: Date.now(),
      ...newReview,
      overall: average.toFixed(1),
      date: new Date().toISOString().slice(0, 10),
    };

    setReviews([newItem, ...reviews]);
    setNewReview({
      employee: "",
      department: "",
      communication: "",
      problemSolving: "",
      teamwork: "",
      technical: "",
      comments: "",
    });
    setShowModal(false);
  };

  const filteredReviews = reviews.filter((r) =>
    r.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Performance Reviews</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          + Add Review
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by employee name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mb-4 px-4 py-2 border border-gray-300 rounded"
      />

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4">Employee</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Comm</th>
              <th className="py-3 px-4">Problem Solving</th>
              <th className="py-3 px-4">Teamwork</th>
              <th className="py-3 px-4">Tech Skills</th>
              <th className="py-3 px-4">Overall</th>
              <th className="py-3 px-4">Comments</th>
              <th className="py-3 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredReviews.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="py-3 px-4">{r.employee}</td>
                <td className="py-3 px-4">{r.department}</td>
                <td className="py-3 px-4">{r.communication}</td>
                <td className="py-3 px-4">{r.problemSolving}</td>
                <td className="py-3 px-4">{r.teamwork}</td>
                <td className="py-3 px-4">{r.technical}</td>
                <td className="py-3 px-4 font-semibold">{r.overall}</td>
                <td className="py-3 px-4">{r.comments}</td>
                <td className="py-3 px-4">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl">
            <h3 className="text-xl font-bold mb-4">Add Performance Review</h3>

            <input
              type="text"
              placeholder="Employee Name"
              value={newReview.employee}
              onChange={(e) =>
                setNewReview({ ...newReview, employee: e.target.value })
              }
              className="w-full mb-3 px-4 py-2 border rounded"
            />

            <input
              type="text"
              placeholder="Department"
              value={newReview.department}
              onChange={(e) =>
                setNewReview({ ...newReview, department: e.target.value })
              }
              className="w-full mb-3 px-4 py-2 border rounded"
            />

            <div className="grid grid-cols-2 gap-4 mb-3">
              <input
                type="number"
                placeholder="Communication"
                min={1}
                max={5}
                value={newReview.communication}
                onChange={(e) =>
                  setNewReview({ ...newReview, communication: e.target.value })
                }
                className="border px-3 py-2 rounded"
              />

              <input
                type="number"
                placeholder="Problem Solving"
                min={1}
                max={5}
                value={newReview.problemSolving}
                onChange={(e) =>
                  setNewReview({ ...newReview, problemSolving: e.target.value })
                }
                className="border px-3 py-2 rounded"
              />

              <input
                type="number"
                placeholder="Teamwork"
                min={1}
                max={5}
                value={newReview.teamwork}
                onChange={(e) =>
                  setNewReview({ ...newReview, teamwork: e.target.value })
                }
                className="border px-3 py-2 rounded"
              />

              <input
                type="number"
                placeholder="Technical Skills"
                min={1}
                max={5}
                value={newReview.technical}
                onChange={(e) =>
                  setNewReview({ ...newReview, technical: e.target.value })
                }
                className="border px-3 py-2 rounded"
              />
            </div>

            <textarea
              placeholder="Comments"
              value={newReview.comments}
              onChange={(e) =>
                setNewReview({ ...newReview, comments: e.target.value })
              }
              className="w-full border mb-4 px-4 py-2 rounded"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddReview}
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

export default AdminPerformanceReview;
