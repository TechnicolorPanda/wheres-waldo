import React, { Component } from 'react';
import PlayGame from './components/PlayGame';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "play-board">
        <PlayGame/>
      </div>
    );
  }
}

export default App;
