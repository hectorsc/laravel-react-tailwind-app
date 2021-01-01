import React from 'react';
import { Router } from 'react-router-dom';
import history from '../../history';
import NavBar from './NavBar-v2';
import Routes from "./Routes";

const App = () => {

   return (
      <div className="flex text-gray-700 ">
         <Router history={history}>
            <NavBar />
            <Routes /> 
         </Router>
      </div>
   );
};

export default App;
