import React from 'react'
import Jumbotron from '../Component/Jumbotron'

function AboutMe() {
  return (
    <div className="content">
      <h1 class="title">About</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ fontSize: 21, flex: 3 }}>
            <p>I’m a Full Stack Software Developer with a significant experience leading multiple teams and project management.</p>

            <p>In 2013, I graduated from Syracuse University with a dual degree in accounting and finance. I spent the following six years in various finance, retail, operations, systems, and logistics positions. During this time, I led the development of many different technology initiatives. This is where I discovered my passion for technology.</p>

            <p>I completed the software engineering program with The Flatiron School. I have since gained experience building multiple projects with Ruby and Javascript frameworks.</p>

            <p>With significant experience in leading multiple teams, I can communicate concisely as a software professional and perform in any team environment.</p>

            <p><b>Technical Skills:</b></p>
            <ul>

              <li>Javascript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>Postgres</li>
              <li>Postgres</li>
              <li>Git</li>
            </ul>
          </div>


      <img style={{height:"25%"}}src={require('../assets/headshot.png')} />
    </div>
    </div >
  )
}

export default AboutMe 