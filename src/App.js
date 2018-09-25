import React, { Component } from 'react';
import JobScreen from 'modules/job/screens/JobScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Swoop</h1>
        </header>
        <div className="App-intro">
          <p />
          <JobScreen />
        </div>
      </div>
    );
  }
}

export default App;
