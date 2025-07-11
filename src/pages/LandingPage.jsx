import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-black text-white">
        <h1 className="text-2xl font-bold text-[#f7941e]">NeuroHR</h1>
        <button
          onClick={handleLoginClick}
          className="bg-[#f7941e] px-5 py-2 rounded hover:bg-orange-600"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-yellow-50 text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Smarter HR, Happier Teams</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Your all-in-one HRMS solution to manage attendance, payroll, leaves,
          employee lifecycle and more—seamlessly.
        </p>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h3 className="text-3xl font-semibold mb-4">Why NeuroHR?</h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          NeuroHR streamlines your HR operations with real-time insights,
          powerful automations, and a delightful employee experience—all from a
          single platform.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold">Key Features</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Smart Attendance & Punch Location",
            "Leave & Holiday Calendar",
            "Payroll with Tax Regime Switch",
            "Internal Job Postings",
            "Exit Management & Assets",
            "Performance Reviews & Feedback",
          ].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2 text-[#f7941e]">
                {feature}
              </h4>
              <p className="text-gray-600 text-sm">
                {feature.length > 45
                  ? "Comprehensive and easy-to-use module with employee-first approach."
                  : "Manage effortlessly through smart automation and analytics."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription / CTA */}
      <section className="bg-[#f7941e] text-white text-center py-16 px-6">
        <h3 className="text-3xl font-semibold mb-4">Choose Your Plan</h3>
        <p className="mb-12 text-white text-lg">
          Select the subscription that fits your team size and needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-black">
          {/* Free Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold text-[#f7941e] mb-2">Free</h4>
            <p className="text-sm text-gray-600 mb-4">
              Best for small startups
            </p>
            <ul className="text-sm text-left space-y-2 mb-6">
              <li>✔️ Up to 5 Employees</li>
              <li>✔️ Attendance Management</li>
              <li>✔️ Leave Tracking</li>
              <li>❌ Payroll & Tax</li>
              <li>❌ Asset/Exit Management</li>
            </ul>
            <button
              onClick={handleLoginClick}
              className="bg-[#f7941e] text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
            >
              Get Started – Free
            </button>
          </div>

          {/* Silver Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md border-4 border-[#C0C0C0]">
            <h4 className="text-2xl font-bold text-[#C0C0C0] mb-2">Silver</h4>
            <p className="text-sm text-gray-600 mb-4">For growing teams</p>
            <ul className="text-sm text-left space-y-2 mb-6">
              <li>✔️ Up to 50 Employees</li>
              <li>✔️ Attendance & Leave Management</li>
              <li>✔️ Payroll & Tax Regime Switch</li>
              <li>✔️ Asset Allocation</li>
              <li>❌ Internal Job Posting</li>
            </ul>
            <button
              onClick={handleLoginClick}
              className="bg-[#C0C0C0] text-black px-4 py-2 rounded hover:bg-gray-400 w-full"
            >
              Choose Silver
            </button>
          </div>

          {/* Gold Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md border-4 border-[#FFD700]">
            <h4 className="text-2xl font-bold text-[#FFD700] mb-2">Gold</h4>
            <p className="text-sm text-gray-600 mb-4">
              For enterprise HR teams
            </p>
            <ul className="text-sm text-left space-y-2 mb-6">
              <li>✔️ Unlimited Employees</li>
              <li>✔️ All Silver Features</li>
              <li>✔️ Internal Job Postings</li>
              <li>✔️ Appraisal History & Exit Flow</li>
              <li>✔️ Employee Training & Helpdesk</li>
            </ul>
            <button
              onClick={handleLoginClick}
              className="bg-[#FFD700] text-black px-4 py-2 rounded hover:bg-yellow-400 w-full"
            >
              Choose Gold
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 text-sm">
        <p className="text-center text-sm text-gray-500 mt-8">
          © 2025 <strong>NeuroHR</strong> – All rights reserved. | Built by{" "}
          <a
            href="https://github.com/namitkumarsingh97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f7941e] hover:underline"
          >
            Namit Kumar Singh
          </a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
