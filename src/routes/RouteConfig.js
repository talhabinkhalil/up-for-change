import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from '../UserModule/Dashboard';
import Header from '../UserModule/Header/Header';
import { dashboardRoute } from './Routes';


const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path={dashboardRoute} element={<Dashboard />} />   
      </Routes>
    </Router>
  )
}

export default RouteConfig
