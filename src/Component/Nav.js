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
          <a href="/experience">Experience</a>
          <a href="/education">Education</a>
          <a href="/resume">Resume</a>
          <a href="/projects">Projects</a>
        </nav>
      </div>

    </header>
  )
}

export default Nav