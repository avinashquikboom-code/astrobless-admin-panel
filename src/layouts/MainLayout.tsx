import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Menu, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import Modal from "../components/Modal";

const MainLayout = ({ onLogout }: { onLogout: () => void }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-[60]">
        <Button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-14 h-14 rounded-full shadow-accent flex items-center justify-center p-0"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      <div className="flex pt-20 flex-1 relative">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar onLogout={() => setIsLogoutModalOpen(true)} />
        </div>

        {/* Mobile Sidebar Drawer */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
              />
              
              {/* Drawer */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 left-0 w-72 bg-surface z-[56] lg:hidden shadow-2xl border-r border-white/5"
              >
                <div className="h-full overflow-y-auto" onClick={() => setIsSidebarOpen(false)}>
                  <Sidebar onLogout={() => setIsLogoutModalOpen(true)} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <main className="flex-1 p-4 md:p-8 animate-fade-in w-full overflow-x-hidden">
          <Outlet />
        </main>
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
    </div>
  );
};

export default MainLayout;
