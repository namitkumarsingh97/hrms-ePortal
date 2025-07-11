import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const AdminShiftSchedule = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Ravi Sharma (Design)",
      start: new Date(2025, 6, 15, 9, 0),
      end: new Date(2025, 6, 15, 18, 0),
    },
    {
      id: 2,
      title: "Anjali Mehta (Marketing)",
      start: new Date(2025, 6, 16, 12, 0),
      end: new Date(2025, 6, 16, 21, 0),
    },
  ]);

  const [newShift, setNewShift] = useState({
    employee: "",
    department: "",
    date: "",
    startTime: "",
    endTime: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleSelectSlot = ({ start, end }) => {
    const employee = prompt("Enter employee name and department (e.g., John Doe - Sales):");
    if (employee) {
      const newEvent = {
        id: events.length + 1,
        title: employee,
        start,
        end,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleEventDrop = ({ event, start, end }) => {
    const updatedEvents = events.map((e) =>
      e.id === event.id ? { ...e, start, end } : e
    );
    setEvents(updatedEvents);
  };

  const handleNewShiftSubmit = () => {
    if (!newShift.employee || !newShift.date || !newShift.startTime || !newShift.endTime) return;

    const start = new Date(`${newShift.date}T${newShift.startTime}`);
    const end = new Date(`${newShift.date}T${newShift.endTime}`);

    setEvents([
      ...events,
      {
        id: events.length + 1,
        title: `${newShift.employee} (${newShift.department})`,
        start,
        end,
      },
    ]);

    setShowModal(false);
    setNewShift({ employee: "", department: "", date: "", startTime: "", endTime: "" });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Shift Schedules (Calendar View)</h2>
        <button
          className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={() => setShowModal(true)}
        >
          Assign New Shift
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        selectable
        onSelectSlot={handleSelectSlot}
        draggableAccessor={() => true}
        onEventDrop={handleEventDrop}
        resizable
        defaultView="week"
      />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Assign New Shift</h3>
            <input
              type="text"
              placeholder="Employee Name"
              value={newShift.employee}
              onChange={(e) => setNewShift({ ...newShift, employee: e.target.value })}
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <input
              type="text"
              placeholder="Department"
              value={newShift.department}
              onChange={(e) => setNewShift({ ...newShift, department: e.target.value })}
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <input
              type="date"
              value={newShift.date}
              onChange={(e) => setNewShift({ ...newShift, date: e.target.value })}
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <div className="flex gap-2">
              <input
                type="time"
                value={newShift.startTime}
                onChange={(e) => setNewShift({ ...newShift, startTime: e.target.value })}
                className="w-1/2 border px-3 py-2 rounded mb-3"
              />
              <input
                type="time"
                value={newShift.endTime}
                onChange={(e) => setNewShift({ ...newShift, endTime: e.target.value })}
                className="w-1/2 border px-3 py-2 rounded mb-3"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleNewShiftSubmit}
                className="px-4 py-2 bg-[#f7941e] text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminShiftSchedule;