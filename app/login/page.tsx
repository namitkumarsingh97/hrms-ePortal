"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserTie, FaUser } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("admin");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId, password, role }),
      });

      const data = await response.json();

      if (data.success) {
        // Store user info in localStorage
        localStorage.setItem("role", role);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("employeeId", employeeId);

        // Redirect based on role
        if (role === "admin") {
          router.push("/dashboard");
        } else {
          router.push("/dashboard");
        }
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Unable to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1
          className="text-lg md:text-xl font-bold text-orange-500 cursor-pointer"
          onClick={() => router.push("/")}
        >
          NeuroHR
        </h1>
        <span className="text-xs md:text-sm text-white/70">Smarter HR, Happier Teams</span>
      </header>

      {/* Login Card */}
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md space-y-4 md:space-y-6">
          {/* Avatar Icon */}
          <div className="flex justify-center">
            {role === "admin" ? (
              <FaUserTie className="text-4xl text-orange-500" />
            ) : (
              <FaUser className="text-4xl text-orange-500" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-900">
            HRMS Portal Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
            {/* Role Select */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Login as</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                disabled={loading}
              >
                <option value="admin">Admin / HR</option>
                <option value="employee">Employee</option>
              </select>
            </div>

            {/* Employee ID */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Employee ID</label>
              <input
                type="text"
                placeholder="Enter Employee ID"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

