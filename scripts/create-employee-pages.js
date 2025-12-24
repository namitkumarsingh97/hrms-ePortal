const fs = require('fs');
const path = require('path');

const routes = [
  'dashboard',
  'check-in',
  'career-gps',
  'skills-learning',
  'internal-opportunities',
  'mentorship',
  'performance',
  'goals-okrs',
  'feedback',
  'reviews',
  'compensation-clarity',
  'payroll',
  'benefits',
  'esops',
  'attendance',
  'leaves',
  'focus-time',
  'wellbeing',
  'documents',
  'letters-requests',
  'digital-id',
  'team',
  'org-view',
  'recognition',
  'trust-voice',
  'anonymous-speakup',
  'policies',
  'ethics-helpdesk',
  'my-rules',
  'smart-requests',
  'reminders',
  'profile',
  'preferences',
  'security',
  'notifications',
  'helpdesk',
];

const componentMap = {
  'dashboard': 'EmployeeDashboard',
  'attendance': 'EmployeeAttendance',
  'leaves': 'EmployeeLeaves',
  'payroll': 'EmployeePayroll',
  'documents': 'EmployeeDocuments',
  'helpdesk': 'EmployeeHelpdesk',
  'profile': 'EmployeeProfile',
  'performance': 'EmployeePerformanceReview',
  'career-gps': 'EmployeeCareerGPS',
  'trust-voice': 'EmployeeTrustVoice',
};

const titles = {
  'check-in': 'Daily Check-In',
  'career-gps': 'Career GPS',
  'skills-learning': 'Skills & Learning',
  'internal-opportunities': 'Internal Opportunities',
  'mentorship': 'Mentorship',
  'performance': 'My Performance',
  'goals-okrs': 'Goals & OKRs',
  'feedback': 'Feedback',
  'reviews': 'Reviews',
  'compensation-clarity': 'Compensation Clarity',
  'payroll': 'Payslips',
  'benefits': 'Benefits',
  'esops': 'ESOPs',
  'attendance': 'Attendance',
  'leaves': 'Leave',
  'focus-time': 'Focus Time',
  'wellbeing': 'Wellbeing',
  'documents': 'My Documents',
  'letters-requests': 'Letters & Requests',
  'digital-id': 'Digital ID',
  'team': 'My Team',
  'org-view': 'Organization View',
  'recognition': 'Recognition',
  'trust-voice': 'Feedback',
  'anonymous-speakup': 'Anonymous Speak-Up',
  'policies': 'Policies',
  'ethics-helpdesk': 'Ethics Helpdesk',
  'my-rules': 'My Rules',
  'smart-requests': 'Smart Requests',
  'reminders': 'Reminders',
  'profile': 'Profile',
  'preferences': 'Preferences',
  'security': 'Security',
  'notifications': 'Notifications',
  'helpdesk': 'Helpdesk / Support',
};

routes.forEach(route => {
  const dir = path.join(__dirname, '..', 'app', 'employee', route);
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
        <p className="text-gray-600 mt-2">${title} management</p>
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
        <p className="text-gray-600 mt-2">${title} management</p>
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

console.log('\n✅ All employee pages created!');

