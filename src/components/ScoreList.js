import React from 'react';

const ScoreList = (props) => {

  const { 
    highScores
  } = props;

  return (
    <div className = 'content'>
        <div className = 'score-list' id = 'score-list'>
          <ul>
            {highScores}
          </ul>
      </div>
    </div>
  );
}

export default ScoreList;