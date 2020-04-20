import React from 'react'
import Footer from '../Component/Footer'

function Education() {
    return (
        <div>
            <section className="jumbotron">
                <div className='container'>
                    <div className="row">
                        <h2>Education</h2>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className='col-sm-6'>
                        <p class="font-weight-bold">
                            Syracuse University
          <img src="https://news.syr.edu/wp-content/uploads/2018/02/campus-scene.RS554096_1SU_2845-scr.jpg"
                                className="portrait" />
                            <ul>
                                <li>3.8 GPA</li>
                                <li>Accounting & Finance Double Major</li>
                                <li>Graduated May 2013</li>
                            </ul>
                        </p>
                    </div>

                    <div class='col-sm-6'>
        <p class="font-weight-bold">
          Flatiron School
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png" class="portrait"/ >
          <ul>
            <li>Jan - May 2019</li>
            <li>Software Engineering Program</li>
          </ul>
        </p>
      </div>
                </div>
            </section>


        </div>
    )
}

export default Education 