// Company-specific feature configuration
// Add or remove features for each company based on your deals/agreements
// This is your master control panel for company features

export type FeatureKey = 
  | "command_center"
  | "org_health"
  | "org_graph"
  | "workforce_planning"
  | "smart_hiring"
  | "talent_marketplace"
  | "performance_intelligence"
  | "manager_effectiveness"
  | "high_potential"
  | "compensation_engine"
  | "workload_burnout"
  | "wellbeing_insights"
  | "culture_lab"
  | "automation_studio"
  | "data_explorer"
  | "api_webhooks";

export interface CompanyFeatureConfig {
  companyName: string;
  companyCode: string;
  enabledFeatures: FeatureKey[];
  // Add any other company-specific settings here
  customSettings?: {
    maxEmployees?: number;
    allowedIntegrations?: string[];
    customBranding?: boolean;
  };
}

// ⚠️ THIS IS YOUR MASTER CONFIGURATION FILE
// Update this when you make deals with companies
// Add or remove features as per your agreements

export const COMPANY_FEATURES: CompanyFeatureConfig[] = [
  {
    companyName: "CodeCraft Technologies",
    companyCode: "CDCF001",
    enabledFeatures: [
      "command_center",
      "org_health",
      "org_graph",
      "workforce_planning",
      "smart_hiring",
      "talent_marketplace",
      "performance_intelligence",
      "manager_effectiveness",
      "high_potential",
      "compensation_engine",
      "workload_burnout",
      "wellbeing_insights",
      "culture_lab",
      "automation_studio",
      "data_explorer",
      "api_webhooks",
      // All features enabled
    ],
  },
  {
    companyName: "CloudScale Solutions",
    companyCode: "CLDS002",
    enabledFeatures: [
      "command_center",
      "org_health",
      "org_graph",
      "smart_hiring",
      "talent_marketplace",
      "performance_intelligence",
      "workload_burnout",
      "automation_studio",
      // Medium feature set
    ],
  },
  {
    companyName: "DataSync Systems",
    companyCode: "DTSY003",
    enabledFeatures: [
      "org_graph",
      "smart_hiring",
      "performance_intelligence",
      "workload_burnout",
      // Basic feature set
    ],
  },
  {
    companyName: "DevOps Innovations",
    companyCode: "DVOP004",
    enabledFeatures: [
      "org_graph",
      "performance_intelligence",
      "automation_studio",
      // Minimal feature set
    ],
  },
  {
    companyName: "AI Dynamics Pvt Ltd",
    companyCode: "AIDY005",
    enabledFeatures: [
      "command_center",
      "org_health",
      "org_graph",
      "workforce_planning",
      "smart_hiring",
      "performance_intelligence",
      "high_potential",
      "compensation_engine",
      "data_explorer",
      // Enterprise features
    ],
  },
  {
    companyName: "Quantum Software Services",
    companyCode: "QTUM006",
    enabledFeatures: [
      "org_health",
      "org_graph",
      "smart_hiring",
      "talent_marketplace",
      "performance_intelligence",
      "workload_burnout",
      // Growth feature set
    ],
  },
  {
    companyName: "CyberGuard IT Solutions",
    companyCode: "CYBG007",
    enabledFeatures: [
      "command_center",
      "org_health",
      "org_graph",
      "smart_hiring",
      "performance_intelligence",
      "compensation_engine",
      "culture_lab",
      "automation_studio",
      // Security-focused features
    ],
  },
  {
    companyName: "TechNova Consulting",
    companyCode: "TCNV008",
    enabledFeatures: [
      "org_graph",
      "performance_intelligence",
      // Starter feature set
    ],
  },
  {
    companyName: "PixelForge Digital",
    companyCode: "PXFG009",
    enabledFeatures: [
      "org_graph",
      "smart_hiring",
      "talent_marketplace",
      "performance_intelligence",
      "workload_burnout",
      // Creative agency features
    ],
  },
  {
    companyName: "SecureNet Technologies",
    companyCode: "SCNT010",
    enabledFeatures: [
      "command_center",
      "org_health",
      "org_graph",
      "workforce_planning",
      "smart_hiring",
      "performance_intelligence",
      "compensation_engine",
      "culture_lab",
      "automation_studio",
      "data_explorer",
      // Premium feature set
    ],
  },
];

// Helper function to get features for a company
export const getCompanyFeatures = (companyName: string): FeatureKey[] => {
  const config = COMPANY_FEATURES.find(
    (c) => c.companyName === companyName
  );
  return config?.enabledFeatures || [];
};

// Helper function to check if company has a specific feature
export const hasFeature = (companyName: string, feature: FeatureKey): boolean => {
  const features = getCompanyFeatures(companyName);
  return features.includes(feature);
};

// Helper function to get company config
export const getCompanyConfig = (companyName: string): CompanyFeatureConfig | undefined => {
  return COMPANY_FEATURES.find((c) => c.companyName === companyName);
};

