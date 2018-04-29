import React from 'react'
import Name from './Name'

class Namelist extends React.Component {
  render() {
    let peopleArray = this.props.names
    let toDisplay = peopleArray.map((person) =>
      <Name key={person.id} personName={person.name} index={person.id} onClickPerson={this.props.onClickPerson}/>
    )

    return(
      <div className="list-group name-list">
          {toDisplay}
      </div>
    )
  }
}

export default Namelist



