import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserRoutes from "./routes/URoutes";
import AdminRoutes from "./admin/routes/ARoutes";

function App() {
  return (
    <Router>
      <Routes>

        {/* ✅ User Routes */}
        <Route path="/*" element={<UserRoutes />} />

        {/* ✅ Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </Router>
  );
}

export default App;