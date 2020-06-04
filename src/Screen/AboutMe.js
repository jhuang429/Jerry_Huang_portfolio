import React from 'react'
import Jumbotron from '../Component/Jumbotron'

function AboutMe() {
  return (
    <div >
      <h1 class="title">About</h1>
      <div className="content">
        <div style={{ fontSize: 21, flex: 3 }}>
          <p>I am a Full Stack Software Developer with a significant experience leading multiple teams and project management.</p>

          <p>In 2013, I graduated from Syracuse University with a dual degree in accounting and finance. I spent the following six years in various finance, retail, operations, systems, and logistics positions, gaining a wide understanding of corporate operations. I helped develop and implement many different technology initiatives at Macy's Inc such as E-sign, RFID and returns optimization. During this time, gained a passion for technology and an appreciation of how much technology impacts the world.</p>

          <p>To gain an even higher level of understanding of technology, I enrolled in the software engineering program with The Flatiron School. During the program, I gain valuable experience building multiple projects with Ruby and Javascript frameworks. </p>

          <p>With significant experience in project and product management, I can communicate concisely as a software professional and perform in any team environment.</p>

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
            <li>Git</li>
          </ul>
        </div>


        <img src={require('../assets/headshot.png')} />
      </div>
    </div >
  )
}

export default AboutMe 