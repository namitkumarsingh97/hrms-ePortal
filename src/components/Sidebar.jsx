import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
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
                <Link to="/admin/command-center" className="block hover:text-orange-500 py-1">
                  Command Center
                </Link>
                <Link to="/admin/org-health" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/org-graph" className="block hover:text-orange-500 py-1">
                  Organization Graph
                </Link>
                <Link to="/admin/teams-roles" className="block hover:text-orange-500 py-1">
                  Teams & Roles
                </Link>
                <Link to="/admin/skills-capabilities" className="block hover:text-orange-500 py-1">
                  Skills & Capabilities
                </Link>
                <Link to="/admin/workforce-planning" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/smart-hiring" className="block hover:text-orange-500 py-1">
                  Smart Hiring
                </Link>
                <Link to="/admin/talent-marketplace" className="block hover:text-orange-500 py-1">
                  Talent Marketplace
                </Link>
                <Link to="/admin/onboarding" className="block hover:text-orange-500 py-1">
                  Onboarding
                </Link>
                <Link to="/admin/offboarding" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/performance-intelligence" className="block hover:text-orange-500 py-1">
                  Performance Intelligence
                </Link>
                <Link to="/admin/performance" className="block hover:text-orange-500 py-1">
                  Reviews & Feedback
                </Link>
                <Link to="/admin/manager-effectiveness" className="block hover:text-orange-500 py-1">
                  Manager Effectiveness
                </Link>
                <Link to="/admin/high-potential" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/payroll" className="block hover:text-orange-500 py-1">
                  Payroll
                </Link>
                <Link to="/admin/compensation-planning" className="block hover:text-orange-500 py-1">
                  Compensation Planning
                </Link>
                <Link to="/admin/pay-equity" className="block hover:text-orange-500 py-1">
                  Pay Equity
                </Link>
                <Link to="/admin/benefits-esops" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/attendance" className="block hover:text-orange-500 py-1">
                  Attendance & Time
                </Link>
                <Link to="/admin/leaves" className="block hover:text-orange-500 py-1">
                  Leave Management
                </Link>
                <Link to="/admin/workload-burnout" className="block hover:text-orange-500 py-1">
                  Workload & Burnout
                </Link>
                <Link to="/admin/wellbeing-insights" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/culture-lab" className="block hover:text-orange-500 py-1">
                  Culture Analytics
                </Link>
                <Link to="/admin/engagement-surveys" className="block hover:text-orange-500 py-1">
                  Engagement Surveys
                </Link>
                <Link to="/admin/trust-ethics" className="block hover:text-orange-500 py-1">
                  Trust & Ethics
                </Link>
                <Link to="/admin/anonymous-feedback" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/automation-studio" className="block hover:text-orange-500 py-1">
                  Workflow Builder
                </Link>
                <Link to="/admin/policy-engine" className="block hover:text-orange-500 py-1">
                  Policy Engine
                </Link>
                <Link to="/admin/approval-chains" className="block hover:text-orange-500 py-1">
                  Approval Chains
                </Link>
                <Link to="/admin/smart-alerts" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/reports" className="block hover:text-orange-500 py-1">
                  HR Dashboards
                </Link>
                <Link to="/admin/predictive-insights" className="block hover:text-orange-500 py-1">
                  Predictive Insights
                </Link>
                <Link to="/admin/custom-reports" className="block hover:text-orange-500 py-1">
                  Custom Reports
                </Link>
                <Link to="/admin/data-explorer" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/legal-statutory" className="block hover:text-orange-500 py-1">
                  Legal & Statutory
                </Link>
                <Link to="/admin/audit-logs" className="block hover:text-orange-500 py-1">
                  Audit Logs
                </Link>
                <Link to="/admin/document-vault" className="block hover:text-orange-500 py-1">
                  Document Vault
                </Link>
                <Link to="/admin/access-control" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/connected-apps" className="block hover:text-orange-500 py-1">
                  Connected Apps
                </Link>
                <Link to="/admin/api-webhooks" className="block hover:text-orange-500 py-1">
                  API & Webhooks
                </Link>
                <Link to="/admin/data-sync" className="block hover:text-orange-500 py-1">
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
                <Link to="/admin/settings" className="block hover:text-orange-500 py-1">
                  Organization Settings
                </Link>
                <Link to="/admin/roles-permissions" className="block hover:text-orange-500 py-1">
                  Roles & Permissions
                </Link>
                <Link to="/admin/billing" className="block hover:text-orange-500 py-1">
                  Billing & Plans
                </Link>
                <Link to="/admin/ai-privacy" className="block hover:text-orange-500 py-1">
                  AI & Privacy Controls
                </Link>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-700">
            <Link to="/admin/helpdesk" className="block hover:text-orange-500 py-2">
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
