import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TopHeader from "./TopHeader";
import Sidebar from "./Sidebar";
import EmployeeSidebar from "./EmployeeSidebar";

const Layout = ({ children, sidebarType = "admin" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
    companyName: "",
    companyId: null,
  });

  useEffect(() => {
    // Get user info from localStorage
    const user = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    const companyName = localStorage.getItem("companyName") || "My Company";
    const companyId = localStorage.getItem("companyId");

    if (user) {
      try {
        const userData = JSON.parse(user);
        setUserInfo({
          name: userData.name || "User",
          role: role || userData.role || "employee",
          companyName: companyName,
          companyId: companyId,
        });
      } catch (e) {
        setUserInfo({
          name: "User",
          role: role || "employee",
          companyName: companyName,
          companyId: companyId,
        });
      }
    } else if (!role) {
      // No user logged in, redirect to login
      navigate("/login");
    } else {
      setUserInfo({
        name: "User",
        role: role,
        companyName: companyName,
        companyId: companyId,
      });
    }
  }, [navigate, location]);

  const handleCompanyChange = (newCompany) => {
    setUserInfo({
      ...userInfo,
      companyName: newCompany.name,
      companyId: newCompany.id.toString(),
    });
    // Optionally reload the page or refresh data
    window.location.reload();
  };

  const SidebarComponent = sidebarType === "employee" ? EmployeeSidebar : Sidebar;

  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader
        userName={userInfo.name}
        userRole={userInfo.role}
        companyName={userInfo.companyName}
        onCompanyChange={handleCompanyChange}
      />
      <div className="flex flex-1">
        <SidebarComponent />
        <main className="flex-1 bg-gray-100 w-full md:w-auto overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

