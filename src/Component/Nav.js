import React from 'react'

function Nav() {
  return (
    // <header className="container">
    //   <div className="row">
    //     <h1 className="col-sm-6">
    //       Jerry Huang
    //       </h1>
    //     <nav className="sm-6 text-right">
    //       <a href="/">Home</a>
    //       <a href="/experience">Experience</a>
    //       <a href="/education">Education</a>
    //       <a href="/resume">Resume</a>
    //       <a href="/projects">Projects</a>
    //     </nav>
    //   </div>

    // </header>


    <div className="nav-menu">
       <span>|</span>
       <a href="/" className="nav-item">HOME</a>
       <span>|</span>
       <a href="/about" className="nav-item">ABOUT</a>         
       <span>|</span>
       {/* <a href="/work" className="nav-item">WORK</a>
       <span>|</span> */}
       <a href="/projects" className="nav-item">PROJECTS</a>         
       <span>|</span>
       <a href="/resume" className="nav-item">RESUME</a>
       <span>|</span>
    </div>

  )
}

export default Nav