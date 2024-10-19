import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WMA from "./components/wma/WMA"; 
import Admin from "./components/admin/Admin"; 
import ResidentAuthView from "./views/resident/ResidentAuthView"; 
import ResidentDashboardView from "./views/resident/ResidentDashboardView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/wma" element={<WMA />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/customer/auth" element={<ResidentAuthView />} /> 
        <Route path="/customer" element={<ResidentDashboardView />} /> 
      </Routes>
    </Router>
  );
};

export default App;
