"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsLoggedIn(!!role);
  }, []);

  const handleGetStarted = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Black with NeuroHR */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#f7941e]">NeuroHR</h1>
          <button
            onClick={handleGetStarted}
            className="bg-[#f7941e] text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Smarter HR, Happier Teams
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your all-in-one HRMS solution to manage attendance, payroll, leaves, employee lifecycle and more—seamlessly.
          </p>
        </div>
      </section>

      {/* Why NeuroHR Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
            Why NeuroHR?
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600">
            NeuroHR streamlines your HR operations with real-time insights,
            powerful automations, and a delightful employee experience—all from a
            single platform.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Smart Attendance & Punch Location",
                description: "Manage effortlessly through smart automation and analytics.",
              },
              {
                title: "Leave & Holiday Calendar",
                description: "Manage effortlessly through smart automation and analytics.",
              },
              {
                title: "Payroll with Tax Regime Switch",
                description: "Manage effortlessly through smart automation and analytics.",
              },
              {
                title: "Internal Job Postings",
                description: "Manage effortlessly through smart automation and analytics.",
              },
              {
                title: "Exit Management & Assets",
                description: "Manage effortlessly through smart automation and analytics.",
              },
              {
                title: "Performance Reviews & Feedback",
                description: "Manage effortlessly through smart automation and analytics.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-4 md:p-6 rounded shadow">
                <h4 className="text-lg md:text-xl font-bold mb-2 text-[#f7941e]">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#f7941e] py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Select the subscription that fits your team size and needs.
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"> */}
            {/* Free Plan */}
            {/* <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#f7941e] mb-2">Free</h3>
                <p className="text-gray-600 text-sm">Best for small startups</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Up to 5 Employees</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Attendance Management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Leave Tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">X</span>
                  <span className="text-gray-500 text-sm">Payroll & Tax</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">X</span>
                  <span className="text-gray-500 text-sm">Asset/Exit Management</span>
                </li>
              </ul>
              <button
                onClick={handleGetStarted}
                className="w-full bg-[#f7941e] text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Get Started - Free
              </button>
            </div> */}

            {/* Silver Plan */}
            {/* <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-600 mb-2">Silver</h3>
                <p className="text-gray-600 text-sm">For growing teams</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Up to 50 Employees</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Attendance & Leave Management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Payroll & Tax Regime Switch</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Asset Allocation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">X</span>
                  <span className="text-gray-500 text-sm">Internal Job Posting</span>
                </li>
              </ul>
              <button
                onClick={handleGetStarted}
                className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
              >
                Choose Silver
              </button>
            </div> */}

            {/* Gold Plan */}
            {/* <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-yellow-500 mb-2">Gold</h3>
                <p className="text-gray-600 text-sm">For enterprise HR teams</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Unlimited Employees</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">All Silver Features</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Internal Job Postings</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Appraisal History & Exit Flow</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700 text-sm">Employee Training & Helpdesk</span>
                </li>
              </ul>
              <button
                onClick={handleGetStarted}
                className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
              >
                Choose Gold
              </button>
            </div> */}
          {/* </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f7941e] text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © 2025 NeuroHR - All rights reserved. | Built by{" "}
            <a
              href="https://github.com/namitkumarsingh97"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              Namit Kumar Singh
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
