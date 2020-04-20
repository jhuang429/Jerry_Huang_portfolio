import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Screen/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Component/Nav';
import Resume from './Screen/Resume';
import AboutMe from './Screen/AboutMe';
import Education from './Screen/Education'



function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/about">
          <AboutMe />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
