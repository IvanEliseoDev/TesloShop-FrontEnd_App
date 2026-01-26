import { useState } from "react";
import { Sidebar } from "../components/AdminSidebar";
import { Header } from "../components/AdminHeader";
import { Outlet } from "react-router";

export const AdminLayout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    return (
        <div className=" bg-gray-50 flex">
            <Sidebar
                isCollapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />

            <div className="flex-1 flex flex-col">
                <Header />

                <main className="flex-1 p-6">

                    <Outlet />
                </main>
            </div>
        </div>
    )
}


export default AdminLayout