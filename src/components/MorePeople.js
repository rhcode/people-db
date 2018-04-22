import React from 'react'

class MorePeople extends React.Component {
  render() {
    return(
      <div className="controls row align-items-center justify-content-center">
        <button
          type="button"
          className="btn btn-primary col-lg-6"
          onClick={() => this.props.handleClick('https://randomuser.me/api/?results=5&inc=name,email,location&nat=gb,us,es')}
         >Add more people</button>
      </div>
    )
  }
}

export default MorePeople
