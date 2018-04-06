import React from 'react'
import Navbar from './Navbar'
import Namelist from './Namelist'

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="main-content">
        <Navbar/>
        <div className="row">
          <div className="col-lg-4 left-pane">
          <Namelist/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
