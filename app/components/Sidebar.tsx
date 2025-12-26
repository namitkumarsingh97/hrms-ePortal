"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openOverview, setOpenOverview] = useState(false);
  const [openOrg, setOpenOrg] = useState(false);
  const [openTalent, setOpenTalent] = useState(false);
  const [openPerformance, setOpenPerformance] = useState(false);
  const [openCompensation, setOpenCompensation] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [openCulture, setOpenCulture] = useState(false);
  const [openAutomation, setOpenAutomation] = useState(false);
  const [openAnalytics, setOpenAnalytics] = useState(false);
  const [openCompliance, setOpenCompliance] = useState(false);
  const [openIntegrations, setOpenIntegrations] = useState(false);
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
        <h2 className="text-xl font-bold text-orange-500 mb-4">Admin Panel</h2>
        
        <nav className="space-y-2 text-sm">
          {/* Overview */}
          <div>
            <button
              onClick={() => setOpenOverview(!openOverview)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              🧭 OVERVIEW {openOverview ? "▾" : "▸"}
            </button>
            {openOverview && (
              <div className="ml-4 space-y-1 mt-1">
                <Link href="/admin/command-center" className={`block hover:text-orange-500 py-1 ${isActive("/admin/command-center") ? "text-orange-500" : ""}`}>
                  Command Center
                </Link>
                <Link href="/admin/org-health" className={`block hover:text-orange-500 py-1 ${isActive("/admin/org-health") ? "text-orange-500" : ""}`}>
                  Org Health
                </Link>
              </div>
            )}
          </div>

          {/* Organization */}
          <div>
            <button
              onClick={() => setOpenOrg(!openOrg)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              🏢 ORGANIZATION {openOrg ? "▾" : "▸"}
            </button>
            {openOrg && (
              <div className="ml-4 space-y-1 mt-1">
                <Link href="/admin/org-graph" className={`block hover:text-orange-500 py-1 ${isActive("/admin/org-graph") ? "text-orange-500" : ""}`}>
                  Organization Graph
                </Link>
                <Link href="/admin/teams-roles" className={`block hover:text-orange-500 py-1 ${isActive("/admin/teams-roles") ? "text-orange-500" : ""}`}>
                  Teams & Roles
                </Link>
                <Link href="/admin/skills-capabilities" className={`block hover:text-orange-500 py-1 ${isActive("/admin/skills-capabilities") ? "text-orange-500" : ""}`}>
                  Skills & Capabilities
                </Link>
                <Link href="/admin/workforce-planning" className={`block hover:text-orange-500 py-1 ${isActive("/admin/workforce-planning") ? "text-orange-500" : ""}`}>
                  Workforce Planning
                </Link>
              </div>
            )}
          </div>

          {/* Talent */}
          <div>
            <button
              onClick={() => setOpenTalent(!openTalent)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              👥 TALENT {openTalent ? "▾" : "▸"}
            </button>
            {openTalent && (
              <div className="ml-4 space-y-1 mt-1">
                <Link href="/admin/smart-hiring" className={`block hover:text-orange-500 py-1 ${isActive("/admin/smart-hiring") ? "text-orange-500" : ""}`}>
                  Smart Hiring
                </Link>
                <Link href="/admin/talent-marketplace" className={`block hover:text-orange-500 py-1 ${isActive("/admin/talent-marketplace") ? "text-orange-500" : ""}`}>
                  Talent Marketplace
                </Link>
                <Link href="/admin/onboarding" className={`block hover:text-orange-500 py-1 ${isActive("/admin/onboarding") ? "text-orange-500" : ""}`}>
                  Onboarding
                </Link>
                <Link href="/admin/offboarding" className={`block hover:text-orange-500 py-1 ${isActive("/admin/offboarding") ? "text-orange-500" : ""}`}>
                  Offboarding
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
                <Link href="/admin/performance-intelligence" className={`block hover:text-orange-500 py-1 ${isActive("/admin/performance-intelligence") ? "text-orange-500" : ""}`}>
                  Performance Intelligence
                </Link>
                <Link href="/admin/performance" className={`block hover:text-orange-500 py-1 ${isActive("/admin/performance") ? "text-orange-500" : ""}`}>
                  Reviews & Feedback
                </Link>
                <Link href="/admin/manager-effectiveness" className={`block hover:text-orange-500 py-1 ${isActive("/admin/manager-effectiveness") ? "text-orange-500" : ""}`}>
                  Manager Effectiveness
                </Link>
                <Link href="/admin/high-potential" className={`block hover:text-orange-500 py-1 ${isActive("/admin/high-potential") ? "text-orange-500" : ""}`}>
                  High-Potential
                </Link>
              </div>
            )}
          </div>

          {/* Compensation */}
          <div>
            <button
              onClick={() => setOpenCompensation(!openCompensation)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              💸 COMPENSATION {openCompensation ? "▾" : "▸"}
            </button>
            {openCompensation && (
              <div className="ml-4 space-y-1 mt-1">
                <Link href="/admin/payroll" className={`block hover:text-orange-500 py-1 ${isActive("/admin/payroll") ? "text-orange-500" : ""}`}>
                  Payroll
                </Link>
                <Link href="/admin/compensation-planning" className={`block hover:text-orange-500 py-1 ${isActive("/admin/compensation-planning") ? "text-orange-500" : ""}`}>
                  Compensation Planning
                </Link>
                <Link href="/admin/compensation-engine" className={`block hover:text-orange-500 py-1 ${isActive("/admin/compensation-engine") ? "text-orange-500" : ""}`}>
                  Pay Equity
                </Link>
                <Link href="/admin/benefits-esops" className={`block hover:text-orange-500 py-1 ${isActive("/admin/benefits-esops") ? "text-orange-500" : ""}`}>
                  Benefits & ESOPs
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
                <Link href="/admin/attendance" className={`block hover:text-orange-500 py-1 ${isActive("/admin/attendance") ? "text-orange-500" : ""}`}>
                  Attendance & Time
                </Link>
                <Link href="/admin/leaves" className={`block hover:text-orange-500 py-1 ${isActive("/admin/leaves") ? "text-orange-500" : ""}`}>
                  Leave Management
                </Link>
                <Link href="/admin/workload-burnout" className={`block hover:text-orange-500 py-1 ${isActive("/admin/workload-burnout") ? "text-orange-500" : ""}`}>
                  Workload & Burnout
                </Link>
                <Link href="/admin/wellbeing-insights" className={`block hover:text-orange-500 py-1 ${isActive("/admin/wellbeing-insights") ? "text-orange-500" : ""}`}>
                  Wellbeing Insights
                </Link>
              </div>
            )}
          </div>

          {/* Culture & Trust */}
          <div>
            <button
              onClick={() => setOpenCulture(!openCulture)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              🧠 CULTURE & TRUST {openCulture ? "▾" : "▸"}
            </button>
            {openCulture && (
              <div className="ml-4 space-y-1 mt-1">
                <Link href="/admin/culture-lab" className={`block hover:text-orange-500 py-1 ${isActive("/admin/culture-lab") ? "text-orange-500" : ""}`}>
                  Culture Analytics
                </Link>
                <Link href="/admin/engagement-surveys" className={`block hover:text-orange-500 py-1 ${isActive("/admin/engagement-surveys") ? "text-orange-500" : ""}`}>
                  Engagement Surveys
                </Link>
                <Link href="/admin/trust-ethics" className={`block hover:text-orange-500 py-1 ${isActive("/admin/trust-ethics") ? "text-orange-500" : ""}`}>
                  Trust & Ethics
                </Link>
                <Link href="/admin/anonymous-feedback" className={`block hover:text-orange-500 py-1 ${isActive("/admin/anonymous-feedback") ? "text-orange-500" : ""}`}>
                  Anonymous Feedback
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
              ⚙️ AUTOMATION {openAutomation ? "▾" : "▸"}
            </button>
            {openAutomation && (
              <div className="ml-4 space-y-1 mt-1">
                <Link href="/admin/automation-studio" className={`block hover:text-orange-500 py-1 ${isActive("/admin/automation-studio") ? "text-orange-500" : ""}`}>
                  Workflow Builder
                </Link>
                <Link href="/admin/policy-engine" className={`block hover:text-orange-500 py-1 ${isActive("/admin/policy-engine") ? "text-orange-500" : ""}`}>
                  Policy Engine
                </Link>
                <Link href="/admin/approval-chains" className={`block hover:text-orange-500 py-1 ${isActive("/admin/approval-chains") ? "text-orange-500" : ""}`}>
                  Approval Chains
                </Link>
                <Link href="/admin/smart-alerts" className={`block hover:text-orange-500 py-1 ${isActive("/admin/smart-alerts") ? "text-orange-500" : ""}`}>
                  Smart Alerts
                </Link>
              </div>
            )}
          </div>

          {/* Analytics */}
          <div>
            <button
              onClick={() => setOpenAnalytics(!openAnalytics)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              📊 ANALYTICS {openAnalytics ? "▾" : "▸"}
            </button>
            {openAnalytics && (
              <div className="ml-4 space-y-1 mt-1">
                <Link href="/admin/reports" className={`block hover:text-orange-500 py-1 ${isActive("/admin/reports") ? "text-orange-500" : ""}`}>
                  HR Dashboards
                </Link>
                <Link href="/admin/predictive-insights" className={`block hover:text-orange-500 py-1 ${isActive("/admin/predictive-insights") ? "text-orange-500" : ""}`}>
                  Predictive Insights
                </Link>
                <Link href="/admin/custom-reports" className={`block hover:text-orange-500 py-1 ${isActive("/admin/custom-reports") ? "text-orange-500" : ""}`}>
                  Custom Reports
                </Link>
                <Link href="/admin/data-explorer" className={`block hover:text-orange-500 py-1 ${isActive("/admin/data-explorer") ? "text-orange-500" : ""}`}>
                  Data Explorer
                </Link>
              </div>
            )}
          </div>

          {/* Compliance */}
          <div>
            <button
              onClick={() => setOpenCompliance(!openCompliance)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              🔐 COMPLIANCE {openCompliance ? "▾" : "▸"}
            </button>
            {openCompliance && (
              <div className="ml-4 space-y-1 mt-1">
                <Link href="/admin/legal-statutory" className={`block hover:text-orange-500 py-1 ${isActive("/admin/legal-statutory") ? "text-orange-500" : ""}`}>
                  Legal & Statutory
                </Link>
                <Link href="/admin/audit-logs" className={`block hover:text-orange-500 py-1 ${isActive("/admin/audit-logs") ? "text-orange-500" : ""}`}>
                  Audit Logs
                </Link>
                <Link href="/admin/document-vault" className={`block hover:text-orange-500 py-1 ${isActive("/admin/document-vault") ? "text-orange-500" : ""}`}>
                  Document Vault
                </Link>
                <Link href="/admin/access-control" className={`block hover:text-orange-500 py-1 ${isActive("/admin/access-control") ? "text-orange-500" : ""}`}>
                  Access Control
                </Link>
              </div>
            )}
          </div>

          {/* Integrations */}
          <div>
            <button
              onClick={() => setOpenIntegrations(!openIntegrations)}
              className="block w-full text-left hover:text-orange-500 py-2 font-medium"
            >
              🧩 INTEGRATIONS {openIntegrations ? "▾" : "▸"}
            </button>
            {openIntegrations && (
              <div className="ml-4 space-y-1 mt-1">
                <Link href="/admin/connected-apps" className={`block hover:text-orange-500 py-1 ${isActive("/admin/connected-apps") ? "text-orange-500" : ""}`}>
                  Connected Apps
                </Link>
                <Link href="/admin/api-webhooks" className={`block hover:text-orange-500 py-1 ${isActive("/admin/api-webhooks") ? "text-orange-500" : ""}`}>
                  API & Webhooks
                </Link>
                <Link href="/admin/data-sync" className={`block hover:text-orange-500 py-1 ${isActive("/admin/data-sync") ? "text-orange-500" : ""}`}>
                  Data Sync
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
              🛠️ SETTINGS {openSettings ? "▾" : "▸"}
            </button>
            {openSettings && (
              <div className="ml-4 space-y-1 mt-1">
                <Link href="/admin/settings" className={`block hover:text-orange-500 py-1 ${isActive("/admin/settings") ? "text-orange-500" : ""}`}>
                  Organization Settings
                </Link>
                <Link href="/admin/roles-permissions" className={`block hover:text-orange-500 py-1 ${isActive("/admin/roles-permissions") ? "text-orange-500" : ""}`}>
                  Roles & Permissions
                </Link>
                <Link href="/admin/billing" className={`block hover:text-orange-500 py-1 ${isActive("/admin/billing") ? "text-orange-500" : ""}`}>
                  Billing & Plans
                </Link>
                <Link href="/admin/ai-privacy" className={`block hover:text-orange-500 py-1 ${isActive("/admin/ai-privacy") ? "text-orange-500" : ""}`}>
                  AI & Privacy Controls
                </Link>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-700">
            <Link href="/admin/helpdesk" className="block hover:text-orange-500 py-2">
              Support / Helpdesk
            </Link>
            <button
              onClick={handleLogout}
              className="block text-left hover:text-orange-500 w-full py-2"
            >
              Log Out
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

