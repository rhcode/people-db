import React from 'react'

class Name extends React.Component {
  render() {
    return(
      <li className="list-group-item list-group-item-action" onClick={() => this.props.onClickPerson(this.props.index)}>
          {this.props.personName}
      </li>
    )
  }
}

export default Name
