import React, { useState } from "react";

const AdminHelpdesk = () => {
  const [tickets, setTickets] = useState([
    {
      id: "HD001",
      employee: "EMP0921",
      subject: "Login Issue",
      message: "I can't log into the portal today.",
      status: "Open",
      reply: "",
    },
    {
      id: "HD002",
      employee: "EMP0835",
      subject: "Payroll Clarification",
      message: "Please explain the deduction this month.",
      status: "Open",
      reply: "",
    },
  ]);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const handleViewReply = (ticket) => {
    setSelectedTicket(ticket);
    setIsReplyOpen(true);
  };

  const handleReplyChange = (e) => {
    setSelectedTicket((prev) => ({
      ...prev,
      reply: e.target.value,
    }));
  };

  const handleStatusChange = (e) => {
    setSelectedTicket((prev) => ({
      ...prev,
      status: e.target.value,
    }));
  };

  const handleReplySend = () => {
    const updatedTickets = tickets.map((t) =>
      t.id === selectedTicket.id ? selectedTicket : t
    );
    setTickets(updatedTickets);
    setIsReplyOpen(false);
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Helpdesk Tickets</h1>
      <div className="bg-white shadow rounded-lg overflow-x-auto -mx-4 md:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full text-xs md:text-sm text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 md:p-3 text-xs md:text-sm">Ticket ID</th>
                <th className="p-2 md:p-3 text-xs md:text-sm">Employee</th>
                <th className="p-2 md:p-3 text-xs md:text-sm">Subject</th>
                <th className="p-2 md:p-3 text-xs md:text-sm">Status</th>
                <th className="p-2 md:p-3 text-xs md:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b">
                  <td className="p-2 md:p-3 text-xs md:text-sm">{ticket.id}</td>
                  <td className="p-2 md:p-3 text-xs md:text-sm">{ticket.employee}</td>
                  <td className="p-2 md:p-3 text-xs md:text-sm">{ticket.subject}</td>
                  <td className="p-2 md:p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        ticket.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="p-2 md:p-3">
                    <button
                      onClick={() => handleViewReply(ticket)}
                      className="text-xs md:text-sm bg-[#f7941e] hover:bg-orange-600 text-white px-2 md:px-3 py-1 rounded"
                    >
                      View / Reply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isReplyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 md:p-6 rounded-xl z-10 max-w-md w-full shadow-lg">
            <h2 className="text-base md:text-lg font-bold mb-2">Ticket: {selectedTicket?.id}</h2>
            <p className="text-sm mb-2">
              <strong>From:</strong> {selectedTicket?.employee} <br />
              <strong>Subject:</strong> {selectedTicket?.subject}
            </p>
            <p className="text-sm mb-4 bg-gray-100 p-2 rounded">
              {selectedTicket?.message}
            </p>

            <textarea
              placeholder="Write your reply here..."
              value={selectedTicket?.reply || ""}
              onChange={handleReplyChange}
              className="w-full border rounded p-2 mb-3"
              rows={4}
            ></textarea>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <select
                value={selectedTicket?.status}
                onChange={handleStatusChange}
                className="border rounded px-2 py-1 text-sm md:text-base w-full sm:w-auto"
              >
                <option value="Open">Open</option>
                <option value="Resolved">Resolved</option>
              </select>

              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setIsReplyOpen(false)}
                  className="w-full sm:w-auto px-4 py-2 text-gray-700 border rounded text-sm md:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReplySend}
                  className="w-full sm:w-auto px-4 py-2 bg-[#f7941e] text-white rounded hover:bg-orange-600 text-sm md:text-base"
                >
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHelpdesk;
