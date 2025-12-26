import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";

import Layout from "../components/Layout";
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

// New Admin pages
import AdminCommandCenter from "../pages/AdminCommandCenter";
import AdminOrgGraph from "../pages/AdminOrgGraph";
import AdminSmartHiring from "../pages/AdminSmartHiring";
import AdminPerformanceIntelligence from "../pages/AdminPerformanceIntelligence";
import AdminCompensationEngine from "../pages/AdminCompensationEngine";
import AdminWorkforcePlanning from "../pages/AdminWorkforcePlanning";
import AdminCultureLab from "../pages/AdminCultureLab";
import AdminAutomationStudio from "../pages/AdminAutomationStudio";

import PagePlaceholder from "../pages/PagePlaceholder";

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

// New Employee pages
import EmployeeCareerGPS from "../pages/EmployeeCareerGPS";
import EmployeeTrustVoice from "../pages/EmployeeTrustVoice";

import PaymentSuccess from "../pages/PaymentSuccess";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* PhonePe redirect target */}
      <Route path="/payment-success" element={<PaymentSuccess />} />

      {/* Admin routes */}
      <Route
        path="/admin/*"
        element={
          <Layout sidebarType="admin">
            <div className="p-4 md:p-6">
              <Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
                
                {/* Overview */}
                <Route path="command-center" element={<AdminCommandCenter />} />
                <Route path="org-health" element={<PagePlaceholder title="Org Health" description="Organization health metrics and insights" />} />
                
                {/* Organization */}
                <Route path="org-graph" element={<AdminOrgGraph />} />
                <Route path="teams-roles" element={<PagePlaceholder title="Teams & Roles" description="Manage teams and organizational roles" />} />
                <Route path="skills-capabilities" element={<PagePlaceholder title="Skills & Capabilities" description="Track and manage organizational skills" />} />
                <Route path="workforce-planning" element={<AdminWorkforcePlanning />} />
                
                {/* Talent */}
                <Route path="smart-hiring" element={<AdminSmartHiring />} />
                <Route path="talent-marketplace" element={<PagePlaceholder title="Talent Marketplace" description="Internal talent mobility and opportunities" />} />
                <Route path="onboarding" element={<PagePlaceholder title="Onboarding" description="Employee onboarding process" />} />
                <Route path="offboarding" element={<AdminExitProcess />} />
                
                {/* Performance */}
                <Route path="performance-intelligence" element={<AdminPerformanceIntelligence />} />
                <Route path="performance" element={<AdminPerformanceReview />} />
                <Route path="manager-effectiveness" element={<PagePlaceholder title="Manager Effectiveness" description="Manager quality and effectiveness metrics" />} />
                <Route path="high-potential" element={<PagePlaceholder title="High-Potential Employees" description="Identify and develop high-potential talent" />} />
                
                {/* Compensation */}
                <Route path="payroll" element={<AdminPayroll />} />
                <Route path="compensation-planning" element={<PagePlaceholder title="Compensation Planning" description="Plan and manage compensation structures" />} />
                <Route path="compensation-engine" element={<AdminCompensationEngine />} />
                <Route path="pay-equity" element={<PagePlaceholder title="Pay Equity" description="Pay equity analysis and insights" />} />
                <Route path="benefits-esops" element={<PagePlaceholder title="Benefits & ESOPs" description="Manage employee benefits and stock options" />} />
                
                {/* Time & Wellbeing */}
                <Route path="attendance" element={<Attendance />} />
                <Route path="leaves" element={<Leaves />} />
                <Route path="workload-burnout" element={<PagePlaceholder title="Workload & Burnout" description="Monitor team workload and burnout risks" />} />
                <Route path="wellbeing-insights" element={<PagePlaceholder title="Wellbeing Insights" description="Employee wellbeing analytics and insights" />} />
                
                {/* Culture & Trust */}
                <Route path="culture-lab" element={<AdminCultureLab />} />
                <Route path="engagement-surveys" element={<PagePlaceholder title="Engagement Surveys" description="Employee engagement surveys and results" />} />
                <Route path="trust-ethics" element={<PagePlaceholder title="Trust & Ethics" description="Trust metrics and ethics compliance" />} />
                <Route path="anonymous-feedback" element={<PagePlaceholder title="Anonymous Feedback" description="Anonymous employee feedback channel" />} />
                
                {/* Automation */}
                <Route path="automation-studio" element={<AdminAutomationStudio />} />
                <Route path="policy-engine" element={<PagePlaceholder title="Policy Engine" description="Manage HR policies and rules" />} />
                <Route path="approval-chains" element={<PagePlaceholder title="Approval Chains" description="Configure workflow approval chains" />} />
                <Route path="smart-alerts" element={<PagePlaceholder title="Smart Alerts" description="Configure intelligent alerts and notifications" />} />
                
                {/* Analytics */}
                <Route path="reports" element={<Reports />} />
                <Route path="predictive-insights" element={<PagePlaceholder title="Predictive Insights" description="AI-powered predictive analytics" />} />
                <Route path="custom-reports" element={<PagePlaceholder title="Custom Reports" description="Create custom HR reports" />} />
                <Route path="data-explorer" element={<PagePlaceholder title="Data Explorer" description="Explore and analyze HR data" />} />
                
                {/* Compliance */}
                <Route path="legal-statutory" element={<PagePlaceholder title="Legal & Statutory" description="Legal compliance and statutory requirements" />} />
                <Route path="audit-logs" element={<PagePlaceholder title="Audit Logs" description="System audit logs and activity tracking" />} />
                <Route path="document-vault" element={<PagePlaceholder title="Document Vault" description="Secure document storage and management" />} />
                <Route path="access-control" element={<PagePlaceholder title="Access Control" description="Manage user access and permissions" />} />
                
                {/* Integrations */}
                <Route path="connected-apps" element={<PagePlaceholder title="Connected Apps" description="Third-party app integrations" />} />
                <Route path="api-webhooks" element={<PagePlaceholder title="API & Webhooks" description="API configuration and webhook management" />} />
                <Route path="data-sync" element={<PagePlaceholder title="Data Sync" description="Data synchronization settings" />} />
                
                {/* Settings */}
                <Route path="settings" element={<Settings />} />
                <Route path="roles-permissions" element={<PagePlaceholder title="Roles & Permissions" description="Manage user roles and permissions" />} />
                <Route path="billing" element={<PagePlaceholder title="Billing & Plans" description="Billing and subscription management" />} />
                <Route path="ai-privacy" element={<PagePlaceholder title="AI & Privacy Controls" description="AI settings and privacy controls" />} />
                
                {/* Legacy routes */}
                <Route path="employees" element={<Employees />} />
                <Route path="tax-declarations" element={<AdminTaxDeclarations />} />
                <Route path="asset-allocation" element={<AdminAssetAllocation />} />
                <Route path="exit-process" element={<AdminExitProcess />} />
                <Route path="announcements" element={<AdminAnnouncements />} />
                <Route path="training" element={<AdminTrainingCourses />} />
                <Route path="job-openings" element={<AdminJobOpenings />} />
                <Route path="shift-schedule" element={<AdminShiftSchedule />} />
                <Route path="helpdesk" element={<AdminHelpdesk />} />
                <Route path="documents" element={<AdminDocuments />} />
                <Route path="birthdays" element={<AdminBirthdays />} />
              </Routes>
            </div>
          </Layout>
        }
      />
      
      {/* Employee routes */}
      <Route
        path="/employee/*"
        element={
          <Layout sidebarType="employee">
            <div className="p-4 md:p-6">
              <Routes>
                <Route path="dashboard" element={<EmployeeDashboard />} />
                <Route path="check-in" element={<PagePlaceholder title="Daily Check-In" description="Daily mood and energy check-in" />} />
                
                {/* Career */}
                <Route path="career-gps" element={<EmployeeCareerGPS />} />
                <Route path="skills-learning" element={<PagePlaceholder title="Skills & Learning" description="Skill development and learning resources" />} />
                <Route path="internal-opportunities" element={<EmployeeJobOpenings />} />
                <Route path="mentorship" element={<PagePlaceholder title="Mentorship" description="Mentorship programs and connections" />} />
                
                {/* Performance */}
                <Route path="performance" element={<EmployeePerformanceReview />} />
                <Route path="goals-okrs" element={<PagePlaceholder title="Goals & OKRs" description="Set and track goals and OKRs" />} />
                <Route path="feedback" element={<PagePlaceholder title="Feedback" description="Give and receive feedback" />} />
                <Route path="reviews" element={<EmployeePerformanceReview />} />
                
                {/* Pay & Benefits */}
                <Route path="compensation-clarity" element={<PagePlaceholder title="Compensation Clarity" description="Transparent compensation breakdown and insights" />} />
                <Route path="payroll" element={<EmployeePayroll />} />
                <Route path="benefits" element={<PagePlaceholder title="Benefits" description="Employee benefits overview" />} />
                <Route path="esops" element={<PagePlaceholder title="ESOPs" description="Employee stock option plans" />} />
                
                {/* Time & Wellbeing */}
                <Route path="attendance" element={<EmployeeAttendance />} />
                <Route path="leaves" element={<EmployeeLeaves />} />
                <Route path="focus-time" element={<PagePlaceholder title="Focus Time" description="Focus time analytics and insights" />} />
                <Route path="wellbeing" element={<PagePlaceholder title="Wellbeing" description="Personal wellbeing tracking and resources" />} />
                
                {/* Documents */}
                <Route path="documents" element={<EmployeeDocuments />} />
                <Route path="letters-requests" element={<PagePlaceholder title="Letters & Requests" description="Request letters and documents" />} />
                <Route path="digital-id" element={<PagePlaceholder title="Digital ID" description="Digital employee ID card" />} />
                
                {/* Team */}
                <Route path="team" element={<PagePlaceholder title="My Team" description="View team members and collaboration" />} />
                <Route path="org-view" element={<PagePlaceholder title="Organization View" description="View organizational structure" />} />
                <Route path="recognition" element={<PagePlaceholder title="Recognition" description="Team recognition and achievements" />} />
                
                {/* Voice & Trust */}
                <Route path="trust-voice" element={<EmployeeTrustVoice />} />
                <Route path="anonymous-speakup" element={<PagePlaceholder title="Anonymous Speak-Up" description="Anonymous feedback and reporting" />} />
                <Route path="policies" element={<PagePlaceholder title="Policies" description="Company policies and guidelines" />} />
                <Route path="ethics-helpdesk" element={<PagePlaceholder title="Ethics Helpdesk" description="Ethics and compliance support" />} />
                
                {/* Automation */}
                <Route path="my-rules" element={<PagePlaceholder title="My Rules" description="Personal automation rules" />} />
                <Route path="smart-requests" element={<PagePlaceholder title="Smart Requests" description="Intelligent request automation" />} />
                <Route path="reminders" element={<PagePlaceholder title="Reminders" description="Smart reminders and notifications" />} />
                
                {/* Settings */}
                <Route path="profile" element={<EmployeeProfile />} />
                <Route path="preferences" element={<PagePlaceholder title="Preferences" description="Personal preferences and settings" />} />
                <Route path="security" element={<PagePlaceholder title="Security" description="Account security settings" />} />
                <Route path="notifications" element={<PagePlaceholder title="Notifications" description="Notification preferences" />} />
                
                {/* Legacy routes */}
                <Route path="tasks" element={<EmployeeTasks />} />
                <Route path="helpdesk" element={<EmployeeHelpdesk />} />
                <Route path="tax-declaration" element={<EmployeeTaxDeclaration />} />
                <Route path="expense-claims" element={<EmployeeExpenseClaim />} />
                <Route path="asset-allocation" element={<EmployeeAssetAllocation />} />
                <Route path="exit-process" element={<EmployeeExitProcess />} />
                <Route path="training" element={<EmployeeTrainingCourse />} />
                <Route path="job-openings" element={<EmployeeJobOpenings />} />
                <Route path="shift-schedule" element={<EmployeeShiftSchedule />} />
                <Route path="announcements" element={<EmployeeAnnouncement />} />
                <Route path="birthdays" element={<EmployeeBirthdays />} />
              </Routes>
            </div>
          </Layout>
        }
      />
    </Routes>
  );
}
