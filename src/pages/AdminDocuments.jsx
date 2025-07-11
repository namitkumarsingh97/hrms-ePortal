import React, { useState } from "react";

const AdminDocuments = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      employeeId: "EMP0921",
      name: "Aadhaar Card",
      type: "ID Proof",
      uploadedAt: "2025-07-01",
    },
    {
      id: 2,
      employeeId: "EMP0802",
      name: "PAN Card",
      type: "ID Proof",
      uploadedAt: "2025-07-02",
    },
  ]);

  const [filter, setFilter] = useState("");

  const handleDelete = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const filteredDocs = documents.filter(
    (doc) =>
      doc.employeeId.toLowerCase().includes(filter.toLowerCase()) ||
      doc.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Documents</h1>

      <input
        type="text"
        placeholder="Search by Employee ID or Document Type..."
        className="mb-4 w-full px-3 py-2 border rounded"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Employee ID</th>
              <th className="p-3">Document Name</th>
              <th className="p-3">Type</th>
              <th className="p-3">Uploaded On</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocs.map((doc) => (
              <tr key={doc.id} className="border-b">
                <td className="p-3">{doc.employeeId}</td>
                <td className="p-3">{doc.name}</td>
                <td className="p-3">{doc.type}</td>
                <td className="p-3">{doc.uploadedAt}</td>
                <td className="p-3 space-x-2">
                  <button className="text-sm text-blue-600">Download</button>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="text-sm text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredDocs.length === 0 && (
              <tr>
                <td className="p-3 text-gray-500 italic" colSpan="5">
                  No documents found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDocuments;
