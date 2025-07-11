import React from "react";

const DashboardCard = ({ title, value, note, borderColor, textColor }) => (
  <div
    className={`bg-white p-6 rounded-2xl shadow-md border-l-4 ${borderColor} w-full`}
  >
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className={`text-2xl mt-2 ${textColor} font-bold`}>{value}</p>
    {note && <p className="text-sm text-gray-500">{note}</p>}
  </div>
);
export default DashboardCard;
