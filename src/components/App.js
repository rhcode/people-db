import React from 'react'
import Navbar from './Navbar'
import Namelist from './Namelist'
import PersonDetails from './PersonDetails'
import MorePeople from './MorePeople'
import { connect } from 'react-redux'
import { namesFetchData } from '../actions/nameActions'

class App extends React.Component {
  componentWillMount() {
    this.props.namesFetchData('https://randomuser.me/api/?results=5&inc=name,email,location&nat=gb,us,es')
  }

  render() {
    const {isLoading, names} = this.props
    return (
      <div className="container-fluid" id="main-content">
        <Navbar/>
        <div className="row">
          <div className="col-lg-4 left-pane">
          {!isLoading && <Namelist names={names}/>}
          {isLoading && <h3>Loading ...</h3>}
          <MorePeople handleClick={this.props.namesFetchData}/>
          </div>
          <PersonDetails/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    names: state.people,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    namesFetchData: (url) => dispatch(namesFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
