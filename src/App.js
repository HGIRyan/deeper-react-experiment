import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    myName: 'Ryan',
    day: 'Weekdays'

  }
  update = () => {
    if(this.state.myName === 'Ryan'){
      this.setState({
        myName:'Rikoris', day: 'Saturday'
      })
    } else {
      this.setState({
        myName: 'Ryan', day: 'Weekdays'
      })
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.myName}
        <br/>
        {this.state.day}
        <br/>
        <button onClick={this.update}>Update Name</button>
      </div>
    );
  }
}

export default App;
