"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";
import TopHeader from "./components/TopHeader";
import Sidebar from "./components/Sidebar";
import EmployeeSidebar from "./components/EmployeeSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
    companyName: "",
    companyId: null,
  });
  const [sidebarType, setSidebarType] = useState<"admin" | "employee">("admin");

  useEffect(() => {
    // Get user info from localStorage
    const user = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    const companyName = localStorage.getItem("companyName") || "My Company";
    const companyId = localStorage.getItem("companyId");

    if (user) {
      try {
        const userData = JSON.parse(user);
        const userRole = role || userData.role || "employee";
        setUserInfo({
          name: userData.name || "User",
          role: userRole,
          companyName: companyName,
          companyId: companyId,
        });
        setSidebarType(userRole === "employee" ? "employee" : "admin");
      } catch (e) {
        setUserInfo({
          name: "User",
          role: role || "employee",
          companyName: companyName,
          companyId: companyId,
        });
        setSidebarType(role === "employee" ? "employee" : "admin");
      }
    } else if (pathname !== "/login" && pathname !== "/") {
      // Redirect to login if not logged in
      router.push("/login");
    }
  }, [pathname, router]);

  const handleCompanyChange = (newCompany: any) => {
    setUserInfo({
      ...userInfo,
      companyName: newCompany.name,
      companyId: newCompany.id.toString(),
    });
    window.location.reload();
  };

  // Don't show layout on landing/login pages
  const showLayout = pathname !== "/" && pathname !== "/login" && pathname !== "/payment-success";

  const SidebarComponent = sidebarType === "employee" ? EmployeeSidebar : Sidebar;

  return (
    <html lang="en">
      <body className="bg-gray-50">
        {showLayout ? (
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
        ) : (
          children
        )}
      </body>
    </html>
  );
}
