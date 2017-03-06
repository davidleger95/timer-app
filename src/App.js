import React, { Component } from 'react';
import './App.css';

import TimeDisplay from './components/TimeDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeDisplay time={12345} />
      </div>
    );
  }
}

export default App;
