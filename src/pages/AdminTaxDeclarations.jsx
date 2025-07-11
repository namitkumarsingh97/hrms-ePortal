import React, { useState } from "react";

const AdminTaxDeclarations = () => {
  const [year, setYear] = useState("2024-2025");

  const declarations = [
    {
      id: "EMP0001",
      name: "Namit Sharma",
      section: "80C",
      amount: "₹1,30,000",
      status: "Pending",
      file: "proof_80C.pdf",
    },
    {
      id: "EMP0002",
      name: "Riya Kapoor",
      section: "80D",
      amount: "₹20,000",
      status: "Approved",
      file: "mediclaim_80D.pdf",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tax Declarations & Proofs</h1>

      <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-wrap gap-4 items-center">
        <label className="font-medium">Financial Year:</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="2024-2025">2024-2025</option>
          <option value="2023-2024">2023-2024</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Emp ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Section</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Proof</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {declarations.map((decl, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">{decl.id}</td>
                <td className="px-6 py-4">{decl.name}</td>
                <td className="px-6 py-4">{decl.section}</td>
                <td className="px-6 py-4">{decl.amount}</td>
                <td className="px-6 py-4">
                  <a
                    href={`/${decl.file}`}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      decl.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : decl.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {decl.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-green-600 hover:underline">
                    Approve
                  </button>
                  <button className="text-red-600 hover:underline">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTaxDeclarations;
