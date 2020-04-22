import React from 'react'
import Jumbotron from '../Component/Jumbotron'
import Jerry_Huang_Resume from "../assets/Jerry_Huang_Resume.pdf"


function Resume() {
    return (
        <div className="content">
            <h1 class="title">Resume</h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {Jerry_Huang_Resume && <object data={Jerry_Huang_Resume} style={{ width: "70%", height: 1000 }} />}
            </div>
        </div>
    )
}

export default Resume

