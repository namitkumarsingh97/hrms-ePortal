import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie, FaUser } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      role === "admin" &&
      employeeId === "EMP0001" &&
      password === "admin@123"
    ) {
      localStorage.setItem("role", "admin");
      navigate("/admin/dashboard");
    } else if (
      role === "employee" &&
      employeeId === "EMP0921" &&
      password === "emp@123"
    ) {
      localStorage.setItem("role", "employee");
      navigate("/employee/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header/Navbar */}
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1
          className="text-xl font-bold text-[#f7941e] cursor-pointer"
          onClick={() => navigate("/")}
        >
          NeuroHR
        </h1>
        <span className="text-sm text-white/70">Smarter HR, Happier Teams</span>
      </header>

      {/* Centered Login Card */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6">
          {/* Avatar Icon */}
          <div className="flex justify-center">
            {role === "admin" ? (
              <FaUserTie className="text-4xl text-[#f7941e]" />
            ) : (
              <FaUser className="text-4xl text-[#f7941e]" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-center">E-HRMS Portal Login</h2>

          {/* Role Select */}
          <div>
            <label className="block mb-1 font-medium">Login as</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
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
            <div className="text-right mt-1">
              <button
                onClick={() => alert("Password recovery coming soon!")}
                className="text-sm text-[#f7941e] hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

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
