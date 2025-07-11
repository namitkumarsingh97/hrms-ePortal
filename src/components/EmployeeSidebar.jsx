import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeSidebar = () => {
  const navigate = useNavigate();
  const [openHR, setOpenHR] = useState(false);
  const [openCareer, setOpenCareer] = useState(false);
  const [openUtil, setOpenUtil] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <aside className="w-full md:w-64 bg-black text-white p-6 min-h-screen space-y-6">
      <h2 className="text-2xl font-bold text-[#f7941e]">Employee Panel</h2>

      <nav className="space-y-4">
        <Link to="/employee/dashboard" className="block hover:text-[#f7941e]">
          Dashboard
        </Link>

        <Link to="/employee/attendance" className="block hover:text-[#f7941e]">
          My Attendance
        </Link>

        <Link to="/employee/leaves" className="block hover:text-[#f7941e]">
          My Leaves
        </Link>

        <Link to="/employee/tasks" className="block hover:text-[#f7941e]">
          My Tasks
        </Link>

        <Link to="/employee/payroll" className="block hover:text-[#f7941e]">
          My Payroll
        </Link>

        <Link to="/employee/documents" className="block hover:text-[#f7941e]">
          My Documents
        </Link>

        <Link to="/employee/helpdesk" className="block hover:text-[#f7941e]">
          Helpdesk / Support
        </Link>

        <Link to="/employee/profile" className="block hover:text-[#f7941e]">
          My Profile
        </Link>

        <div>
          <button
            onClick={() => setOpenHR(!openHR)}
            className="block w-full text-left hover:text-[#f7941e]"
          >
            HR Services ▾
          </button>
          {openHR && (
            <div className="ml-4 space-y-2 mt-2">
              <Link
                to="/employee/tax-declaration"
                className="block hover:text-[#f7941e]"
              >
                Tax Declarations
              </Link>
              <Link
                to="/employee/expense-claims"
                className="block hover:text-[#f7941e]"
              >
                Expense Claims
              </Link>
              <Link
                to="/employee/asset-allocation"
                className="block hover:text-[#f7941e]"
              >
                Asset Allocation
              </Link>
              <Link
                to="/employee/exit-process"
                className="block hover:text-[#f7941e]"
              >
                Exit Process
              </Link>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setOpenCareer(!openCareer)}
            className="block w-full text-left hover:text-[#f7941e]"
          >
            Career & Learning ▾
          </button>
          {openCareer && (
            <div className="ml-4 space-y-2 mt-2">
              <Link
                to="/employee/training"
                className="block hover:text-[#f7941e]"
              >
                Training & Courses
              </Link>
              <Link
                to="/employee/performance"
                className="block hover:text-[#f7941e]"
              >
                Performance Reviews
              </Link>
              <Link
                to="/employee/job-openings"
                className="block hover:text-[#f7941e]"
              >
                Internal Job Postings
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
              <Link
                to="/employee/shift-schedule"
                className="block hover:text-[#f7941e]"
              >
                Shift Schedules
              </Link>
              <Link
                to="/employee/announcements"
                className="block hover:text-[#f7941e]"
              >
                Announcements
              </Link>
              <Link
                to="/employee/birthdays"
                className="block hover:text-[#f7941e]"
              >
                Birthdays / Anniversaries
              </Link>
            </div>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="block text-left hover:text-[#f7941e] w-full"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default EmployeeSidebar;
