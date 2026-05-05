import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Moon, 
  MessageSquare, 
  Calendar, 
  Users, 
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "../utils/cn";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Kundli Chart", icon: Moon, path: "/kundli" },
    { name: "AI Assistant", icon: MessageSquare, path: "/chat" },
    { name: "Life Timeline", icon: Calendar, path: "/timeline" },
    { name: "Astrologers", icon: Users, path: "/astrologers" },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 pt-24 bg-surface/30 border-r border-white/5 backdrop-blur-sm">
      <div className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              location.pathname === item.path 
                ? "bg-accent text-white shadow-accent" 
                : "text-white/60 hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-transform duration-200",
              location.pathname !== item.path && "group-hover:scale-110"
            )} />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-white/5 space-y-2">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </Link>
        <button
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all w-full text-left"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
