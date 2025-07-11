import React, { useState } from "react";

const EmployeeDocuments = () => {
  const [documents, setDocuments] = useState([
    {
      name: "PAN Card",
      uploadedOn: "2024-12-01",
      url: "#",
    },
    {
      name: "Resume",
      uploadedOn: "2024-11-20",
      url: "#",
    },
  ]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocuments([
        ...documents,
        {
          name: file.name,
          uploadedOn: new Date().toISOString().split("T")[0],
          url: "#",
        },
      ]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-[#f7941e]">My Documents</h1>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Upload Document
        </label>
        <input
          type="file"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Uploaded Documents</h2>
        {documents.length === 0 ? (
          <p className="text-gray-500 text-sm">No documents uploaded yet.</p>
        ) : (
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Document Name</th>
                <th className="px-4 py-2">Uploaded On</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{doc.name}</td>
                  <td className="px-4 py-2">{doc.uploadedOn}</td>
                  <td className="px-4 py-2 space-x-2">
                    <a
                      href={doc.url}
                      download
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Download
                    </a>
                    <button
                      onClick={() =>
                        setDocuments(documents.filter((_, i) => i !== index))
                      }
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EmployeeDocuments;
