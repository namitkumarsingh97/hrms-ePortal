import React, { useState } from "react";

const AdminAssetAllocation = () => {
  const [assets, setAssets] = useState([
    {
      id: 1,
      employeeId: "EMP0001",
      name: "Namit Sharma",
      asset: "Laptop - Dell XPS 13",
      assetId: "LAP1234",
      status: "Active",
      allocatedOn: "2024-01-10",
    },
    {
      id: 2,
      employeeId: "EMP0002",
      name: "Riya Kapoor",
      asset: "ID Card",
      assetId: "ID0902",
      status: "Returned",
      allocatedOn: "2023-07-15",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newAsset, setNewAsset] = useState({
    employeeId: "",
    name: "",
    asset: "",
    assetId: "",
    status: "Active",
    allocatedOn: new Date().toISOString().split("T")[0],
  });

  const handleAssignAsset = () => {
    setAssets([
      ...assets,
      { id: Date.now(), ...newAsset }
    ]);
    setModalOpen(false);
    setNewAsset({
      employeeId: "",
      name: "",
      asset: "",
      assetId: "",
      status: "Active",
      allocatedOn: new Date().toISOString().split("T")[0],
    });
  };

  const filteredAssets = assets.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.asset.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Asset Allocation</h1>

      {/* Top Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-white p-4 rounded shadow">
        <input
          type="text"
          placeholder="Search by name or asset..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/2"
        />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          + Assign New Asset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Emp ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Asset</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Asset ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Allocated On</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{asset.employeeId}</td>
                <td className="px-6 py-4">{asset.name}</td>
                <td className="px-6 py-4">{asset.asset}</td>
                <td className="px-6 py-4">{asset.assetId}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      asset.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : asset.status === "Returned"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {asset.status}
                  </span>
                </td>
                <td className="px-6 py-4">{asset.allocatedOn}</td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-4">
            <h2 className="text-xl font-bold">Assign New Asset</h2>

            <input
              type="text"
              placeholder="Employee ID"
              value={newAsset.employeeId}
              onChange={(e) =>
                setNewAsset({ ...newAsset, employeeId: e.target.value })
              }
              className="w-full border px-3 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Employee Name"
              value={newAsset.name}
              onChange={(e) => setNewAsset({ ...newAsset, name: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Asset"
              value={newAsset.asset}
              onChange={(e) => setNewAsset({ ...newAsset, asset: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />

            <input
              type="text"
              placeholder="Asset ID"
              value={newAsset.assetId}
              onChange={(e) =>
                setNewAsset({ ...newAsset, assetId: e.target.value })
              }
              className="w-full border px-3 py-2 rounded"
            />

            <select
              value={newAsset.status}
              onChange={(e) =>
                setNewAsset({ ...newAsset, status: e.target.value })
              }
              className="w-full border px-3 py-2 rounded"
            >
              <option value="Active">Active</option>
              <option value="Returned">Returned</option>
              <option value="Lost">Lost</option>
            </select>

            <div className="flex justify-end space-x-3 pt-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded border border-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAssignAsset}
                className="px-4 py-2 rounded bg-[#f7941e] text-white"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAssetAllocation;
