import React from 'react'
import Jumbotron from '../Component/Jumbotron'

function AboutMe() {
  return (
    <div className="content">
      <h1 class="title">About</h1>
      <div style={{display:"flex", flexDirection:"row"}}>
        <p>
          I graduated from Syracuse University in the Spring of 2013 with a dual major in Accounting and Finance. After working in multiple roles in finance, operations, and systems, I have a well rounded experience in collaberating with multiple teams

      </p>

        <img src={require('../assets/headshot.png')} />
      </div>
    </div>
  )
}

export default AboutMe 