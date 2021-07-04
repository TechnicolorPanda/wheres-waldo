import React, { useState, useEffect } from 'react';
import ScoreList from './ScoreList';
import uniqid from 'uniqid';
import '../styles/high-scores.css';
import database from './firebase';

const HighScores = (props) => {

  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const time = props.location.state.timer;

  // writes player name to high score list

  const enterName = (event) => {
    event.preventDefault();
    const newName = event.target.name.value;
    const savedPlayer = {
      name: newName,
      time: time,
    };
    database.collection('high-scores').doc(name).set(savedPlayer).then(() => {
      console.log("Document successfully written!");
    });
    setRefreshList(true);
  }

  // retrieves and displays high score list from Firebase

  useEffect(() => {
    let playerNames;
    let playerTimes;
    let playerInfo = [];
    let playerList = [];
    database.collection('high-scores').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        playerNames = doc.data().name;
        playerTimes = doc.data().time;
        playerInfo = playerInfo.concat({name: playerNames, time: playerTimes});

        // sorts times from fastest to slowest
        
        playerList = playerInfo.sort((a, b) => a.time - b.time ? 1 : -1);
      });
      setNames(playerList);
    })
  }, [refreshList]);

  return (

    <div id = 'background'> 

      {/* displays form to enter name into high score list */}

      {refreshList ? null:
        <form onSubmit = {enterName}>
          <label htmlFor = 'nameInput'>Name </label>
          <input 
            onChange = {event => setName(event.target.value)}
            value = {name}
            name = 'name'
            type = 'text' 
            id = 'nameInput' />
          <button id = 'submit'>Submit</button>
        </form>
      }

      {/* displays retrieved high score list */}

      <div id = 'scores'>
        <h2>High Scores</h2>

        {names.map((playerInfo) => {
          return(<ScoreList key = {uniqid()}
            name = {playerInfo.name}
            time = {playerInfo.time}
          />
        )})}
      </div>
    </div>
  )
}   

export default HighScores;
