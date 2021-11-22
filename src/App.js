import React from 'react';
import RouteConfig from './routes/RouteConfig';
import Header from './UserModule/Header/Header';
import './Styles/Style.css';
import { navbarItems } from './ViewData/NavBarItems';

function App() {
  return (
    <div>
      <Header fixed="top" navbarItems={navbarItems} button={true} />
      <RouteConfig />
    </div>
  );
}

export default App;
