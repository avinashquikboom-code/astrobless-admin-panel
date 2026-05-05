import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import KundliPage from "./pages/KundliPage";
import ChatPage from "./pages/ChatPage";
import TimelinePage from "./pages/TimelinePage";
import AstrologersPage from "./pages/AstrologersPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/kundli" element={<KundliPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/astrologers" element={<AstrologersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
