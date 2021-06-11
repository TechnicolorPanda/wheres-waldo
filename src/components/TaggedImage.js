import React from 'react';
import '../styles/tagged-image.css';

const TaggedImage = (props) => {

  const { 
    photo,
    findItem,
  } = props;

  return (
    <div className = 'content'>
      <div className = 'body'>
        <img className = 'play' src = {photo} alt = 'Wheres Waldo Beach Scene'
          onClick = {findItem}
        ></img>
        <div className = 'dropdown-content' id = 'dropdown-content'>
          <ul>
            <li>Waldo</li>
            <li>cactus</li>
            <li>winter scarf</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaggedImage;