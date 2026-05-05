import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import AdminDashboard from "./pages/AdminDashboard";
import UsersPage from "./pages/UsersPage";
import AstrologersManagementPage from "./pages/AstrologersManagementPage";
import PaymentsPage from "./pages/PaymentsPage";
import AdminReportsPage from "./pages/AdminReportsPage";
import SettingsPage from "./pages/SettingsPage";
import LandingPage from "./pages/LandingPage";
import SplashScreen from "./components/SplashScreen";
import KundliPage from "./pages/KundliPage";
import ChatPage from "./pages/ChatPage";
import TimelinePage from "./pages/TimelinePage";
import LoginPage from "./pages/LoginPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // 2.5 seconds splash
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen key="splash" />
      ) : !isAuthenticated ? (
        <motion.div
          key="login-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Routes location={location} key="login-routes">
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </motion.div>
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route element={<MainLayout onLogout={handleLogout} />}>
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/astrologers" element={<AstrologersManagementPage />} />
              <Route path="/payments" element={<PaymentsPage />} />
              <Route path="/reports" element={<AdminReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              
              {/* Restored User Content */}
              <Route path="/kundli" element={<KundliPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
            </Route>
            <Route path="/login" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
