import React from 'react'

class PersonDetails extends React.Component {
  render() {
    let personDetails = this.props.personToDisplay
    if (typeof personDetails === "undefined") {
      return <h3>Loading...</h3>
    } else {
      return(
        <div className="col-lg-8 person-details row">
          <img className="rounded d-inline col-lg-3" src={personDetails.picture} width="150" height="200" alt="Generic placeholder"/>
          <div className="content d-inline col-lg-9">
            <h1 className="display-4 text-center">{personDetails.name}</h1>
            <p className="lead text-center">{personDetails.email}</p>
            <hr className="my-4"></hr>
            <div className="address text-center">
              <h5>Address</h5>
              {personDetails.location.street}<br></br>
              {personDetails.location.city}<br></br>
              {personDetails.location.state} - {personDetails.location.postcode}<br></br>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default PersonDetails
