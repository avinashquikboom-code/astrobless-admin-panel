import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  CreditCard, 
  BarChart2, 
  Settings,
  LogOut,
  Moon,
  Sparkles,
  Calendar
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import logo from "../assets/logo.png";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

const Sidebar = ({ onLogout }: { onLogout: () => void }) => {
  const location = useLocation();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Moon, label: "Kundli Chart", path: "/kundli" },
    { icon: Sparkles, label: "AI Assistant", path: "/chat" },
    { icon: Calendar, label: "Life Timeline", path: "/timeline" },
    { icon: Users, label: "Users Management", path: "/users" },
    { icon: UserCheck, label: "Astrologers", path: "/astrologers" },
    { icon: CreditCard, label: "Payments", path: "/payments" },
    { icon: BarChart2, label: "Reports", path: "/reports" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-full lg:w-64 bg-surface border-r border-white/5 flex flex-col h-[calc(100vh-5rem)] sticky top-20 overflow-y-auto no-scrollbar">
      <div className="p-8">
        <Link to="/" className="flex items-center justify-center group">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform overflow-hidden border border-white/10 shadow-premium">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          </div>
        </Link>
      </div>

      <nav className="px-4 space-y-2 mb-8">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group",
                isActive ? "text-white" : "text-white/40 hover:text-white hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-accent rounded-xl -z-10 shadow-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon className={cn(
                "w-5 h-5",
                isActive ? "text-white" : "group-hover:text-accent transition-colors"
              )} />
              <span className="font-bold">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button 
          onClick={() => setIsLogoutModalOpen(true)}
          className="flex items-center gap-3 w-full px-4 py-3 text-white/40 hover:text-red-500 hover:bg-red-500/5 rounded-xl transition-all group"
        >
          <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Logout</span>
        </button>
      </div>

      <Modal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        title="Confirm Logout"
      >
        <div className="text-center space-y-6 py-4">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
            <LogOut className="w-10 h-10 text-red-500" />
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white">Are you sure?</h4>
            <p className="text-white/40">You will need to login again to access the admin portal.</p>
          </div>
          <div className="flex gap-4 pt-4">
            <Button 
              variant="secondary" 
              className="flex-1 h-12"
              onClick={() => setIsLogoutModalOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              className="flex-1 h-12 bg-red-500 hover:bg-red-600 shadow-red-500/20"
              onClick={onLogout}
            >
              Logout Now
            </Button>
          </div>
        </div>
      </Modal>
    </aside>
  );
};

export default Sidebar;
