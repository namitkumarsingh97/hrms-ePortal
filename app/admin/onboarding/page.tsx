"use client";

import React from "react";

export default function OnboardingPage() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Onboarding</h1>
        <p className="text-gray-600 mt-2">Onboarding management and insights</p>
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
