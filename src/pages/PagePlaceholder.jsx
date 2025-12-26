import React from "react";

const PagePlaceholder = ({ title, description }) => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">🚧</div>
          <div className="text-xl font-medium text-gray-700 mb-2">Feature Coming Soon</div>
          <div className="text-sm text-gray-500">
            This section is under development and will be available soon.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePlaceholder;

