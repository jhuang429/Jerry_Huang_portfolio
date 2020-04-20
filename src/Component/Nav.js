import React from 'react'

function Nav() {
  return (
    <header className="container">
      <div className="row">
        <h1 className="col-sm-6">
          Jerry Huang
          </h1>
        <nav className="sm-6 text-right">
          <a href="/">Home</a>
          <a href="about.html">Experience</a>
          <a href="education.html">Education</a>
          <a href="experience.html">Resume</a>
          <a href="experience.html">Projects</a>
        </nav>
      </div>

    </header>
  )
}

export default Nav