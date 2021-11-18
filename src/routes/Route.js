import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from '../UserModule/Dashboard';
import { dashboardRoute } from './Routes';


const Route = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={[dashboardRoute]} component={Dashboard} />
      </Switch>      
    </Router>
  )
}

export default Route
