import React, { useState } from "react";

const EmployeeHelpdesk = () => {
  const [tickets, setTickets] = useState([
    {
      id: "TKT001",
      subject: "Issue with Payroll",
      category: "Payroll",
      date: "2025-07-08",
      status: "Open",
    },
    {
      id: "TKT002",
      subject: "ID Card not received",
      category: "Assets",
      date: "2025-07-05",
      status: "Resolved",
    },
  ]);

  const [formData, setFormData] = useState({
    subject: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: `TKT${Math.floor(Math.random() * 10000)}`,
      ...formData,
      date: new Date().toISOString().split("T")[0],
      status: "Open",
    };
    setTickets([newTicket, ...tickets]);
    setFormData({ subject: "", category: "", message: "" });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-[#f7941e]">Helpdesk / Support</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            <option value="Payroll">Payroll</option>
            <option value="Leaves">Leaves</option>
            <option value="Assets">Assets</option>
            <option value="Technical">Technical</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#f7941e] text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Submit Ticket
        </button>
      </form>

      <h2 className="text-lg font-semibold mb-2">My Tickets</h2>
      {tickets.length === 0 ? (
        <p className="text-sm text-gray-500">No tickets raised yet.</p>
      ) : (
        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Ticket ID</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{ticket.id}</td>
                <td className="px-4 py-2">{ticket.subject}</td>
                <td className="px-4 py-2">{ticket.category}</td>
                <td className="px-4 py-2">{ticket.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      ticket.status === "Open"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeHelpdesk;
