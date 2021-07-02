import React from 'react';

const ScoreList = (props) => {

  const { 
    name,
  } = props;

  console.log('score list');

  return (
    <div className = 'content'>
        <div className = 'score-list' id = 'score-list'>
          <ul>
            {name}
          </ul>
      </div>
    </div>
  );
}

export default ScoreList;