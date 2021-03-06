import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Navigate, Routes } from "react-router-dom";

import AuthLayout from "./layouts/Auth";
import AdminLayout from "./layouts/Admin";
// import RTLLayout from "layouts/RTL.js";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={`auth/*`} element={<AuthLayout />} />
        <Route path={`admin/*`} element={<AdminLayout />} />
        {/* <Route path={`/rtl`} element={RTLLayout} /> */}
        <Route
          exact
          path={"/"}
          element={<Navigate to="/admin/dashboard" replace />}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
