import { useState, useEffect } from "react";
import { getCompanyFeatures, hasFeature, FeatureKey } from "../config/companyFeatures";

export const useCompanyFeatures = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [enabledFeatures, setEnabledFeatures] = useState<FeatureKey[]>([]);
  
  useEffect(() => {
    // Get company name from localStorage
    const storedCompanyName = localStorage.getItem("companyName");
    
    if (storedCompanyName) {
      setCompanyName(storedCompanyName);
      const features = getCompanyFeatures(storedCompanyName);
      setEnabledFeatures(features);
    }
  }, []);
  
  const checkFeature = (feature: FeatureKey): boolean => {
    if (!companyName) return false;
    return hasFeature(companyName, feature);
  };
  
  return {
    companyName,
    enabledFeatures,
    hasFeature: checkFeature,
  };
};

