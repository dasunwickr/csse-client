import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WasteCollectorProfile from "./views/collector/WasteCollectorProfile";
import Map from "./components/collector/Map"; // Add other components if needed
import WMA from "./components/wma/WMA";
import Admin from "./components/admin/Admin";
import Resident from "./components/resident/Resident";
import Contoller from "./components/collector/Contoller";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}

        <Route path="wma/" element={<WMA />} />

        <Route path="admin/" element={<Admin />} />

        <Route path="resident/" element={<Resident />} />

        <Route path="collector/" element={<Contoller />} />
        <Route path="collector/home" element={<WasteCollectorProfile />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
