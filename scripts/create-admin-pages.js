const fs = require('fs');
const path = require('path');

const routes = [
  'command-center',
  'org-health',
  'org-graph',
  'teams-roles',
  'skills-capabilities',
  'workforce-planning',
  'smart-hiring',
  'talent-marketplace',
  'onboarding',
  'offboarding',
  'performance-intelligence',
  'performance',
  'manager-effectiveness',
  'high-potential',
  'payroll',
  'compensation-planning',
  'compensation-engine',
  'benefits-esops',
  'attendance',
  'leaves',
  'workload-burnout',
  'wellbeing-insights',
  'culture-lab',
  'engagement-surveys',
  'trust-ethics',
  'anonymous-feedback',
  'automation-studio',
  'policy-engine',
  'approval-chains',
  'smart-alerts',
  'reports',
  'predictive-insights',
  'custom-reports',
  'data-explorer',
  'legal-statutory',
  'audit-logs',
  'document-vault',
  'access-control',
  'connected-apps',
  'api-webhooks',
  'data-sync',
  'settings',
  'roles-permissions',
  'billing',
  'ai-privacy',
  'profile',
  'helpdesk',
];

const componentMap = {
  'command-center': 'AdminCommandCenter',
  'org-graph': 'AdminOrgGraph',
  'smart-hiring': 'AdminSmartHiring',
  'performance-intelligence': 'AdminPerformanceIntelligence',
  'compensation-engine': 'AdminCompensationEngine',
  'workforce-planning': 'AdminWorkforcePlanning',
  'culture-lab': 'AdminCultureLab',
  'automation-studio': 'AdminAutomationStudio',
  'offboarding': 'AdminExitProcess',
  'performance': 'AdminPerformanceReview',
  'payroll': 'AdminPayroll',
  'attendance': 'Attendance',
  'leaves': 'Leaves',
  'reports': 'Reports',
  'settings': 'Settings',
  'helpdesk': 'AdminHelpdesk',
};

const titles = {
  'command-center': 'Command Center',
  'org-health': 'Org Health',
  'org-graph': 'Organization Graph',
  'teams-roles': 'Teams & Roles',
  'skills-capabilities': 'Skills & Capabilities',
  'workforce-planning': 'Workforce Planning',
  'smart-hiring': 'Smart Hiring',
  'talent-marketplace': 'Talent Marketplace',
  'onboarding': 'Onboarding',
  'offboarding': 'Offboarding',
  'performance-intelligence': 'Performance Intelligence',
  'performance': 'Performance Reviews & Feedback',
  'manager-effectiveness': 'Manager Effectiveness',
  'high-potential': 'High-Potential',
  'payroll': 'Payroll',
  'compensation-planning': 'Compensation Planning',
  'compensation-engine': 'Pay Equity',
  'benefits-esops': 'Benefits & ESOPs',
  'attendance': 'Attendance & Time',
  'leaves': 'Leave Management',
  'workload-burnout': 'Workload & Burnout',
  'wellbeing-insights': 'Wellbeing Insights',
  'culture-lab': 'Culture Analytics',
  'engagement-surveys': 'Engagement Surveys',
  'trust-ethics': 'Trust & Ethics',
  'anonymous-feedback': 'Anonymous Feedback',
  'automation-studio': 'Automation Studio',
  'policy-engine': 'Policy Engine',
  'approval-chains': 'Approval Chains',
  'smart-alerts': 'Smart Alerts',
  'reports': 'HR Dashboards',
  'predictive-insights': 'Predictive Insights',
  'custom-reports': 'Custom Reports',
  'data-explorer': 'Data Explorer',
  'legal-statutory': 'Legal & Statutory',
  'audit-logs': 'Audit Logs',
  'document-vault': 'Document Vault',
  'access-control': 'Access Control',
  'connected-apps': 'Connected Apps',
  'api-webhooks': 'API & Webhooks',
  'data-sync': 'Data Sync',
  'settings': 'Organization Settings',
  'roles-permissions': 'Roles & Permissions',
  'billing': 'Billing & Plans',
  'ai-privacy': 'AI & Privacy Controls',
  'profile': 'Profile',
  'helpdesk': 'Helpdesk',
};

routes.forEach(route => {
  const dir = path.join(__dirname, '..', 'app', 'admin', route);
  const filePath = path.join(dir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`✓ ${route}/page.tsx already exists`);
    return;
  }
  
  const componentName = componentMap[route];
  const title = titles[route] || route;
  
  let content;
  if (componentName) {
    // Use existing component - check if it exists
    const componentPath = path.join(__dirname, '..', 'src', 'pages', `${componentName}.jsx`);
    if (fs.existsSync(componentPath)) {
      content = `"use client";

import ${componentName} from "../../../src/pages/${componentName}";

export default function ${route.charAt(0).toUpperCase() + route.slice(1).replace(/-/g, '')}Page() {
  return (
    <div className="p-4 md:p-6">
      <${componentName} />
    </div>
  );
}
`;
    } else {
      // Component doesn't exist, create placeholder
      content = `"use client";

import React from "react";

export default function ${route.charAt(0).toUpperCase() + route.slice(1).replace(/-/g, '')}Page() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">${title}</h1>
        <p className="text-gray-600 mt-2">${title} management and insights</p>
      </div>
      <div className="bg-white rounded-lg shadow p-8">
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">🚧</div>
          <div className="text-xl font-medium text-gray-700 mb-2">Feature Coming Soon</div>
          <div className="text-sm text-gray-500">This section is under development and will be available soon.</div>
        </div>
      </div>
    </div>
  );
}
`;
    }
  } else {
    // Create placeholder
    content = `"use client";

import React from "react";

export default function ${route.charAt(0).toUpperCase() + route.slice(1).replace(/-/g, '')}Page() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">${title}</h1>
        <p className="text-gray-600 mt-2">${title} management and insights</p>
      </div>
      <div className="bg-white rounded-lg shadow p-8">
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">🚧</div>
          <div className="text-xl font-medium text-gray-700 mb-2">Feature Coming Soon</div>
          <div className="text-sm text-gray-500">This section is under development and will be available soon.</div>
        </div>
      </div>
    </div>
  );
}
`;
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`✓ Created ${route}/page.tsx`);
});

console.log('\n✅ All admin pages created!');

