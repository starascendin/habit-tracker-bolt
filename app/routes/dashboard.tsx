import { Outlet } from "@remix-run/react";
import Sidebar from "~/components/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}