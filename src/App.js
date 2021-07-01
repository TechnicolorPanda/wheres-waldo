import './App.css';
import React from 'react';
import PlayGame from './components/PlayGame';
import HighScores from './components/HighScores';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className = 'App'>
        <div className = 'play-board'>
          <Switch>
            <Route path = '/' exact component = {PlayGame} />
            <Route path = '/high-scores' exact component = {HighScores} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
