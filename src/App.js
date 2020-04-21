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
import Footer from './Component/Footer';
import Resume from './Screen/Resume';
import AboutMe from './Screen/AboutMe';
import Education from './Screen/Education'
import Jumbotron from './Component/Jumbotron'
import Experience from './Screen/Experience';
import Projects from './Screen/Projects';



function App() {
  return (
    <Router>

      <Nav />

      <Switch style={{ display: "flex", justifyContent: "center" }}>

        <Route exact path="/experience">
          <Experience />
        </Route>

        <Route exact path="/resume">
          <Resume />
        </Route>

        <Route exact path="/about">
          <AboutMe />
        </Route>

        <Route exact path="/education">
          <Education />
        </Route>
        
        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/">
          <Main />
        </Route>


      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
