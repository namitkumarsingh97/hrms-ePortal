import React from "react";
import { hasFeature, FeatureKey } from "../config/companyFeatures";

interface CompanyFeatureGateProps {
  companyName: string;
  feature: FeatureKey;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const CompanyFeatureGate: React.FC<CompanyFeatureGateProps> = ({ 
  companyName, 
  feature, 
  children, 
  fallback 
}) => {
  const hasAccess = hasFeature(companyName, feature);
  
  if (!hasAccess) {
    if (fallback) {
      return <>{fallback}</>;
    }
    
    return (
      <div className="bg-white rounded-lg shadow p-8 border-2 border-dashed border-gray-300">
        <div className="text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Feature Not Available</h3>
          <p className="text-gray-600 mb-4">
            This feature is not enabled for your company. Contact your administrator or sales representative to enable this feature.
          </p>
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
};

interface CompanyFeatureBadgeProps {
  companyName: string;
  feature: FeatureKey;
  className?: string;
}

export const CompanyFeatureBadge: React.FC<CompanyFeatureBadgeProps> = ({ 
  companyName, 
  feature, 
  className = "" 
}) => {
  const hasAccess = hasFeature(companyName, feature);
  
  if (hasAccess) {
    return null; // Don't show badge if feature is available
  }
  
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800 ${className}`}>
      🔒 Not Enabled
    </span>
  );
};

