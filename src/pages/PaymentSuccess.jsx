import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-r from-orange-100 to-yellow-50">
      <header className="bg-black text-white p-6 flex justify-between items-center">
        <h1
          className="text-xl font-bold text-[#f7941e] cursor-pointer"
          onClick={() => navigate("/")}
        >
          NeuroHR
        </h1>
        <span className="text-sm text-white/70">Smarter HR, Happier Teams</span>
      </header>

      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#C0C0C0" }}>
          Payment Successful
        </h2>
        <p className="text-lg text-gray-700 max-w-xl">
          Thank you for subscribing to the{" "}
          <span className="font-semibold text-black">Silver Plan</span>. <br />
          Your transaction was completed successfully, and your account is now
          upgraded.
        </p>
        <p className="mt-4 text-gray-600 max-w-xl">
          You can now access premium features including advanced attendance
          tracking, payroll management, and employee performance tools.
        </p>
        <p className="mt-2 text-gray-500 text-sm">
          An invoice and confirmation email have been sent to your registered
          email address.
        </p>

        <button
          onClick={handleLoginClick}
          className="mt-8 px-6 py-3 bg-[#f7941e] text-white rounded-md shadow hover:bg-orange-500 transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
