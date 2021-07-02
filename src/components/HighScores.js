import React, { useState, useEffect } from 'react';
import ScoreList from './ScoreList';
import uniqid from 'uniqid';
import '../styles/high-scores.css';
import database from './firebase';

const HighScores = () => {

  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const enterName = (event) => {
    event.preventDefault();
    const newName = event.target.name.value;
    // setNames(names => names.concat(newName));
    const savedName = {name: newName};
    database.collection('high-scores').doc(name).set(savedName).then(() => {
      console.log("Document successfully written!");
  });
  }

  useEffect(() => {
    let playerNames = [];
    database.collection('high-scores').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        playerNames = playerNames.concat(doc.data().name);
      });
      setNames(playerNames);
    })
  }, []);

  console.log('high scores');

  return (
    <div>
      <form onSubmit = {enterName}>
        <label htmlFor = 'nameInput'>Name </label>
        <input 
          onChange = {event => setName(event.target.value)}
          value = {name}
          name = 'name'
          type = 'text' 
          id = 'nameInput' />
        <button>Submit</button>
      </form>

      <h2>High Scores</h2>

      {names.map((name) => {
        return(<ScoreList key = {uniqid()}
          name = {name} 
        />
      )})}
    </div>
  )
}   

export default HighScores;
