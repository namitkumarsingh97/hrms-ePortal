import React, { useState } from "react";

const EmployeeAttendance = () => {
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [punchInTime, setPunchInTime] = useState(null);
  const [punchOutTime, setPunchOutTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [logs, setLogs] = useState([]);

  const handlePunch = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude.toFixed(5),
          lng: position.coords.longitude.toFixed(5),
        };

        const now = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        if (!isPunchedIn) {
          setPunchInTime(now);
          setLocation(coords);
        } else {
          setPunchOutTime(now);
          setLogs([
            {
              date: new Date().toISOString().slice(0, 10),
              in: punchInTime,
              out: now,
              location,
            },
            ...logs,
          ]);
          setLocation(null);
        }

        setIsPunchedIn(!isPunchedIn);
      },
      (error) => {
        alert("Location access denied. Please enable it to punch in/out.");
        console.error("Geolocation error:", error);
      }
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Attendance</h1>

      <div className="bg-white rounded shadow p-6 space-y-4">
        <p className="text-lg">
          Status:{" "}
          <span className={isPunchedIn ? "text-green-600" : "text-red-600"}>
            {isPunchedIn ? "Punched In" : "Punched Out"}
          </span>
        </p>
        <p>Punch In: {punchInTime || "-- : --"}</p>
        <p>Punch Out: {punchOutTime || "-- : --"}</p>
        {location && (
          <p>
            Location:{" "}
            <span className="text-sm text-gray-600">
              {location.lat}, {location.lng}
            </span>
          </p>
        )}
        <button
          onClick={handlePunch}
          className={`px-6 py-2 rounded text-white ${
            isPunchedIn ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {isPunchedIn ? "Punch Out" : "Punch In"}
        </button>
      </div>

      <div className="bg-white rounded shadow p-6">
        <h2 className="text-lg font-bold mb-4">Recent Logs</h2>
        <table className="w-full text-left border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Punch In</th>
              <th className="p-2 border">Punch Out</th>
              <th className="p-2 border">Location</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr key={i}>
                <td className="p-2 border">{log.date}</td>
                <td className="p-2 border">{log.in}</td>
                <td className="p-2 border">{log.out}</td>
                <td className="p-2 border">
                  {log.location
                    ? `${log.location.lat}, ${log.location.lng}`
                    : "--"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
