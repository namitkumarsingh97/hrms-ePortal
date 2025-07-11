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
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Profile</h1>

      <div className="bg-white shadow rounded p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={employee.profileImg}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-[#f7941e]"
        />
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-xl font-bold">{employee.name}</h2>
            <p className="text-gray-500">{employee.role}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 text-sm">Email</label>
              <p>{employee.email}</p>
            </div>
            <div>
              <label className="text-gray-600 text-sm">Phone</label>
              <p>{employee.phone}</p>
            </div>
            <div>
              <label className="text-gray-600 text-sm">Date of Birth</label>
              <p>{employee.dob}</p>
            </div>
            <div>
              <label className="text-gray-600 text-sm">Gender</label>
              <p>{employee.gender}</p>
            </div>
            <div>
              <label className="text-gray-600 text-sm">Employee ID</label>
              <p>{employee.employeeId}</p>
            </div>
            <div>
              <label className="text-gray-600 text-sm">Joining Date</label>
              <p>{employee.joiningDate}</p>
            </div>
            <div>
              <label className="text-gray-600 text-sm">Department</label>
              <p>{employee.department}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;