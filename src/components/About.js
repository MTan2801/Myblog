import React from 'react'

const About = () => {
  return (
    <div className="container  px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src='https://images.unsplash.com/photo-1498049860654-af1a5c566876?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width="700" height="500"></img>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Us</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact me</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Hire me</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
