import React, { useState } from "react";

const AdminAnnouncements = () => {
  const [showModal, setShowModal] = useState(false);
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Holiday on Independence Day",
      content: "Our office will remain closed on 15th August for Independence Day celebrations.",
      category: "Holiday",
      date: "2025-08-01",
    },
    {
      id: 2,
      title: "Policy Update",
      content: "Employees are requested to update their KYC details by September 1st.",
      category: "Policy",
      date: "2025-07-10",
    },
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handlePost = () => {
    const newItem = {
      id: Date.now(),
      ...newAnnouncement,
      date: new Date().toISOString().slice(0, 10),
    };
    setAnnouncements([newItem, ...announcements]);
    setNewAnnouncement({ title: "", content: "", category: "" });
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Company Announcements</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#f7941e] text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          + New Announcement
        </button>
      </div>

      {/* List of Past Announcements */}
      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="bg-white border-l-4 border-[#f7941e] p-5 rounded shadow-sm"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <p className="text-gray-700 mb-2">{item.content}</p>
            <span className="inline-block px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-600">
              {item.category}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Create Announcement</h3>
            <input
              type="text"
              placeholder="Title"
              value={newAnnouncement.title}
              onChange={(e) =>
                setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
              }
              className="w-full mb-3 border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              placeholder="Content"
              value={newAnnouncement.content}
              onChange={(e) =>
                setNewAnnouncement({ ...newAnnouncement, content: e.target.value })
              }
              rows={4}
              className="w-full mb-3 border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Category (e.g., Holiday, Policy)"
              value={newAnnouncement.category}
              onChange={(e) =>
                setNewAnnouncement({ ...newAnnouncement, category: e.target.value })
              }
              className="w-full mb-4 border border-gray-300 rounded px-4 py-2"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handlePost}
                className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAnnouncements;
