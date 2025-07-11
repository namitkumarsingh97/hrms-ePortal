import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";

import Sidebar from "../components/Sidebar";
import AdminDashboard from "../pages/AdminDashboard";
import Settings from "../pages/Settings";
import Leaves from "../pages/Leaves";
import Attendance from "../pages/Attendance";
import Employees from "../pages/Employees";
import Reports from "../pages/Reports";
import AdminPayroll from "../pages/AdminPayroll";
import AdminTaxDeclarations from "../pages/AdminTaxDeclarations";
import AdminAssetAllocation from "../pages/AdminAssetAllocation";
import AdminExitProcess from "../pages/AdminExitProcess";
import AdminAnnouncements from "../pages/AdminAnnouncements";
import AdminTrainingCourses from "../pages/AdminTrainingCourses";
import AdminPerformanceReview from "../pages/AdminPerformanceReview";
import AdminJobOpenings from "../pages/AdminJobOpenings";
import AdminShiftSchedule from "../pages/AdminShiftSchedule";
import AdminHelpdesk from "../pages/AdminHelpdesk";
import AdminDocuments from "../pages/AdminDocuments";
import AdminBirthdays from "../pages/AdminBirthdays";

import EmployeeSidebar from "../components/EmployeeSidebar";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import EmployeeAttendance from "../pages/EmployeeAttendance";
import EmployeeLeaves from "../pages/EmployeeLeaves";
import EmployeeTasks from "../pages/EmployeeTasks";
import EmployeeProfile from "../pages/EmployeeProfile";
import EmployeePayroll from "../pages/EmployeePayroll";
import EmployeeDocuments from "../pages/EmployeeDocuments";
import EmployeeHelpdesk from "../pages/EmployeeHelpdesk";
import EmployeeTaxDeclaration from "../pages/EmployeeTaxDeclaration";
import EmployeeExpenseClaim from "../pages/EmployeeExpenseClaim";
import EmployeeAssetAllocation from "../pages/EmployeeAssetAllocation";
import EmployeeExitProcess from "../pages/EmployeeExitProcess";
import EmployeeTrainingCourse from "../pages/EmployeeTrainingCourse";
import EmployeePerformanceReview from "../pages/EmployeePerformanceReview";
import EmployeeJobOpenings from "../pages/EmployeeJobOpenings";
import EmployeeShiftSchedule from "../pages/EmployeeShiftSchedule";
import EmployeeAnnouncement from "../pages/EmployeeAnnouncement";
import EmployeeBirthdays from "../pages/EmployeeBirthdays";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* Admin routes */}
      <Route
        path="/admin/*"
        element={
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 bg-gray-100 p-6">
              <Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="attendance" element={<Attendance />} />
                <Route path="leaves" element={<Leaves />} />
                <Route path="employees" element={<Employees />} />
                <Route path="payroll" element={<AdminPayroll />} />
                <Route
                  path="tax-declarations"
                  element={<AdminTaxDeclarations />}
                />
                <Route
                  path="asset-allocation"
                  element={<AdminAssetAllocation />}
                />
                <Route path="exit-process" element={<AdminExitProcess />} />
                <Route path="announcements" element={<AdminAnnouncements />} />
                <Route path="training" element={<AdminTrainingCourses />} />
                <Route
                  path="performance"
                  element={<AdminPerformanceReview />}
                />
                <Route path="job-openings" element={<AdminJobOpenings />} />
                <Route path="shift-schedule" element={<AdminShiftSchedule />} />
                <Route path="reports" element={<Reports />} />
                <Route path="helpdesk" element={<AdminHelpdesk />} />
                <Route path="documents" element={<AdminDocuments />} />
                <Route path="birthdays" element={<AdminBirthdays />} />
                <Route path="settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        }
      />

      {/* Employee routes */}
      <Route
        path="/employee/*"
        element={
          <div className="flex min-h-screen">
            <EmployeeSidebar />
            <main className="flex-1 bg-gray-100 p-6">
              <Routes>
                <Route path="dashboard" element={<EmployeeDashboard />} />
                <Route path="attendance" element={<EmployeeAttendance />} />
                <Route path="leaves" element={<EmployeeLeaves />} />
                <Route path="tasks" element={<EmployeeTasks />} />
                <Route path="documents" element={<EmployeeDocuments />} />
                <Route path="payroll" element={<EmployeePayroll />} />
                <Route path="helpdesk" element={<EmployeeHelpdesk />} />
                <Route path="profile" element={<EmployeeProfile />} />
                <Route
                  path="tax-declaration"
                  element={<EmployeeTaxDeclaration />}
                />
                <Route
                  path="expense-claims"
                  element={<EmployeeExpenseClaim />}
                />
                <Route
                  path="asset-allocation"
                  element={<EmployeeAssetAllocation />}
                />
                <Route path="exit-process" element={<EmployeeExitProcess />} />
                <Route path="training" element={<EmployeeTrainingCourse />} />
                <Route
                  path="performance"
                  element={<EmployeePerformanceReview />}
                />
                <Route path="job-openings" element={<EmployeeJobOpenings />} />
                <Route
                  path="shift-schedule"
                  element={<EmployeeShiftSchedule />}
                />
                <Route
                  path="announcements"
                  element={<EmployeeAnnouncement />}
                />
                <Route path="birthdays" element={<EmployeeBirthdays />} />
              </Routes>
            </main>
          </div>
        }
      />
    </Routes>
  );
}
