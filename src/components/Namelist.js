import React from 'react'
import { connect } from 'react-redux'
import { namesFetchData, displayPersonName } from '../actions/nameActions'
import Name from './Name'

class Namelist extends React.Component {
  componentDidMount() {
    this.props.namesFetchData('https://randomuser.me/api/?results=5&inc=name,email,location&nat=gb,us,es')
  }

  render() {
    let peopleArray = [...this.props.names]
    let toDisplay = peopleArray.map((person, index) =>
      <Name key={index} personName={person.name}/>
    )
    return(
      <div className="list-group name-list">
          {toDisplay}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    names: [...state.names]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    namesFetchData: (url) => dispatch(namesFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Namelist)
