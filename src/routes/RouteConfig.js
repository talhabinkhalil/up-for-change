import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../UserModule/Dashboard";
import {
  dashboardRoute,
  ChangeMakerRoute,
  featureRoute,
  roundUpWorkRoute,
  nepsRoute,
} from "./Routes";
import ChangeMakers from "./../components/ChangeMakers";
import Feature from "./../components/Feature";
import RoundUpWork from "../components/RoundUpWork";
import Neps from "../components/Neps";

const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path={ChangeMakerRoute} element={<ChangeMakers />} />
        <Route path={featureRoute} element={<Feature />} />
        <Route path={roundUpWorkRoute} element={<RoundUpWork />} />
        <Route path={nepsRoute} element={<Neps />} />
        <Route exact path={dashboardRoute} element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default RouteConfig;
