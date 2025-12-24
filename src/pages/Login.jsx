import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie, FaUser, FaGlobe } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId, password, role }),
      });

      const data = await response.json();

      if (data.success) {
        // Store user info in localStorage
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("employeeId", data.user.employeeId);
        localStorage.setItem("companyId", data.user.companyId);
        localStorage.setItem("companyName", data.user.companyName);

        // Redirect based on role
        if (data.user.role === "global_admin" || data.user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/employee/dashboard");
        }
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Unable to connect to server. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header/Navbar */}
      <header className="bg-black text-white p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1
          className="text-lg md:text-xl font-bold text-[#f7941e] cursor-pointer"
          onClick={() => navigate("/")}
        >
          NeuroHR
        </h1>
        <span className="text-xs md:text-sm text-white/70">Smarter HR, Happier Teams</span>
      </header>

      {/* Centered Login Card */}
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="bg-white p-6 md:p-8 rounded shadow-md w-full max-w-md space-y-4 md:space-y-6">
          {/* Avatar Icon */}
          <div className="flex justify-center">
            {role === "global_admin" ? (
              <FaGlobe className="text-4xl text-[#f7941e]" />
            ) : role === "admin" ? (
              <FaUserTie className="text-4xl text-[#f7941e]" />
            ) : (
              <FaUser className="text-4xl text-[#f7941e]" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-center">
            E-HRMS Portal Login
          </h2>

          {/* Role Select */}
          <div>
            <label className="block mb-1 font-medium">Login as</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="global_admin">Global Admin</option>
              <option value="admin">Admin / HR</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          {/* Employee ID */}
          <div>
            <label className="block mb-1 font-medium">Employee ID</label>
            <input
              type="text"
              placeholder="Enter Employee ID"
              className="w-full border rounded px-3 py-2"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <div className="text-right mt-1">
              <button
                onClick={() => alert("Password recovery coming soon!")}
                className="text-sm text-[#f7941e] hover:underline"
              >
                Forgot password?
              </button>
            </div> */}
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="bg-[#f7941e] text-white w-full py-2 rounded hover:bg-orange-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
