import React from 'react'

class Name extends React.Component {
  render() {
    return(
      <li className="list-group-item list-group-item-action" onClick={() => alert("hello")}>
          {this.props.personName}
      </li>
    )
  }
}

export default Name
