import React from 'react'

const Service = () => {
  return (
    <div className="container px-4 py-5" id="hanging-icons">
    <h2 className="pb-2 border-bottom">Service</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex-wrap align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <i className="fa-sharp fa-solid fa-code" width="1em" height="1em"></i> <br></br>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Web Development</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          
        </div>
      </div>
      <div className="col d-flex-wrap align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <i className="fa-solid fa-database"></i>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Data Management</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          
        </div>
      </div>
      <div className="col d-flex-wrap align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <i className="fa-solid fa-user"></i>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Help Customer</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Service
