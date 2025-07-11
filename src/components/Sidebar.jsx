import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [openHR, setOpenHR] = useState(false);
  const [openOrg, setOpenOrg] = useState(false);
  const [openUtil, setOpenUtil] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <aside className="w-full md:w-64 bg-black text-white p-6 space-y-6 min-h-screen">
      <h2 className="text-2xl font-bold text-[#f7941e]">Admin Panel</h2>
      <nav className="space-y-4">
        <Link to="/admin/dashboard" className="block hover:text-[#f7941e]">
          Dashboard
        </Link>

        <div>
          <button
            onClick={() => setOpenHR(!openHR)}
            className="block w-full text-left hover:text-[#f7941e]"
          >
            HR Management ▾
          </button>
          {openHR && (
            <div className="ml-4 space-y-2 mt-2">
              <Link
                to="/admin/attendance"
                className="block hover:text-[#f7941e]"
              >
                Attendance
              </Link>
              <Link to="/admin/leaves" className="block hover:text-[#f7941e]">
                Leaves
              </Link>
              <Link
                to="/admin/employees"
                className="block hover:text-[#f7941e]"
              >
                Employee Directory
              </Link>
              <Link to="/admin/payroll" className="block hover:text-[#f7941e]">
                Payroll Management
              </Link>
              <Link
                to="/admin/tax-declarations"
                className="block hover:text-[#f7941e]"
              >
                Tax Declarations
              </Link>
              <Link
                to="/admin/asset-allocation"
                className="block hover:text-[#f7941e]"
              >
                Asset Management
              </Link>
              <Link
                to="/admin/exit-process"
                className="block hover:text-[#f7941e]"
              >
                Exit / F&F
              </Link>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setOpenOrg(!openOrg)}
            className="block w-full text-left hover:text-[#f7941e]"
          >
            Organization ▾
          </button>
          {openOrg && (
            <div className="ml-4 space-y-2 mt-2">
              <Link
                to="/admin/announcements"
                className="block hover:text-[#f7941e]"
              >
                Announcements
              </Link>
              <Link to="/admin/training" className="block hover:text-[#f7941e]">
                Trainings & Courses
              </Link>
              <Link
                to="/admin/performance"
                className="block hover:text-[#f7941e]"
              >
                Performance Reviews
              </Link>
              <Link
                to="/admin/job-openings"
                className="block hover:text-[#f7941e]"
              >
                Job Postings
              </Link>
              <Link
                to="/admin/shift-schedule"
                className="block hover:text-[#f7941e]"
              >
                Shift Scheduling
              </Link>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setOpenUtil(!openUtil)}
            className="block w-full text-left hover:text-[#f7941e]"
          >
            Utilities ▾
          </button>
          {openUtil && (
            <div className="ml-4 space-y-2 mt-2">
              <Link to="/admin/reports" className="block hover:text-[#f7941e]">
                Reports
              </Link>
              <Link to="/admin/helpdesk" className="block hover:text-[#f7941e]">
                Support / Helpdesk
              </Link>
              <Link
                to="/admin/documents"
                className="block hover:text-[#f7941e]"
              >
                Document Library
              </Link>
              <Link
                to="/admin/birthdays"
                className="block hover:text-[#f7941e]"
              >
                Birthdays / Anniversaries
              </Link>
              <Link to="/admin/settings" className="block hover:text-[#f7941e]">
                Settings
              </Link>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="block text-left hover:text-[#f7941e] w-full"
        >
          Log Out
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
