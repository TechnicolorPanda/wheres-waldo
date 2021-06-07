import React from 'react';
import '../styles/tagged-image.css';

const TaggedImage = (props) => {

  const { 
    photo,
  } = props;

  return (
    <div className = 'content'>
      <div className = 'body'>
        <img className = 'photo' src = {photo} alt = 'Wheres Waldo Beach Scene'/>
      </div>
    </div>
  );
}

export default TaggedImage;