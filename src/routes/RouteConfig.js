import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../UserModule/Dashboard";
import { dashboardRoute, ChangeMakerRoute, featureRoute } from "./Routes";
import ChangeMakers from "./../components/ChangeMakers";
import Feature from "./../components/Feature";

const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path={ChangeMakerRoute} element={<ChangeMakers />} />
        <Route path={featureRoute} element={<Feature />} />
        <Route exact path={dashboardRoute} element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default RouteConfig;
