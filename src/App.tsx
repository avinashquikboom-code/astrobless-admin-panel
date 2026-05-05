import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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

const AnimatedRoutes = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // 2.5 seconds splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!showSplash && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route element={<MainLayout />}>
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
          </Routes>
        </AnimatePresence>
      )}
    </>
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
