import React from 'react';

const ScoreList = (props) => {

  const { 
    name,
    time,
  } = props;

  console.log('score list');

  return (
    <div className = 'content'>
        <div className = 'score-list' id = 'score-list'>
          <ul>
            {name}: { time}
          </ul>
      </div>
    </div>
  );
}

export default ScoreList;