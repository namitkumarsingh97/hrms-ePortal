import React, { useState } from "react";

const AdminJobOpenings = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const [openings, setOpenings] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Bangalore",
      status: "Open",
      date: "2025-07-10",
    },
    {
      id: 2,
      title: "HR Executive",
      department: "HR",
      location: "Delhi",
      status: "Closed",
      date: "2025-06-20",
    },
  ]);

  const [jobForm, setJobForm] = useState({
    title: "",
    department: "",
    location: "",
    status: "Open",
  });

  const openAddModal = () => {
    setIsEditing(false);
    setJobForm({
      title: "",
      department: "",
      location: "",
      status: "Open",
    });
    setModalOpen(true);
  };

  const openEditModal = (job) => {
    setIsEditing(true);
    setSelectedJob(job);
    setJobForm({ ...job });
    setModalOpen(true);
  };

  const handleSave = () => {
    if (isEditing) {
      setOpenings((prev) =>
        prev.map((item) => (item.id === selectedJob.id ? jobForm : item))
      );
    } else {
      const newJob = {
        ...jobForm,
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
      };
      setOpenings([newJob, ...openings]);
    }

    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setOpenings(openings.filter((job) => job.id !== id));
    }
  };

  const filteredJobs = openings.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Internal Job Postings</h2>
        <button
          className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={openAddModal}
        >
          + Add New Job
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by job title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full max-w-md px-4 py-2 border rounded"
      />

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Posted On</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id} className="border-t">
                <td className="py-3 px-4">{job.title}</td>
                <td className="py-3 px-4">{job.department}</td>
                <td className="py-3 px-4">{job.location}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      job.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="py-3 px-4">{job.date}</td>
                <td className="py-3 px-4 space-x-2">
                  <button
                    onClick={() => openEditModal(job)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Job" : "Add New Job"}
            </h3>

            <input
              type="text"
              placeholder="Job Title"
              value={jobForm.title}
              onChange={(e) =>
                setJobForm({ ...jobForm, title: e.target.value })
              }
              className="w-full mb-3 px-4 py-2 border rounded"
            />

            <input
              type="text"
              placeholder="Department"
              value={jobForm.department}
              onChange={(e) =>
                setJobForm({ ...jobForm, department: e.target.value })
              }
              className="w-full mb-3 px-4 py-2 border rounded"
            />

            <input
              type="text"
              placeholder="Location"
              value={jobForm.location}
              onChange={(e) =>
                setJobForm({ ...jobForm, location: e.target.value })
              }
              className="w-full mb-3 px-4 py-2 border rounded"
            />

            <select
              value={jobForm.status}
              onChange={(e) =>
                setJobForm({ ...jobForm, status: e.target.value })
              }
              className="w-full mb-4 px-4 py-2 border rounded"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                {isEditing ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminJobOpenings;
