import React, { useState } from "react";

const EmployeeTaxDeclaration = () => {
  const [taxRegime, setTaxRegime] = useState("old");
  const [declarations, setDeclarations] = useState({
    hra: "",
    lta: "",
    section80C: "",
    medical: "",
    nps: "",
  });
  const [proofFile, setProofFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ taxRegime, declarations, proofFile });
    alert("Tax declaration submitted successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-[#f7941e]">
        Tax Declaration & Investment Proofs
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-2">Select Tax Regime</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="old"
                checked={taxRegime === "old"}
                onChange={(e) => setTaxRegime(e.target.value)}
              />
              Old Regime (with deductions)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="new"
                checked={taxRegime === "new"}
                onChange={(e) => setTaxRegime(e.target.value)}
              />
              New Regime (lower tax, no deductions)
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">HRA</label>
            <input
              type="number"
              value={declarations.hra}
              onChange={(e) =>
                setDeclarations({ ...declarations, hra: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
              placeholder="₹"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">LTA</label>
            <input
              type="number"
              value={declarations.lta}
              onChange={(e) =>
                setDeclarations({ ...declarations, lta: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
              placeholder="₹"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Section 80C</label>
            <input
              type="number"
              value={declarations.section80C}
              onChange={(e) =>
                setDeclarations({ ...declarations, section80C: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
              placeholder="Max ₹1.5L"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Medical Insurance</label>
            <input
              type="number"
              value={declarations.medical}
              onChange={(e) =>
                setDeclarations({ ...declarations, medical: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
              placeholder="₹"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">NPS Contribution</label>
            <input
              type="number"
              value={declarations.nps}
              onChange={(e) =>
                setDeclarations({ ...declarations, nps: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
              placeholder="₹"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Upload Investment Proofs (PDF/ZIP)
          </label>
          <input
            type="file"
            accept=".pdf,.zip"
            onChange={(e) => setProofFile(e.target.files[0])}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-[#f7941e] text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Submit Declaration
        </button>
      </form>
    </div>
  );
};

export default EmployeeTaxDeclaration;
