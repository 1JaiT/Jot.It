import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import App from './App';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        {/* <App /> */}
       {/* <Dashboard /> */}
       <nav className="secnav">
            <NavLink to="/todos">Jot List</NavLink>
          </nav>
        <Switch>
          <Route path="/todos">
            <App />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
   </BrowserRouter>
   
    

  </React.StrictMode>,
  document.getElementById('root')
);


 