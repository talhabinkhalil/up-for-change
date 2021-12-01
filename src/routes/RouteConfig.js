import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../UserModule/Dashboard";
import { dashboardRoute, ChangeMakerRoute } from "./Routes";
import ChangeMakers from "./../components/ChangeMakers";

const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path={ChangeMakerRoute} element={<ChangeMakers />} />
        <Route exact path={dashboardRoute} element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default RouteConfig;
