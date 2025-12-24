import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const EmployeeSidebar = () => {
  const navigate = useNavigate();
  const [openCareer, setOpenCareer] = useState(false);
  const [openPerformance, setOpenPerformance] = useState(false);
  const [openPay, setOpenPay] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [openDocuments, setOpenDocuments] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);
  const [openVoice, setOpenVoice] = useState(false);
  const [openAutomation, setOpenAutomation] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 w-64 bg-black text-white p-4 space-y-2 min-h-screen z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold text-orange-500 mb-4">Employee Panel</h2>

        <nav className="space-y-2 text-sm">
          {/* Home */}
          <div>
            <Link to="/employee/dashboard" className="block hover:text-orange-500 py-2 font-medium">
              🏠 MY DASHBOARD
            </Link>
            <Link to="/employee/check-in" className="block hover:text-orange-500 py-1 ml-4 text-xs">
              Daily Check-In
            </Link>
          </div>

          {/* Career */}
          <div>
            <button
              onClick={() => setOpenCareer(!openCareer)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              🚀 CAREER {openCareer ? "▾" : "▸"}
            </button>
            {openCareer && (
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/employee/career-gps" className="block hover:text-orange-500 py-1">
                  Career GPS
                </Link>
                <Link to="/employee/skills-learning" className="block hover:text-orange-500 py-1">
                  Skills & Learning
                </Link>
                <Link to="/employee/internal-opportunities" className="block hover:text-orange-500 py-1">
                  Internal Opportunities
                </Link>
                <Link to="/employee/mentorship" className="block hover:text-orange-500 py-1">
                  Mentorship
                </Link>
              </div>
            )}
          </div>

          {/* Performance */}
          <div>
            <button
              onClick={() => setOpenPerformance(!openPerformance)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              📈 PERFORMANCE {openPerformance ? "▾" : "▸"}
            </button>
            {openPerformance && (
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/employee/performance" className="block hover:text-orange-500 py-1">
                  My Performance
                </Link>
                <Link to="/employee/goals-okrs" className="block hover:text-orange-500 py-1">
                  Goals & OKRs
                </Link>
                <Link to="/employee/feedback" className="block hover:text-orange-500 py-1">
                  Feedback
                </Link>
                <Link to="/employee/reviews" className="block hover:text-orange-500 py-1">
                  Reviews
                </Link>
              </div>
            )}
          </div>

          {/* Pay & Benefits */}
          <div>
            <button
              onClick={() => setOpenPay(!openPay)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              💰 PAY & BENEFITS {openPay ? "▾" : "▸"}
            </button>
            {openPay && (
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/employee/compensation-clarity" className="block hover:text-orange-500 py-1">
                  Compensation
                </Link>
                <Link to="/employee/payroll" className="block hover:text-orange-500 py-1">
                  Payslips
                </Link>
                <Link to="/employee/benefits" className="block hover:text-orange-500 py-1">
                  Benefits
                </Link>
                <Link to="/employee/esops" className="block hover:text-orange-500 py-1">
                  ESOPs
                </Link>
              </div>
            )}
          </div>

          {/* Time & Wellbeing */}
          <div>
            <button
              onClick={() => setOpenTime(!openTime)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              🕒 TIME & WELLBEING {openTime ? "▾" : "▸"}
            </button>
            {openTime && (
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/employee/attendance" className="block hover:text-orange-500 py-1">
                  Attendance
                </Link>
                <Link to="/employee/leaves" className="block hover:text-orange-500 py-1">
                  Leave
                </Link>
                <Link to="/employee/focus-time" className="block hover:text-orange-500 py-1">
                  Focus Time
                </Link>
                <Link to="/employee/wellbeing" className="block hover:text-orange-500 py-1">
                  Wellbeing
                </Link>
              </div>
            )}
          </div>

          {/* Documents */}
          <div>
            <button
              onClick={() => setOpenDocuments(!openDocuments)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              📁 DOCUMENTS {openDocuments ? "▾" : "▸"}
            </button>
            {openDocuments && (
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/employee/documents" className="block hover:text-orange-500 py-1">
                  My Documents
                </Link>
                <Link to="/employee/letters-requests" className="block hover:text-orange-500 py-1">
                  Letters & Requests
                </Link>
                <Link to="/employee/digital-id" className="block hover:text-orange-500 py-1">
                  Digital ID
                </Link>
              </div>
            )}
          </div>

          {/* Team */}
          <div>
            <button
              onClick={() => setOpenTeam(!openTeam)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              👥 TEAM {openTeam ? "▾" : "▸"}
            </button>
            {openTeam && (
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/employee/team" className="block hover:text-orange-500 py-1">
                  My Team
                </Link>
                <Link to="/employee/org-view" className="block hover:text-orange-500 py-1">
                  Organization View
                </Link>
                <Link to="/employee/recognition" className="block hover:text-orange-500 py-1">
                  Recognition
                </Link>
              </div>
            )}
          </div>

          {/* Voice & Trust */}
          <div>
            <button
              onClick={() => setOpenVoice(!openVoice)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              🗣️ VOICE & TRUST {openVoice ? "▾" : "▸"}
            </button>
            {openVoice && (
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/employee/trust-voice" className="block hover:text-orange-500 py-1">
                  Feedback
                </Link>
                <Link to="/employee/anonymous-speakup" className="block hover:text-orange-500 py-1">
                  Anonymous Speak-Up
                </Link>
                <Link to="/employee/policies" className="block hover:text-orange-500 py-1">
                  Policies
                </Link>
                <Link to="/employee/ethics-helpdesk" className="block hover:text-orange-500 py-1">
                  Ethics Helpdesk
                </Link>
              </div>
            )}
          </div>

          {/* Automation */}
          <div>
            <button
              onClick={() => setOpenAutomation(!openAutomation)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              ⚡ AUTOMATION {openAutomation ? "▾" : "▸"}
            </button>
            {openAutomation && (
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/employee/my-rules" className="block hover:text-orange-500 py-1">
                  My Rules
                </Link>
                <Link to="/employee/smart-requests" className="block hover:text-orange-500 py-1">
                  Smart Requests
                </Link>
                <Link to="/employee/reminders" className="block hover:text-orange-500 py-1">
                  Reminders
                </Link>
              </div>
            )}
          </div>

          {/* Settings */}
          <div>
            <button
              onClick={() => setOpenSettings(!openSettings)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              ⚙️ SETTINGS {openSettings ? "▾" : "▸"}
            </button>
            {openSettings && (
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/employee/profile" className="block hover:text-orange-500 py-1">
                  Profile
                </Link>
                <Link to="/employee/preferences" className="block hover:text-orange-500 py-1">
                  Preferences
                </Link>
                <Link to="/employee/security" className="block hover:text-orange-500 py-1">
                  Security
                </Link>
                <Link to="/employee/notifications" className="block hover:text-orange-500 py-1">
                  Notifications
                </Link>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-700">
            <Link to="/employee/helpdesk" className="block hover:text-orange-500 py-2">
              Helpdesk / Support
            </Link>
            <button
              onClick={handleLogout}
              className="block text-left hover:text-orange-500 w-full py-2"
            >
              Logout
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default EmployeeSidebar;
