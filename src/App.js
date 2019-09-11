import React from 'react';
import './App.css';
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import { createBrowserHistory } from 'history';
import {  Router, Route,Switch } from "react-router-dom";

function App() {
  const history = createBrowserHistory()

  history.listen(_ => {
    window.scrollTo(0, 0)
  })

  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history} >
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
