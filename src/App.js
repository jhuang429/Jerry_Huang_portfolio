import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Screen/Main'
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
      <div className="container">


        <Nav />

        <div className = "main">
          <Switch>
            <Route exact path="/about">
              <AboutMe />
            </Route>
            {/* <Route exact path="/work">
              <Experience />
            </Route>



            <Route exact path="/education">
              <Education />
            </Route> */}

            <Route path="/projects">
              <Projects />
            </Route>

            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <Main />
            </Route>


          </Switch>
        </div>

      </div>

    </Router>
  );
}

export default App;
