import React from "react";

const EmployeeProfile = () => {
  const employee = {
    name: "Namit Singh",
    email: "namit@circuitstory.in",
    phone: "+91-7065257606",
    dob: "1996-01-01",
    gender: "Male",
    department: "Developer",
    role: "Sr. Software Engineer",
    employeeId: "EMP0921",
    joiningDate: "2022-01-15",
    profileImg: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-xl md:text-2xl font-bold">My Profile</h1>

      <div className="bg-white shadow rounded p-4 md:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
        <img
          src={employee.profileImg}
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#f7941e]"
        />
        <div className="flex-1 space-y-3 md:space-y-4 w-full">
          <div>
            <h2 className="text-lg md:text-xl font-bold">{employee.name}</h2>
            <p className="text-sm md:text-base text-gray-500">{employee.role}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="text-gray-600 text-xs md:text-sm">Email</label>
              <p className="text-sm md:text-base">{employee.email}</p>
            </div>
            <div>
              <label className="text-gray-600 text-xs md:text-sm">Phone</label>
              <p className="text-sm md:text-base">{employee.phone}</p>
            </div>
            <div>
              <label className="text-gray-600 text-xs md:text-sm">Date of Birth</label>
              <p className="text-sm md:text-base">{employee.dob}</p>
            </div>
            <div>
              <label className="text-gray-600 text-xs md:text-sm">Gender</label>
              <p className="text-sm md:text-base">{employee.gender}</p>
            </div>
            <div>
              <label className="text-gray-600 text-xs md:text-sm">Employee ID</label>
              <p className="text-sm md:text-base">{employee.employeeId}</p>
            </div>
            <div>
              <label className="text-gray-600 text-xs md:text-sm">Joining Date</label>
              <p className="text-sm md:text-base">{employee.joiningDate}</p>
            </div>
            <div>
              <label className="text-gray-600 text-xs md:text-sm">Department</label>
              <p className="text-sm md:text-base">{employee.department}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;