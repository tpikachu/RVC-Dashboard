/*!

=========================================================
* Purity UI Dashboard - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Navigate, Routes } from "react-router-dom";

import AuthLayout from "./layouts/Auth";
import AdminLayout from "./layouts/Admin";
// import RTLLayout from "layouts/RTL.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={`auth/*`} element={<AuthLayout />} />
      <Route path={`admin/*`} element={<AdminLayout />} />
      {/* <Route path={`/rtl`} element={RTLLayout} /> */}
      <Route exact path={'/'} element={<Navigate to="/admin/dashboard" replace />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
