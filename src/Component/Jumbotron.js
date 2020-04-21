import React from 'react'

function Jumbotron(props) {
    return(
        <div>
        <section className="jumbotron">
        <div className='container'>
          <div className="row">
            <h2>{props.title}</h2>
        </div>
           <div className="row">
          <h3>{props.subtitle}</h3>
        </div>
        </div>
      </section>
      </div>
    )
}

export default Jumbotron