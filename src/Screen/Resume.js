import React from 'react'
import Jumbotron from '../Component/Jumbotron'
import Jerry_Huang_Resume from "../assets/Jerry_Huang_Resume.pdf"


function Resume() {
    return (
        <div>
            <h1 class="title">Resume</h1>
            <div>
                {Jerry_Huang_Resume && <object data={Jerry_Huang_Resume} style={{ width: "50em", height: "50em" }} />}
            </div>
        </div>
    )
}

export default Resume

