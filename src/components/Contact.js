import React from 'react'

const Contact = () => {
  return (
    <div className='container my-5'>
      <form className="row g-3">
  <div className="col-md-6">
    <label for="inputName" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputName" autoComplete='off' required/>
  </div>
  
  <div className="col-6">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress"  autoComplete='off' required/>
  </div>
  <div className="col-md-6">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>Bihar</option>
      <option>Up</option>
      <option>Tan</option>
    </select>
  </div>
  
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-12">
    <label for="inputPassword4" className="form-label">Message</label>
    <textarea rows={6} className="form-control" id="inputPassword4"autoComplete='off' required/>
  </div>
 
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-success">Submit</button>
  </div>
</form>
    </div>
  )
}

export default Contact
