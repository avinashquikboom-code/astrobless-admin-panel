import { Link, useLocation } from "react-router-dom";
import { Bell, User, Menu } from "lucide-react";
import Button from "./Button";
import { cn } from "../utils/cn";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Kundli", path: "/kundli" },
    { name: "AI Chat", path: "/chat" },
    { name: "Astrologers", path: "/astrologers" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
      "bg-background/80 backdrop-blur-lg border-b border-white/5"
    )}>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
        </div>
        <span className="text-2xl font-bold text-white tracking-tighter">
          Astro<span className="text-accent">Bless</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              location.pathname === link.path ? "text-accent" : "text-white/70"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-white/70 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-background" />
        </button>
        <Link to="/profile">
          <Button variant="ghost" size="sm" className="hidden md:flex gap-2 items-center">
            <User className="w-4 h-4" />
            Profile
          </Button>
        </Link>
        <Button size="sm" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
