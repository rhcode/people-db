import React from 'react'

class PersonDetails extends React.Component {
  render() {
    return(
      <div className="col-lg-8 person-details row">
        <img className="rounded d-inline col-lg-3" src="https://randomuser.me/api/portraits/men/11.jpg" width="150" height="200" alt="Generic placeholder"/>
        <div className="content d-inline col-lg-9">
          <h1 className="display-4 text-center">John Mayer</h1>
          <p className="lead text-center">romain.hoogmoed@example.com</p>
          <hr className="my-4"></hr>
          <div className="address text-center">
            <h5>Address</h5>
            17 Valley St<br></br>
            Apt 107<br></br>
            Seattle, WA<br></br>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonDetails
