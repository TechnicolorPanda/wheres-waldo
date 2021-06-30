import './App.css';
import React from 'react';
import PlayGame from './components/PlayGame';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
        <div className = 'content'>
          <Switch>
            <Route path = '/playgame' component = {PlayGame} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
