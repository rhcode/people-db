import React from 'react'
import Navbar from './Navbar'
import Namelist from './Namelist'
import PersonDetails from './PersonDetails'
import MorePeople from './MorePeople'
import { connect } from 'react-redux'
import { namesFetchData, displayPerson } from '../actions/nameActions'

class App extends React.Component {
  componentWillMount() {
    this.props.namesFetchData('https://randomuser.me/api/?results=5&inc=name,email,location,picture&nat=gb,us,es')
  }

  getPersonToBeDisplayed = (names, currentPersonId) => {
    for (var p of names) {
      if (p.id === currentPersonId)
        return p
    }
  }

  render() {
    const {isLoading, names, currentPersonId, namesFetchData, changeDisplayedPerson} = this.props

    return (
      <div className="container-fluid" id="main-content">
        <Navbar/>
        <div className="row">
          <div className="col-lg-4 left-pane">
          {!isLoading && <Namelist names={names} onClickPerson={changeDisplayedPerson}/>}
          {isLoading && <h3>Loading ...</h3>}
          <MorePeople handleClick={namesFetchData}/>
          </div>
          {!isLoading && <PersonDetails personToDisplay={this.getPersonToBeDisplayed(names, currentPersonId)}/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    names: state.people,
    isLoading: state.isLoading,
    currentPersonId: state.currentPersonId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    namesFetchData: (url) => dispatch(namesFetchData(url)),
    changeDisplayedPerson: (personId) => dispatch(displayPerson(personId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
