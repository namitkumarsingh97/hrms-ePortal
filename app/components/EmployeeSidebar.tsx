"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const EmployeeSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
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
    router.push("/login");
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-16 left-4 z-50 bg-black text-white p-2 rounded-lg shadow-lg"
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
        className={`fixed md:static top-16 left-0 w-64 bg-black text-white p-4 space-y-2 min-h-[calc(100vh-4rem)] z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold text-orange-500 mb-4">Employee Panel</h2>

        <nav className="space-y-2 text-sm">
          {/* Home */}
          <div>
            <Link href="/employee/dashboard" className={`block hover:text-orange-500 py-2 font-medium ${isActive("/employee/dashboard") ? "text-orange-500" : ""}`}>
              🏠 MY DASHBOARD
            </Link>
            <Link href="/employee/check-in" className={`block hover:text-orange-500 py-1 ml-4 text-xs ${isActive("/employee/check-in") ? "text-orange-500" : ""}`}>
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
                <Link href="/employee/career-gps" className={`block hover:text-orange-500 py-1 ${isActive("/employee/career-gps") ? "text-orange-500" : ""}`}>
                  Career GPS
                </Link>
                <Link href="/employee/skills-learning" className={`block hover:text-orange-500 py-1 ${isActive("/employee/skills-learning") ? "text-orange-500" : ""}`}>
                  Skills & Learning
                </Link>
                <Link href="/employee/internal-opportunities" className={`block hover:text-orange-500 py-1 ${isActive("/employee/internal-opportunities") ? "text-orange-500" : ""}`}>
                  Internal Opportunities
                </Link>
                <Link href="/employee/mentorship" className={`block hover:text-orange-500 py-1 ${isActive("/employee/mentorship") ? "text-orange-500" : ""}`}>
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
                <Link href="/employee/performance" className={`block hover:text-orange-500 py-1 ${isActive("/employee/performance") ? "text-orange-500" : ""}`}>
                  My Performance
                </Link>
                <Link href="/employee/goals-okrs" className={`block hover:text-orange-500 py-1 ${isActive("/employee/goals-okrs") ? "text-orange-500" : ""}`}>
                  Goals & OKRs
                </Link>
                <Link href="/employee/feedback" className={`block hover:text-orange-500 py-1 ${isActive("/employee/feedback") ? "text-orange-500" : ""}`}>
                  Feedback
                </Link>
                <Link href="/employee/reviews" className={`block hover:text-orange-500 py-1 ${isActive("/employee/reviews") ? "text-orange-500" : ""}`}>
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
                <Link href="/employee/compensation-clarity" className={`block hover:text-orange-500 py-1 ${isActive("/employee/compensation-clarity") ? "text-orange-500" : ""}`}>
                  Compensation
                </Link>
                <Link href="/employee/payroll" className={`block hover:text-orange-500 py-1 ${isActive("/employee/payroll") ? "text-orange-500" : ""}`}>
                  Payslips
                </Link>
                <Link href="/employee/benefits" className={`block hover:text-orange-500 py-1 ${isActive("/employee/benefits") ? "text-orange-500" : ""}`}>
                  Benefits
                </Link>
                <Link href="/employee/esops" className={`block hover:text-orange-500 py-1 ${isActive("/employee/esops") ? "text-orange-500" : ""}`}>
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
                <Link href="/employee/attendance" className={`block hover:text-orange-500 py-1 ${isActive("/employee/attendance") ? "text-orange-500" : ""}`}>
                  Attendance
                </Link>
                <Link href="/employee/leaves" className={`block hover:text-orange-500 py-1 ${isActive("/employee/leaves") ? "text-orange-500" : ""}`}>
                  Leave
                </Link>
                <Link href="/employee/focus-time" className={`block hover:text-orange-500 py-1 ${isActive("/employee/focus-time") ? "text-orange-500" : ""}`}>
                  Focus Time
                </Link>
                <Link href="/employee/wellbeing" className={`block hover:text-orange-500 py-1 ${isActive("/employee/wellbeing") ? "text-orange-500" : ""}`}>
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
                <Link href="/employee/documents" className={`block hover:text-orange-500 py-1 ${isActive("/employee/documents") ? "text-orange-500" : ""}`}>
                  My Documents
                </Link>
                <Link href="/employee/letters-requests" className={`block hover:text-orange-500 py-1 ${isActive("/employee/letters-requests") ? "text-orange-500" : ""}`}>
                  Letters & Requests
                </Link>
                <Link href="/employee/digital-id" className={`block hover:text-orange-500 py-1 ${isActive("/employee/digital-id") ? "text-orange-500" : ""}`}>
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
                <Link href="/employee/team" className={`block hover:text-orange-500 py-1 ${isActive("/employee/team") ? "text-orange-500" : ""}`}>
                  My Team
                </Link>
                <Link href="/employee/org-view" className={`block hover:text-orange-500 py-1 ${isActive("/employee/org-view") ? "text-orange-500" : ""}`}>
                  Organization View
                </Link>
                <Link href="/employee/recognition" className={`block hover:text-orange-500 py-1 ${isActive("/employee/recognition") ? "text-orange-500" : ""}`}>
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
                <Link href="/employee/trust-voice" className={`block hover:text-orange-500 py-1 ${isActive("/employee/trust-voice") ? "text-orange-500" : ""}`}>
                  Feedback
                </Link>
                <Link href="/employee/anonymous-speakup" className={`block hover:text-orange-500 py-1 ${isActive("/employee/anonymous-speakup") ? "text-orange-500" : ""}`}>
                  Anonymous Speak-Up
                </Link>
                <Link href="/employee/policies" className={`block hover:text-orange-500 py-1 ${isActive("/employee/policies") ? "text-orange-500" : ""}`}>
                  Policies
                </Link>
                <Link href="/employee/ethics-helpdesk" className={`block hover:text-orange-500 py-1 ${isActive("/employee/ethics-helpdesk") ? "text-orange-500" : ""}`}>
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
                <Link href="/employee/my-rules" className={`block hover:text-orange-500 py-1 ${isActive("/employee/my-rules") ? "text-orange-500" : ""}`}>
                  My Rules
                </Link>
                <Link href="/employee/smart-requests" className={`block hover:text-orange-500 py-1 ${isActive("/employee/smart-requests") ? "text-orange-500" : ""}`}>
                  Smart Requests
                </Link>
                <Link href="/employee/reminders" className={`block hover:text-orange-500 py-1 ${isActive("/employee/reminders") ? "text-orange-500" : ""}`}>
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
                <Link href="/employee/profile" className={`block hover:text-orange-500 py-1 ${isActive("/employee/profile") ? "text-orange-500" : ""}`}>
                  Profile
                </Link>
                <Link href="/employee/preferences" className={`block hover:text-orange-500 py-1 ${isActive("/employee/preferences") ? "text-orange-500" : ""}`}>
                  Preferences
                </Link>
                <Link href="/employee/security" className={`block hover:text-orange-500 py-1 ${isActive("/employee/security") ? "text-orange-500" : ""}`}>
                  Security
                </Link>
                <Link href="/employee/notifications" className={`block hover:text-orange-500 py-1 ${isActive("/employee/notifications") ? "text-orange-500" : ""}`}>
                  Notifications
                </Link>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-700">
            <Link href="/employee/helpdesk" className="block hover:text-orange-500 py-2">
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

