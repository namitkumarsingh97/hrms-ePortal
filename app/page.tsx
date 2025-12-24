"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const role = localStorage.getItem("role");
    setIsLoggedIn(!!role);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem("employeeId");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-2xl font-bold text-orange-500">
          NeuroHR
        </div>
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            HRMS - Human Resource Management System
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Comprehensive solution for managing employees, attendance, payroll, leaves, and more.
            Streamline your HR operations with ease.
          </p>
          <div className="flex gap-4 justify-center">
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            ) : (
              <Link
                href="/dashboard"
                className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-lg font-semibold transition-colors"
              >
                Go to Dashboard
              </Link>
            )}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-orange-500">
              Employee Management
            </h3>
            <p className="text-gray-600">
              Manage employee profiles, roles, departments, and organizational structure efficiently.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-orange-500">
              Attendance & Payroll
            </h3>
            <p className="text-gray-600">
              Track attendance, manage leaves, and process payroll with automated calculations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-orange-500">
              Reports & Analytics
            </h3>
            <p className="text-gray-600">
              Generate comprehensive reports and gain insights into your workforce data.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

