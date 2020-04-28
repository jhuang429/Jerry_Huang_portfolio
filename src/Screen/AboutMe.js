import React from 'react'
import Jumbotron from '../Component/Jumbotron'

function AboutMe() {
  return (
    <div className="content">
      <h1 class="title">About</h1>
      <div style={{display:"flex", flexDirection:"row"}}>
        <p style={{fontSize:24}}>
        In the spring of 2013, I graduated from Syracuse University with a dual Major in Accounting and Finance. After spending six years leading multiple technology initiatives at both Macy's and Bed, Bath and beyond, I enrolled in Flatiron School to gain a deeper understanding of code. 

      </p>

        <img src={require('../assets/headshot.png')} />
      </div>
    </div>
  )
}

export default AboutMe 