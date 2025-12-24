"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardContent from "@/components/dashboard/DashboardContent";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in (using localStorage like the old system)
    const role = localStorage.getItem("role");
    const user = localStorage.getItem("user");
    
    if (!role && !user) {
      router.push("/login");
      return;
    }

    // Redirect to proper route based on role
    if (role === "global_admin" || role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/employee/dashboard");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="text-lg font-medium text-gray-900 mb-2">Redirecting...</div>
        <div className="text-sm text-gray-500">Please wait</div>
      </div>
    </div>
  );
}
