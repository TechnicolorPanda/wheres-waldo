import React, { useState, useEffect } from 'react';
import ScoreList from './ScoreList';
import Score from './Score';
import database from './firebase';
import uniqid from 'uniqid';

const HighScores = () => {

  const [highScores, setHighScores] = useState([]);


    return (
        <div>
          <ScoreList
            highScores = {highScores}
          />
        </div>
      )
}   

export default HighScores;
