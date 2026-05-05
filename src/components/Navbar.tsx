import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { cn } from "../utils/cn";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Kundli", path: "/kundli" },
    { name: "AI Chat", path: "/chat" },
    { name: "Astrologers", path: "/astrologers" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 transition-all duration-300",
      "bg-background/80 backdrop-blur-lg border-b border-white/5"
    )}>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          </Link>
          <span className="text-xl font-black text-white tracking-tight hidden lg:block">AstroBless</span>
        </div>

        {/* Desktop Links - Now on the Left */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xs font-black uppercase tracking-widest transition-all hover:text-accent",
                location.pathname === link.path ? "text-accent" : "text-white/40"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
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
        
        {/* Mobile Menu Button */}
        <Button size="sm" variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-white/5 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-lg font-medium py-2 transition-colors",
                  location.pathname === link.path ? "text-accent" : "text-white/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-white/5 my-2" />
            <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full justify-center gap-2">
                <User className="w-5 h-5" />
                Profile
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
