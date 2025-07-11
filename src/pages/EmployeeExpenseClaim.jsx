import React, { useState } from "react";

const EmployeeExpenseClaim = () => {
  const [claims, setClaims] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    amount: "",
    description: "",
    receipt: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClaims((prev) => [
      ...prev,
      { ...formData, status: "Pending", id: Date.now() },
    ]);
    setFormData({
      date: "",
      category: "",
      amount: "",
      description: "",
      receipt: null,
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-[#f7941e]">
        Expense Claims & Reimbursements
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option value="Travel">Travel</option>
            <option value="Meals">Meals</option>
            <option value="Supplies">Supplies</option>
            <option value="Phone/Internet">Phone/Internet</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Amount (₹)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="e.g., Client meeting lunch"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Upload Receipt</label>
          <input
            type="file"
            name="receipt"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-[#f7941e] text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Submit Claim
          </button>
        </div>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-3">Submitted Claims</h2>
        {claims.length === 0 ? (
          <p className="text-gray-500">No claims submitted yet.</p>
        ) : (
          <table className="w-full text-sm text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim) => (
                <tr key={claim.id} className="border-t">
                  <td className="p-2">{claim.date}</td>
                  <td className="p-2">{claim.category}</td>
                  <td className="p-2">₹{claim.amount}</td>
                  <td className="p-2">{claim.description}</td>
                  <td className="p-2 text-yellow-600 font-medium">
                    {claim.status}
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

export default EmployeeExpenseClaim;
