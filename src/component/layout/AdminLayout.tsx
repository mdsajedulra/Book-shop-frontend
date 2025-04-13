import { Outlet } from "react-router-dom";
import Sidebar from "../ui/AdminDashboard/Sidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Main Content */}
      <main className="sm:w-full md:w-3/4 p-8 bg-base-100 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;