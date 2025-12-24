import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TopHeader = ({ userName, userRole, companyName, onCompanyChange }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCompanyModal, setShowCompanyModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem("employeeId");
    localStorage.removeItem("companyId");
    localStorage.removeItem("companyName");
    navigate("/login");
  };

  const getRoleBadgeColor = (role) => {
    switch (role?.toLowerCase()) {
      case "global_admin":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "admin":
      case "hr":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "employee":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getRoleDisplayName = (role) => {
    switch (role?.toLowerCase()) {
      case "global_admin":
        return "Global Admin";
      case "admin":
      case "hr":
        return "Admin / HR";
      case "employee":
        return "Employee";
      default:
        return role || "User";
    }
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
        <div className="px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Company Name (Clickable) */}
            <div
              onClick={() => setShowCompanyModal(true)}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {companyName?.charAt(0)?.toUpperCase() || "C"}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{companyName || "Company Name"}</div>
                <div className="text-xs text-gray-500">Click to switch</div>
              </div>
            </div>

            {/* Right side - User Info & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="text-right hidden md:block">
                  <div className="text-sm font-semibold text-gray-900">{userName || "User Name"}</div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded border ${getRoleBadgeColor(userRole)}`}>
                      {getRoleDisplayName(userRole)}
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {userName?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform ${showDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowDropdown(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                    <div className="p-3 border-b border-gray-200">
                      <div className="text-sm font-semibold text-gray-900">{userName}</div>
                      <div className="text-xs text-gray-500 mt-1">{userRole || "No role assigned"}</div>
                      <div className="text-xs text-gray-500">{companyName}</div>
                    </div>
                    <div className="p-1">
                      <button
                        onClick={() => {
                          setShowDropdown(false);
                          setShowCompanyModal(true);
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                      >
                        Switch Company
                      </button>
                      <button
                        onClick={() => {
                          setShowDropdown(false);
                          navigate("/admin/profile" || "/employee/profile");
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                      >
                        Profile Settings
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Company Switcher Modal */}
      {showCompanyModal && (
        <CompanySwitcherModal
          currentCompany={companyName}
          onClose={() => setShowCompanyModal(false)}
          onSwitch={onCompanyChange}
        />
      )}
    </>
  );
};

// Company Switcher Modal Component
const CompanySwitcherModal = ({ currentCompany, onClose, onSwitch }) => {
  const [companies] = useState([
    { id: 1, name: "CodeCraft Technologies", code: "CDCF001" },
    { id: 2, name: "CloudScale Solutions", code: "CLDS002" },
    { id: 3, name: "DataSync Systems", code: "DTSY003" },
    { id: 4, name: "DevOps Innovations", code: "DVOP004" },
    { id: 5, name: "AI Dynamics Pvt Ltd", code: "AIDY005" },
    { id: 6, name: "Quantum Software Services", code: "QTUM006" },
    { id: 7, name: "CyberGuard IT Solutions", code: "CYBG007" },
    { id: 8, name: "TechNova Consulting", code: "TCNV008" },
    { id: 9, name: "PixelForge Digital", code: "PXFG009" },
    { id: 10, name: "SecureNet Technologies", code: "SCNT010" },
  ]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSwitch = () => {
    if (selectedCompany) {
      localStorage.setItem("companyId", selectedCompany.id.toString());
      localStorage.setItem("companyName", selectedCompany.name);
      onSwitch(selectedCompany);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Switch Company</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Company
          </label>
          <select
            value={selectedCompany?.id || ""}
            onChange={(e) => {
              const company = companies.find(c => c.id === parseInt(e.target.value));
              setSelectedCompany(company);
            }}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Choose a company...</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name} ({company.code})
              </option>
            ))}
          </select>
        </div>

        {selectedCompany && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
            <div className="text-sm text-gray-600">Selected:</div>
            <div className="font-semibold text-gray-900">{selectedCompany.name}</div>
            <div className="text-xs text-gray-500">Code: {selectedCompany.code}</div>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSwitch}
            disabled={!selectedCompany}
            className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Switch
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

