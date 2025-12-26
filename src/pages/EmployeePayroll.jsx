import React, { useState } from "react";
import jsPDF from "jspdf";

const payrollData = [
  {
    month: "July 2025",
    baseSalary: 40000,
    bonus: 5000,
    deductions: 2000,
    netPay: 43000,
    status: "Paid",
  },
  {
    month: "June 2025",
    baseSalary: 40000,
    bonus: 3000,
    deductions: 1500,
    netPay: 41500,
    status: "Paid",
  },
];

const oldRegime = [
  { slab: "Up to ₹2.5L", rate: "0%" },
  { slab: "₹2.5L - ₹5L", rate: "5%" },
  { slab: "₹5L - ₹10L", rate: "20%" },
  { slab: "Above ₹10L", rate: "30%" },
];

const newRegime = [
  { slab: "Up to ₹3L", rate: "0%" },
  { slab: "₹3L - ₹6L", rate: "5%" },
  { slab: "₹6L - ₹9L", rate: "10%" },
  { slab: "₹9L - ₹12L", rate: "15%" },
  { slab: "₹12L - ₹15L", rate: "20%" },
  { slab: "Above ₹15L", rate: "30%" },
];

export default function EmployeePayroll() {
  const [taxRegime, setTaxRegime] = useState("old");
  const selectedRegime = taxRegime === "old" ? oldRegime : newRegime;

  const handleDownload = (month) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Payslip", 90, 20);

    doc.setFontSize(12);
    doc.text(`Month: ${month}`, 20, 40);
    doc.text("Employee Name: John Doe", 20, 50);
    doc.text("Employee ID: EMP0921", 20, 60);
    doc.text("Base Salary: ₹40,000", 20, 70);
    doc.text("Bonus: ₹5,000", 20, 80);
    doc.text("Deductions: ₹2,000", 20, 90);
    doc.text("Net Pay: ₹43,000", 20, 100);

    doc.save(`Payslip_${month.replace(" ", "_")}.pdf`);
  };

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">My Payroll</h1>

      <div className="mb-4 md:mb-6 p-4 bg-white shadow rounded-xl">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Choose Tax Regime</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="taxRegime"
              value="old"
              checked={taxRegime === "old"}
              onChange={() => setTaxRegime("old")}
            />
            Old Regime
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="taxRegime"
              value="new"
              checked={taxRegime === "new"}
              onChange={() => setTaxRegime("new")}
            />
            New Regime
          </label>
        </div>

        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="min-w-full bg-gray-50 border rounded-md">
            <thead className="bg-[#f7941e] text-white">
              <tr>
                <th className="px-3 md:px-4 py-2 text-left text-xs md:text-sm">Income Slab</th>
                <th className="px-3 md:px-4 py-2 text-left text-xs md:text-sm">Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              {selectedRegime.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-3 md:px-4 py-2 text-xs md:text-sm">{item.slab}</td>
                  <td className="px-3 md:px-4 py-2 text-xs md:text-sm">{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 md:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full bg-white rounded-xl shadow-md">
            <thead>
              <tr className="bg-[#f7941e] text-white text-left">
                <th className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">Month</th>
                <th className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">Base Salary</th>
                <th className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">Bonus</th>
                <th className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">Deductions</th>
                <th className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">Net Pay</th>
                <th className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">Status</th>
                <th className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">Payslip</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">{item.month}</td>
                  <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">₹{item.baseSalary}</td>
                  <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">₹{item.bonus}</td>
                  <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">₹{item.deductions}</td>
                  <td className="px-3 md:px-4 py-2 md:py-3 font-semibold text-xs md:text-sm">₹{item.netPay}</td>
                  <td className="px-3 md:px-4 py-2 md:py-3">
                    <span className="px-2 md:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-3 md:px-4 py-2 md:py-3">
                    <button
                      onClick={() => handleDownload(item.month)}
                      className="bg-[#f7941e] text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm hover:bg-orange-600"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
