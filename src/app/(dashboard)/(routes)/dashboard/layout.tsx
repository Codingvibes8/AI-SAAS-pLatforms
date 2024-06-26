import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative">
            <div className="md:inset-y-0 h-full text-white md:w-72
             hidden md:flex md:flex-col bg-slate-600">
                <Sidebar />
            </div>
            <main className="md:pl-72 absolute top-0">
                <Navbar/>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
