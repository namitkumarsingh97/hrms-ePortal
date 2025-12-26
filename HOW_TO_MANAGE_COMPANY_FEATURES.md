# How to Manage Company Features

## 🎯 Overview

This is a **custom B2B SaaS product** where you pitch to companies individually and configure features per company based on your deals. This is NOT a self-serve subscription model.

## 📝 Where to Configure Features

### Main Configuration File: `src/config/companyFeatures.ts`

This is your **master control panel** for managing features per company.

```typescript
// Example: When you make a deal with a new company
{
  companyName: "New Company Name",
  companyCode: "NEWC001",
  enabledFeatures: [
    "command_center",
    "org_graph",
    "smart_hiring",
    "performance_intelligence",
    // Add only the features you agreed to provide
  ],
}
```

## 🔧 How to Add Features to a Company

1. Open `src/config/companyFeatures.ts`
2. Find the company in `COMPANY_FEATURES` array
3. Add feature keys to `enabledFeatures` array
4. Save the file
5. The feature will be immediately available for that company

### Available Feature Keys:

```typescript
"command_center"           // Command Center dashboard
"org_health"              // Organization Health metrics
"org_graph"               // Organization Graph
"workforce_planning"      // Workforce Planning
"smart_hiring"            // Smart Hiring
"talent_marketplace"      // Talent Marketplace
"performance_intelligence" // Performance Intelligence
"manager_effectiveness"   // Manager Effectiveness
"high_potential"          // High-Potential tracking
"compensation_engine"     // Pay Equity & Compensation
"workload_burnout"        // Workload & Burnout Analysis
"wellbeing_insights"      // Wellbeing Insights
"culture_lab"             // Culture Analytics
"automation_studio"       // Automation Studio
"data_explorer"           // Data Explorer
"api_webhooks"            // API & Webhooks
```

## 📋 Example Workflow

### Scenario: New Deal with "TechStart Inc"

1. **After closing the deal**, open `src/config/companyFeatures.ts`

2. **Add new company configuration:**
```typescript
{
  companyName: "TechStart Inc",
  companyCode: "TSTI001",
  enabledFeatures: [
    "org_graph",              // Basic org chart
    "performance_intelligence", // Performance tracking
    "smart_hiring",           // Hiring features
    // Add only what you agreed to in the deal
  ],
}
```

3. **If they upgrade later**, just add more features:
```typescript
enabledFeatures: [
  "org_graph",
  "performance_intelligence",
  "smart_hiring",
  "command_center",        // ← Added after upgrade
  "compensation_engine",   // ← Added after upgrade
]
```

4. **If they downgrade**, remove features:
```typescript
enabledFeatures: [
  "org_graph",
  "performance_intelligence",
  // "smart_hiring",  ← Removed
]
```

## 🔒 How Feature Gating Works

### In Pages:

```typescript
import { CompanyFeatureGate } from "../../../src/components/CompanyFeatureGate";
import { useCompanyFeatures } from "../../../src/hooks/useCompanyFeatures";

export default function SomePage() {
  const { companyName } = useCompanyFeatures();
  
  return (
    <CompanyFeatureGate companyName={companyName} feature="command_center">
      {/* Page content - only shows if feature is enabled */}
    </CompanyFeatureGate>
  );
}
```

### In Sidebar (to show badges):

```typescript
import { CompanyFeatureBadge } from "../../../src/components/CompanyFeatureGate";
import { useCompanyFeatures } from "../../../src/hooks/useCompanyFeatures";

const { companyName } = useCompanyFeatures();

<Link href="/admin/some-feature">
  Feature Name
  <CompanyFeatureBadge companyName={companyName} feature="some_feature" />
</Link>
```

## 💼 Business Process

1. **Sales/Pitching** → Close deal with company
2. **Configuration** → Add company to `companyFeatures.ts` with agreed features
3. **Setup** → Send them login link/access
4. **Billing** → Monthly/Quarterly payment (separate process)
5. **Updates** → Add/remove features as per renewals or new agreements

## 🎨 Customization Per Company

You can also add custom settings per company:

```typescript
{
  companyName: "CodeCraft Technologies",
  companyCode: "CDCF001",
  enabledFeatures: [...],
  customSettings: {
    maxEmployees: 500,
    allowedIntegrations: ["Slack", "Jira"],
    customBranding: true,
  },
}
```

## 📍 File Location

- **Configuration**: `src/config/companyFeatures.ts`
- **Feature Gate Component**: `src/components/CompanyFeatureGate.tsx`
- **Hook**: `src/hooks/useCompanyFeatures.ts`

## ⚠️ Important Notes

- This is a **centralized configuration** - one file controls all companies
- Changes take effect immediately (no restart needed in dev mode)
- For production, you might want to move this to a database later
- Always update `companyFeatures.ts` when making deals or renewals

## 🔄 Future Enhancement

When you scale and have business analysts:
- Move configuration to database/admin panel
- Add audit logs for feature changes
- Add feature usage analytics
- Add automated billing integration

