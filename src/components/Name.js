import React from 'react'

class Name extends React.Component {
  render() {
    return(
      <li className="list-group-item" onClick={() => this.props.displayFunc}>
        {this.props.personName}
        <button type="button" className="close">
          &times;
        </button>
      </li>
    )
  }
}

export default Name
