import React from 'react'
import "./Home.css"
import LatesVideos from './LatesVideos'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="bg-dark text-secondary px-4 py-5 text-center" id="home">
    <div className="py-5">
      <h1 className="display-5 fw-bold ">Dark color hero</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4 text-dark">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/course"> <button type="button" className="btn btn-info btn-lg px-4 me-sm-3 fw-bold">Course</button></Link>
          <Link to="/about"><button type="button" className="btn btn-light btn-lg px-4">Read more</button></Link>
        </div>
      </div>
    </div>
  </div>
  <LatesVideos/>
  </>
  )
}

export default Home
