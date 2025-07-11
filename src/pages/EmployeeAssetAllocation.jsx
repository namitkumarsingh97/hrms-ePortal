import React from "react";

const dummyAssets = [
  {
    id: 1,
    type: "Laptop",
    model: "Dell XPS 13",
    issuedOn: "2024-04-10",
    status: "Assigned",
    returnDate: null,
  },
  {
    id: 2,
    type: "ID Card",
    model: "Employee Badge with RFID",
    issuedOn: "2024-04-10",
    status: "Assigned",
    returnDate: null,
  },
  {
    id: 3,
    type: "Headphones",
    model: "JBL Tune 500BT",
    issuedOn: "2024-05-01",
    status: "Returned",
    returnDate: "2024-06-01",
  },
];

const EmployeeAssetAllocation = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-[#f7941e]">
        My Asset Allocation
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 border">Asset Type</th>
              <th className="p-2 border">Description / Model</th>
              <th className="p-2 border">Issued On</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Return Date</th>
            </tr>
          </thead>
          <tbody>
            {dummyAssets.map((asset) => (
              <tr key={asset.id} className="border-t">
                <td className="p-2">{asset.type}</td>
                <td className="p-2">{asset.model}</td>
                <td className="p-2">{asset.issuedOn}</td>
                <td
                  className={`p-2 font-medium ${
                    asset.status === "Assigned"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {asset.status}
                </td>
                <td className="p-2">
                  {asset.returnDate ? asset.returnDate : "--"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        For issues or transfers, please contact HR or raise a Helpdesk ticket.
      </p>
    </div>
  );
};

export default EmployeeAssetAllocation;
