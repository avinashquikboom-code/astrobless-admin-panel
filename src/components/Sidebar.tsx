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

const Sidebar = () => {
  const location = useLocation();

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
    <aside className="w-64 bg-surface border-r border-white/5 flex flex-col h-screen sticky top-0 hidden lg:flex">
      <div className="p-8">
        <Link to="/" className="flex items-center justify-center group">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform overflow-hidden border border-white/10 shadow-premium">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2">
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
        <button className="flex items-center gap-3 w-full px-4 py-3 text-white/40 hover:text-red-500 hover:bg-red-500/5 rounded-xl transition-all group">
          <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
