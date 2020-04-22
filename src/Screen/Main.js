import React from 'react'
import Footer from '../Component/Footer'
import Jumbotron from '../Component/Jumbotron'


function Main() {
    return (

        <div className="main">
            <h1 class="splash">Jerry Huang is a full stack web developer based in the New York Metro area</h1>

            <div className="links-menu">
                <span>|</span>
                <a href="mailto:jhuang9240@gmail.com" className="nav-item">Email</a>
                <span>|</span>
                <a href="https://www.linkedin.com/in/jerry-huang-a0316927/" target="_blank" className="nav-item">LinkedIn</a>
                <span>|</span>
                <a href="https://github.com/jhuang429" target="_blank" className="nav-item">GitHub</a>
                <span>|</span>
                <a href="https://medium.com/" target="_blank" className="nav-item">Medium</a>
                <span>|</span>
            </div>
        </div>

    )
}

export default Main 